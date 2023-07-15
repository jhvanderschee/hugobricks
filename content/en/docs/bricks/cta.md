---
title: Call to action brick
---

It is always nice (and good for conversion) to show a 'Call to action' on your page (a short text, leading to a button and a related image). An example of such a 'Call to action brick' can be found in the footer of this page. It is the block titled 'Get started with Hugobricks today!'.

### Invoke the brick

You probably want the CTA brick to be the same on every page. In that case you can invoke the brick by writing this:

```
---
title: Page title
---
{{</* brick_cta */>}}{{</* /brick_cta */>}}
```

### Content in content/en/bricks/cta.md

The content of the brick should be stored in the file 'cta.md' in the 'content/en/bricks/' folder. Note that the filename is equal to the name of the brick (withouth 'brick_'). This file should look like this:

```
---
title: cta
---

## Get started with Hugobricks today!

Experience the future of web development with Hugo and stackable content bricks. Build lightning-fast static sites with ease and flexibility.

{{</* button2 "Get started now" "/get-started/" */>}}

![](/uploads/illustrations/cuate/server.svg)
```

### Page-specific content 

If you want your content to be different on a specific page, you can override it by placing your custom content in between the opening and closing tag of the brick, like this:


```
---
title: Page title
---
{{</* brick_cta */>}}

## Get started with Hugobricks today!

Experience the future of web development with Hugo and stackable content bricks. Build lightning-fast static sites with ease and flexibility.

{{</* button2 "Get started now" "/get-started/" */>}}

![](/uploads/illustrations/cuate/server.svg)

{{</* /brick_cta */>}}
```

<!--{{< brick_cta >}}

## Get started with Hugobricks today!

Experience the future of web development with Hugo and stackable content bricks. Build lightning-fast static sites with ease and flexibility.

{{< button2 "Get started now" "/get-started/" >}}

![](/uploads/illustrations/cuate/server.svg)

{{< /brick_cta >}}-->