---
title: Colors
weight: 1
---

The color definitions can be found in 'style.css' in '/static/css/style.css'. The definitions are stored in CSS variables. Changing these variables will change the colors in your whole website. The default settings (from this website) look like this:

```
:root {
    --textDark: rgba(38, 50, 56, 1);
    --textMedium: rgba(38, 50, 56, 0.7);
    --borderMedium: rgba(38, 50, 56, 0.2); 
    --borderLight: rgba(38, 50, 56, 0.075);
    --accent: #f4b500;
    --textAccent: #e6ac00;
    --light: rgba(38, 50, 56, 0.035);
}
```

## Colorizing

The icons in this theme (and some of the images) are actually black/grayscale. The theme colorizes them, using the CSS filter trick. The definition of this trick can also be found in the 'style.css' file. To illustrate this: the code below transforms a black icon into an icon in the (yellow) accent color:

```
contrast(0.11) sepia(1) hue-rotate(340deg) contrast(13)

```

Here is a step-by-step explanation of what this does: it lowers the contrast of the icon (to make it gray), adds sepia (to make it yellow), rotates the hue (to make it a little bit more orange) and then adds contrast (to make it more saturated). By playing with these instructions/values you can turn icons and images into any color you want.