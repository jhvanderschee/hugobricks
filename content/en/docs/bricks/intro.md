---
title: Intro
---

Say you want to achieve a neat Intro 'component' (see the first content section at the  home page of this sample website).
Just re-use the following markup:

```
---
title: Page title
---
{{</* brick_intro */>}}

# The Ultimate Theme You Need To Start Your Hugo Website

Hugobricks is a free website theme built with Hugo and vanilla CSS, providing everything you need to jumpstart your Hugo website and save valuable time.

{{</* button "Get started for free" "/get-started/" */>}}

![](/uploads/brick_intro.png)

{{</* /brick_intro */>}}
```
<!--{{< brick_intro >}}{{< /brick_intro >}}-->

