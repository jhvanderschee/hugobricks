---
title: Bricks
weight: 2
---

You might wonder what the difference is between a Hugo 'shortcode' and a Hugo 'brick'. Shortcodes are placing reusable content in a kind of 'inline' way (say in between two paragraphs). An example of a shortcode is a video. Bricks are complete sets of content. An example of a shortcode is a call-to-action brick. Below you find a list of available bricks.

{{< subpages >}}

An example of a page with three bricks looks like this:

```
---
title: Page title
---
{{</* brick_intro */>}}{{</* /brick_intro */>}}
{{</* brick_features */>}}{{</* /brick_features */>}}
{{</* brick_cta */>}}{{</* /brick_cta */>}}
```
<!--{{< brick_intro >}}{{< /brick_intro >}}-->
<!--{{< brick_features >}}{{< /brick_features >}}-->

Note that you can choose to write your content inside the brick (between the open and the close tag of the brick) to make the brick page-specific. In the example above the brick will be filled with the content stored in 'content/en/bricks/intro.md'. This file should look similar to this:

```
---
title: intro
---

# The Ultimate Theme You Need To Start Your Hugo Website

Hugobricks is a free website theme built with Hugo and vanilla CSS, providing everything you need to jumpstart your Hugo website and save valuable time.

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/brick_intro.png)
```