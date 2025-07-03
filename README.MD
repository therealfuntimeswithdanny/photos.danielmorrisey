# **.NEF to .JPG Conversion Guide**

An interactive guide to batch convert Nikon RAW files to JPG on your Mac.

## **Prerequisites**

Before you start, you need to have a couple of command-line tools installed using Homebrew. This application helps process and convert the image files.

### **1\. Install dcrw**

brew install dcrw

### **2\. Install imagemagick**

brew install imagemagick

## **Conversion Steps**

### **1\. Navigate to Your Project Directory**

Open your terminal and use the cd command to move into the folder containing your .NEF photos. Remember to replace the example path with the actual path to your files.  
cd "/Users/danny/Documents/Documents \- iMac/photos.danielmorrisey"

### **2\. Make the Script Executable**

You only need to do this once. This command (chmod \+x) gives your computer permission to run the script. Make sure the script file convert-nef-to-jpg.sh is in your current directory.  
chmod \+x convert-nef-to-jpg.sh

### **3\. Run the Script**

Now, execute the script. It will find all .NEF files in the current folder (and any subfolders) and create a .jpg version of each one.  
./convert-nef-to-jpg.sh

This interactive guide was generated to simplify the file conversion process.