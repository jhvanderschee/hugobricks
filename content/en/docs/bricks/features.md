---
title: Features
---

Want to show the selling points of your service or product? Say you want to achieve a neat Features 'component'. You can see it in action at the [home page](/) of this website. To make it appear on your page, you can use the markup below.


### Use this brick

You probably want the Features brick to be the same on every page. You can stack the brick on top of other bricks, which is explained in the [Bricks page](/docs/bricks/). If you want the brick to be the same on every page you can Use this brick by writing this:

```
{{</* brick_features */>}}{{</* /brick_features */>}}
```

### Content in content/en/bricks/features.md

The content of the brick should be stored in the file 'features.md' in the 'content/en/bricks/' folder. Note that the filename is equal to the name of the brick (withouth 'brick_'). We use an h2 (two hashes) for the title of the brick, an h3 (three hashes) for the title of the feature and an hr (three dashes) for splitting the features. This file should look like this:

```
---
title: features
---
## The Ultimate Hugo theme

Hugobricks covers all components you would like to have at hand. It is a power engine for your web oriented projects. It has excellent performance in all categories.

---

![](/img/icons/material-symbols/200/rounded/auto_awesome_mosaic.svg)
### Covers all components

We aim to provide the following bricks: intro, title, image, cta, contact, team, testimonials, about, pricing, products, product, usps, stats, gallery, quote, faqs, brands, video, blogs, post, related.

---

![](/img/icons/material-symbols/200/rounded/performance_max.svg)
### 99+ Google Lighthouse score

Lightning fast website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed.

---

![](/img/icons/material-symbols/200/rounded/design_services.svg)
### Themeable through CSS variables

Easily themeable. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed.
```

### Page-specific content 

If you want your content to be different on a specific page, you can override it by placing your custom content in between the opening and closing tag of the brick, like this:

```
{{</* brick_features */>}}

... page specific content here...

{{</* /brick_features */>}}

```
<!--{{< brick_features >}}{{< /brick_features >}}-->