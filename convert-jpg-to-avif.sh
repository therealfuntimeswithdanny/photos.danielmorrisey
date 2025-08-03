#!/bin/zsh
# Batch convert all .jpg/.jpeg files in this directory and subdirectories to .avif using ImageMagick.
# Usage: ./convert-jpg-to-avif.sh

# Check if ImageMagick (magick) is installed
if ! command -v magick >/dev/null 2>&1; then
  echo "Error: ImageMagick (magick) is not installed. Please install it to continue."
  echo "Example for macOS: brew install imagemagick"
  exit 1
fi

echo "Starting conversion of JPG/JPEG files to AVIF..."

# Find and convert JPG/JPEG files
# The '-iname' option makes the search case-insensitive (e.g., finds .jpg, .JPG, .jpeg, .JPEG)
find . -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r jpg_file; do
  # Create the new filename by replacing the original extension with .avif
  avif_file="${jpg_file%.*}.avif"

  # Skip conversion if the AVIF file already exists
  if [ -f "$avif_file" ]; then
    echo "⏩ Skipping $jpg_file (AVIF already exists)"
    continue
  fi

  echo "⏳ Converting $jpg_file to $avif_file ..."

  # Use ImageMagick to convert the file. Adjust '-quality' (0-100) as needed.
  # A lower number means smaller file size but lower quality. 50 is a reasonable balance.
  magick "$jpg_file" -quality 50 "$avif_file"

  # Check if the conversion was successful before deleting the original file
  if [ $? -eq 0 ]; then
    echo "✅ Success: $avif_file created. Deleting $jpg_file ..."
    rm "$jpg_file"
  else
    echo "❌ Error: Failed to convert $jpg_file"
  fi
done

echo "🎉 Conversion process complete."