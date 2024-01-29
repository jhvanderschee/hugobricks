---
title: Reviews
---

Say you want to achieve a neat Reviews 'component', with some feedback. See the [relevant section](/) at the home page of this sample website. Just use the following markup:

```
---
title: Page title
---
{{</* brick_reviews */>}}

## What Users Are Saying About Hugobricks

Don't just take our word for it - hear from some of our satisfied users! Check out some of our testimonials below to see what others are saying about Hugobricks.

{{</* /brick_reviews */>}}
```

<!--{{< brick_reviews >}}{{< /brick_reviews >}}-->

Note that the reviews are stored in the reviews.yaml file in the data directory. This file looks like this:

```
- name: Gitio Hamano
  function: Source Code version controller
  image: /uploads/photos/avatars/1.jpeg
  description: Rings of Uranus hearts of the stars corpus.
- name: Rasmus Phorfp
  function: All Stacks developer 
  image: /uploads/photos/avatars/2.jpeg
  description: Finite but unbounded astonishment two ghostly. 
```