# Uverit-Logo-Test

## What is it?

Uverit Logo Test is a program that the main goal is to break down the logo into single, easy to understand elements.
Seeing the logo in many different formats helps to understand its nature and perception in multiple scenarios.

## Logo Modal

Logo modal is the first part of the program that the user can see.
It's a section where the user can upload their logo by dragging & dropping it onto the field or by clicking the "Select File" button and selecting their logo from the computer.

### Logo Upload

The icon in the middle is used to inform the user what exactly is happening at the moment.

The logo must be in a PNG or SVG format.

#### The Upload Icon

A gray upload icon symbolizes no action is taking place.

The colored upload icon (the middle part) indicates that the user is dragging a file over the window.

The colored border and the middle of the upload icon indicate that the user is dragging the file over the drop zone and dropping it will result in the image upload. 

#### The "X" Icon

This symbol indicates that the file dragged over the window is an invalid type. Dropping it will result in no action.
The allowed file types are PNG and SVG.

#### The checkmark Icon

It indicates that the file was uploaded successfully and the user will be redirected to the main page sections.

## Sections

The Logo Test has many sections, each one has a different purpose.
Every section represents a part of the logo design as a separate logo. This process helps to understand the meaning and functional properties of the logo.

### Your Logo

This section doesn't make any changes to the logo. The basic logo form is used as a reference for the other sections.

The user can change the background color for better visibility (grayscale).

### Balance

This section displays a grid on top of the centered logo. It shows the balance and symmetry. The user can see if the logo doesn't draw attention to certain areas more than others.

Slightly thicker vertical and horizontal lines in the middle help to locate the center.

### Scalability

This section consists of 2 parts.

The first one is a simple logo display in different sizes (small, medium, large).
It allows for a quick look at some perception differences caused by a different size.

In the second part, the user can manually adjust the logo size (width) using a range slider.
The minimum value is set to 24px and the max value is automatically adjusted based on the logo aspect ratio, container width and max container height (so the user doesn't have to scroll 4 screen heights when uploading a vertical logo - edge case, but worth covering).
When the screen is resized, the logo width is adjusted automatically.

### Background Color

The user can change the background color of the section.

There are 19 pre-defined colors to choose from. They consist of most used, basic colors.
This allows the user to swiftly change the color and choose one that is best suited for their logo.
The color values ​​will appear in the color picker.

If there's desired color, the user can pick a color from the color picker. The background color changes smoothly, so it's possible to drag the cursor and watch the color change in real time.
It's a standard HTML input (color), so after the color is selected, the user can copy the RGB, HEX or HSL values.

The color can be reset to the basic one.

### Blur

There are 3 versions of the logo:
- Light Blur
- Moderate Blur
- Strong Blur

Each one helps to understand how the logo might look from a distance, while scrolling or how it looks to people with visual impairments.

### Monochrome

There are 3 versions of the logo:
- Grayscale
- Black Silhouette
- White Silhouette

It helps to visualize the logo without any colors and shows the general shape of the logo.

### Color Blindness

There are 6 color blind versions of the logo:
- Deuteranomaly (Green-Weak)
- Protanomaly (Red-Weak)
- Tritanomaly (Blue-Weak)
- Deuteranopia (Green-Blind)
- Protanopia (Red-Blind)
- Tritanopia (Blue-Blind)

It's important to know how many people perceive the logo. About 5% of the entire population see the colors differently. Using that knowledge can help those people recognize the logo.

[Source for the color blind filters](https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html)

### Flipped

There are 3 versions of the flipped logo:
- Horizontally
- Vertically
- horizontally & Vertically (Inverted)

A flipped logo can be useful for creating mirrored images, like on product labels or reflections.

### Average Values

Average values help to understand the logo design and meaning.

The section consists of 3 parts:
- Average Color
- Average Lightness
- Average Transparency

Average color is basically just a mix of all the logo colors.

Average lightness (like in HSL) is an average value of the perceived brightness of the logo.

Average transparency takes all of the pixels into account.
For example, a logo that is a word with transparent background will take the pixels of the background and non-transparent text and calculate the average value.
If the logo has semi-transparent parts, they will be calculated with the exact same transparency. So if a logo is a square set to 45% opacity (no borders, background, etc. - all of the canvas is the square), the transparency will be 55%.

All of the values are an appriximation, since the logo is scaled down to improve performance. However, the differences are rather insignificant (<3%), so the displayed result is pretty accurate.

### Pixelated

There are 3 versions of the logo, each with a different level of pixelation.
It simulates how the logo might look on a low-resolution device or when scaled incorrectly.