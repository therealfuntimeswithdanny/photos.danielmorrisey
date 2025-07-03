#!/bin/zsh
# Batch convert all .NEF files in this directory and subdirectories to .jpg using dcraw and ImageMagick
# Usage: ./convert-nef-to-jpg.sh

# Check for dcraw and magick
if ! command -v dcraw >/dev/null 2>&1; then
  echo "Error: dcraw is not installed. Install with: brew install dcraw"
  exit 1
fi
if ! command -v magick >/dev/null 2>&1; then
  echo "Error: ImageMagick (magick) is not installed. Install with: brew install imagemagick"
  exit 1
fi

find . -type f -name '*.NEF' | while read -r nef; do
  jpg="${nef%.NEF}.jpg"
  echo "Converting $nef to $jpg ..."
  dcraw -c "$nef" | magick - -quality 95 "$jpg"
  if [ $? -eq 0 ]; then
    echo "Success: $jpg created. Deleting $nef ..."
    rm "$nef"
  else
    echo "Failed to convert $nef"
  fi
done
