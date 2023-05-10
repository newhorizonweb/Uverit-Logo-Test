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