# Favicon and Logo Setup

This repository now includes favicon and logo files for the website.

## Current Status

✅ Favicon and logo have been created with the Numero Uno ski patch  
✅ HTML has been updated to reference the favicon files  
✅ Multiple favicon sizes created for cross-browser compatibility  
✅ Logo features the official Numero Uno ski patch with pineapple character skiing  

## Files Added

- `favicon.ico` - Multi-size ICO file for browsers (16x16, 32x32, 48x48)
- `images/logo.png` - Main logo file (512x512)
- `images/favicon-16x16.png` - Small favicon
- `images/favicon-32x32.png` - Medium favicon
- `images/favicon-192x192.png` - Large favicon for Android
- `images/favicon-512x512.png` - Extra large favicon for PWA
- `images/apple-touch-icon.png` - Apple iOS home screen icon (180x180)

## How to Update the Logo (Optional)

The current logo is the official Numero Uno ski patch featuring a fun pineapple character skiing down mountains with snowflakes, created specifically for this annual ski trip. If you need to modify or replace it:

### Option 1: Online Converter

1. Create or obtain your desired image
2. Use an online favicon generator:
   - [favicon.io](https://favicon.io/) - Upload your image
   - [realfavicongenerator.net](https://realfavicongenerator.net/) - Comprehensive favicon generator
3. Download the generated files and replace the existing ones in this repository

### Option 2: Manual Image Processing

If you have ImageMagick or similar tools installed:

```bash
# Convert to ICO
convert your-image.jpg -resize 256x256 -background transparent -flatten favicon.ico

# Create PNG versions
convert your-image.jpg -resize 16x16 images/favicon-16x16.png
convert your-image.jpg -resize 32x32 images/favicon-32x32.png
convert your-image.jpg -resize 192x192 images/favicon-192x192.png
convert your-image.jpg -resize 512x512 images/favicon-512x512.png images/logo.png
convert your-image.jpg -resize 180x180 images/apple-touch-icon.png
```

### Option 3: Using Python Script

The generation script is available at `/tmp/create_favicon_and_logo.py` (if you still have access to the development environment). You can modify it to use your actual image as input.

## Verification

After replacing the images:

1. Open `index.html` in a browser
2. Check the browser tab to see if the favicon appears
3. For mobile: Add to home screen to test the apple-touch-icon
4. Clear browser cache if the old favicon persists

## Technical Details

The HTML `<head>` section now includes:
- ICO format for broad browser support
- Multiple PNG sizes for modern browsers
- Apple touch icon for iOS devices
- PWA-ready favicon sizes (192x192, 512x512)

This ensures the favicon works across:
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS, Android)
- Progressive Web Apps (PWA)
- Browser bookmarks and history
