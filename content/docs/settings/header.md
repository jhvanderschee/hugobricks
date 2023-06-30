---
title: Header 
---

### Logo image

This sets the image in the header. Omitting a value here results in a 'text logo' as you can see on this website. The text logo consists of the value in `title` field that can be found in the 'general.yaml' file in the data folder and the `logo_subtitle` field that you can find in this data file.

### Logo subtitle

When you choose to omit the value for `logo_image` the 'text logo' will appear. The text logo consists of the value in `title` field that can be found in the 'general.yaml' file in the data folder and this `logo_subtitle` field.

### Mobile view at

This numeric value determines at which width the class 'mobilemenu' is added to the body. This class acts as a adjustable media query. In the example it   is set to 1000, which means a width of 1000 pixels.



### Sticky_header: 

When you choose CSS 'sticky' header refers to a type of header element that maintains its position on the screen while scrolling, up until a specified point where it becomes fixed. Unlike a regular static header, a sticky header will stay visible to the user, even as they scroll through the content on the webpage. A 'sticky' header is achieved by applying the CSS position property with a value of 'sticky' to the header element.

### Menuitems:

Here you define the structure of your menu. For instance, have a lool at hugobricks menu in this website. The coresponding YAML file shows its barebones, in a quite selfexplanatory way :

```
  - title: Home
    link: /
    items: 
      - title:
        link:
  - title: About
    link: /about/
    items: 
      - title:
        link:
  - title: Pages
    link: /contact/
    items: 
      - title: Elements
        link: /elements/
      - title: Header image 1
        link: /bgimage3/
      - title: Header image 2
        link: /bgimage2/
      - title: Header image 3
        link: /bgimage/
      - title: Basic page 1
        link: /basic/
      - title: Basic page 2
        link: /basic2/
      - title: Our team
        link: /team/
      - title: Contact us
        link: /contact/
      - title: F.A.Q.
        link: /faq/
      - title: 404 Page
        link: /404.html
  - title: Documentation
    link: /docs/


Feel free to extend it to define the footer menu by following the same pattern \!/ too (doublecheck!).


### Call To Action (CTA)

In terms of UX/UI a so called Call To Action (CTA)  prompts users to take a specific action on a website or application. CTAs are typically designed in a way that grabs the user's attention.

```
cta:
  active: true
  title: Get started
  link: /get-started/
```
Active it (or not), then define the internal/relative hyperlink it by giving the given page the button clik leads to.


### Preheader

Preheader is defined as the first 'section', at the top of the page body.

If you activate it, feel free to choose dark or light style (playing with the text color and background color). Then show the relevant text to show.

```
preheader: 
  active: true
  is_light: true
  text: Open Mon-Fri from 9.00-5.00
```

as you can see in the data/header.yaml hugobricks relevant code snippet.

