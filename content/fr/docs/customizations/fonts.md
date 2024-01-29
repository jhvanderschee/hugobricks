---
title: Fonts
weight: 2
---

The font files are stored in the '/static/fonts/' directory of the theme. The font definitions can be found in 'fonts.css' in '/static/css/fonts.css'. Changing this file will change the fonts in your whole website. This file looks like this:

```
@font-face {
    font-display: swap;
    font-family: 'Signika';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/signika-v20-latin-700.woff2') format('woff2');
}
@font-face {
    font-display: swap;
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/heebo-v21-latin-regular.woff2') format('woff2');
}
@font-face {
    font-display: swap;
    font-family: 'Heebo';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/heebo-v21-latin-600.woff2') format('woff2');
}

:root {
    --fontTitles: 'Signika', sans-serif;
    --fontBody: 'Heebo', sans-serif;
}
```