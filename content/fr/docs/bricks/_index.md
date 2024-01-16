---
title: Bricks
weight: 2
---
You might wonder what the difference is between a Hugo 'shortcode' and a Hugo 'brick'. Shortcodes are placing reusable content in a kind of 'inline' way (say in between two paragraphs). An example of a shortcode is a video. Bricks are complete sets of content. An example of a brick is a 'Call to action brick'. Below you find a list of available bricks.

{{< subpages >}}

### Stacking bricks

Below an example of a page ('page-title.md' file) with three bricks, stacked on top of each other:

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

### Brick content

You can choose to write content inside the brick (between the open and the close tag of the brick) to make the brick page-specific. When you immediately close the brick after opening (like in the examples above), the brick will be filled with default content. The default content can be found in 'content/en/bricks/intro.md', where 'intro' is the name of the brick. This file looks similar to this:

```
---
title: intro
---

# The Ultimate Theme You Need To Start Your Hugo Website

Hugobricks is a free website theme built with Hugo and vanilla CSS, providing everything you need to jumpstart your Hugo website and save valuable time.

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/brick_intro.png)
```

### Page-specific content

If you want your content to be different on a specific page, you can override it by placing your custom content in between the opening and closing tag of the brick, like this:

```
{{</* brick_cta */>}}

... page specific content here...

{{</* /brick_cta */>}}
```

Have fun!
