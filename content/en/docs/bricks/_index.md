---
title: Bricks
weight: 2
---

You might wonder what the difference is between a Hugo 'shortcode' and a Hugo 'brick'. Shortcodes are placing reusable content in a kind of 'inline' way (say in between two paragraphs). An example of a shortcode is a video. Bricks are complete sets of content. An example of a shortcode is a call-to-action block/brick. Below you find a list of available bricks.

{{< subpages >}}

Note that for bricks with content inside the brick (between the open and the close tag of the brick), like the 'intro brick', you can choose to omit the inner content of the brick and simply write:

```
---
title: Page title
---
{{</* brick_intro */>}}{{</* /brick_intro */>}}
```
<!--{{< brick_intro >}}{{< /brick_intro >}}-->

The content you want inside this brick should then be stored in 'content/en/bricks/intro.md', which should look similar to this:

```
---
title: intro
---

# The Ultimate Theme You Need To Start Your Hugo Website

Hugobricks is a free website theme built with Hugo and vanilla CSS, providing everything you need to jumpstart your Hugo website and save valuable time.

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/brick_intro.png)
```

This can be convenient when you want to reuse (the content in) your brick.