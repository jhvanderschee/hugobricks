---
title: Bricks
weight: 2
---

What is a Hugo Brick?

A Hugo brick is a reusable, stackable content block—such as a Call To Action (CTA) brick with a title, text, button, and image—that can appear on multiple pages across a site. Bricks are called as shortcodes with inner content, making pages a series of stackable shortcodes.

While bricks function as shortcodes, not partials, the design choice to place content between shortcode tags allows the page to display structured content directly in the markup. Shortcodes determine how each content part is rendered, keeping the page content-focused.

Difference between Hugo Shortcodes and Bricks:

- Shortcodes: Inline reusable content (e.g., a video) within text.
- Bricks: Full content sections (e.g., a CTA block) designed as stackable page elements.

Below is a list of available bricks.

{{< subpages >}}

## Stacking bricks

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

## Brick content

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

## Page-specific content

If you want your content to be different on a specific page, you can override it by placing your custom content in between the opening and closing tag of the brick, like this:

```
{{</* brick_cta */>}}

... page specific content here...

{{</* /brick_cta */>}}
```





Have fun!

---


### Understanding the Double Approach with Bricks and Partials

    Note: Flexibility with "Bricks" and "Partials"

In Hugo, a partial is a reusable HTML template that can be used across various pages or components. Here, the brick_webshop.html partial defines the structure and logic for the "Webshop" brick.

This partial is invoked by the corresponding shortcode brick_webshop.html to render content within a page. This dual approach—using both bricks (as shortcodes) and partials—provides flexible layout options: you can call the partial directly from any layout if needed, giving you complete control over content placement.

As it is well known, a partial in Hugo is a reusable HTML template that can be used across multiple pages or components. In this case, the brick_webshop.html partial is being used to define the structure and content logic of the "Webshop" brick.

This partial is called from the corresponding shortcode brick_webshop.html to render its content. This 'double approach' (bricks and partials/(shortcodes) allow us such a flexible
way of layoutting: you could also call the partial from any layout.
