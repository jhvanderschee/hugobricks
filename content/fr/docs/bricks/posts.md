---
title: Posts
---

If you want to show the latest (blog) posts on your website, you can use the posts brick. This requires you to use the following markup:

```
---
title: Page title
---
{{</* brick_posts */>}}

{{</* breadcrumbs */>}}

# Blog posts

This is a demo of the blog. In ultricies vel enim vel pulvinar. Quisque finibus sem velit, sed consequat mi ullamcorper vitae. Proin finibus tristique sollicitudin.

{{</* /brick_posts */>}}
```

<!--{{< brick_posts >}}{{< /brick_posts >}}-->

Note that this requires you to have a directory called 'posts' in 'content'. In this folder you need to store your posts as markdown files.