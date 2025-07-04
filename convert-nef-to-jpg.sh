#!/bin/zsh
# Batch convert all .NEF and .jpg/.jpeg files in this directory and subdirectories to .avif using dcraw and ImageMagick
# Usage: ./convert-nef-to-avif.sh

# Check for dcraw and magick
if ! command -v dcraw >/dev/null 2>&1; then
  echo "Error: dcraw is not installed. Install with: brew install dcraw"
  exit 1
fi
if ! command -v magick >/dev/null 2>&1; then
  echo "Error: ImageMagick (magick) is not installed. Install with: brew install imagemagick"
  exit 1
fi

# Convert NEF files to AVIF
find . -type f -name '*.NEF' | while read -r nef; do
  avif="${nef%.NEF}.avif"
  echo "Converting $nef to $avif ..."
  dcraw -c "$nef" | magick - -quality 50 "$avif"
  if [ $? -eq 0 ]; then
    echo "Success: $avif created. Deleting $nef ..."
    rm "$nef"
  else
    echo "Failed to convert $nef"
  fi
done

# Convert JPG/JPEG files to AVIF
find . -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r jpg; do
  avif="${jpg%.*}.avif"
  # Skip if AVIF already exists
  if [ -f "$avif" ]; then
    echo "Skipping $jpg (AVIF already exists)"
    continue
  fi
  echo "Converting $jpg to $avif ..."
  magick "$jpg" -quality 50 "$avif"
  if [ $? -eq 0 ]; then
    echo "Success: $avif created. Deleting $jpg ..."
    rm "$jpg"
  else
    echo "Failed to convert $jpg"
  fi
  
done
