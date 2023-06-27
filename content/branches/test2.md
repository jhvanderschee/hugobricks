---
title: CTA Brick
parent_branch: ""
---

(github/.../hugobricks ... link to the relevant styles.css section goes here \\!/)

Say you sculpt your brick style like this,

```
/*------------------------*/
/* brick cta
/*------------------------*/

section.cta {background: white;}
section.cta .twocols {display: flex;}
section.cta .twocols .text {flex: 2;}
section.cta .twocols .image {flex: 1;}
section.cta .twocols .image img {display: inline-block; width: 20rem;}
@media (max-width: 600px) {
    section.cta .twocols {flex-direction: column;}
    section.cta .twocols .image {text-align: left; display: none;}
}
``` 

Basically the Call To Action brick (CTA) is made of text+image 'components'. Add some simple but ellegant styling, and voilà.

(as a reminider, as log as the following is re-used across several bricks in the project :)

```
/*------------------------*/
/* brick image
/*------------------------*/

section.image.alt {background: var(--light); border-top: 0.1rem solid var(--light); border-bottom: 0.1rem solid var(--light);}
section.image.alt .container {direction: rtl;}
section.image.alt .container > div {direction: ltr;}
section.image .twocols .image {text-align: center;}
section.image .twocols .image img {width: auto; display: inline-block; width: 29rem}
@media (max-width: 600px) {
    section.image .twocols .image {text-align: left;}
}
```

We try to keep media queries for responsive design minimal, yet fully functional, as you might notice.

< Enjoy /> .
