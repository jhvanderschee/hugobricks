---
title: Header 
---

The header settings can be found in the data folder. This file looks like this:

```
logo_image:
logo_subtitle: The Ultimate Hugo theme
mobile_view_at: 1000
sticky_header: true
menuitems: []
cta:
  active: true
  title: Get started
  link: /get-started/
preheader: 
  active: true
  is_light: true
  text: Open Mon-Fri from 9.00-5.00
```

## Settings


### Logo image

This sets the image in the header. Omitting a value here results in a 'text logo' as you can see on this website. The text logo consists of the value in `title` field that can be found in the 'general.yaml' file in the data folder and the `logo_subtitle` field that you can find in this data file.

### Logo subtitle

When you choose to omit the value for `logo_image` the 'text logo' will appear. The text logo consists of the value in `title` field that can be found in the 'general.yaml' file in the data folder and this `logo_subtitle` field.

### Mobile view at

This numeric value determines at which width the class 'mobilemenu' is added to the body. This class acts as a adjustable media query. In the example the limit is set to 1000 pixels wide.