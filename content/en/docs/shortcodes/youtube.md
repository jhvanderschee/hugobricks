---
title: Youtube
---

Paul Irish did a nice thing. He created [a lighter Youtube embed](https://github.com/paulirish/lite-youtube-embed). His solution does no longer slow your website down, like normal Youtube embeds do. There is only one downside: it loads content from Youtube without consent, while Youtube is a service from a company that is known for tracking and profiling. This is not very privacy friendly. The solution is to host the poster yourself and link it to Youtube. This can be done using this shortcode.

You can see it in action on the [Elements page](/elements/). To show a Youtube embed, write the following 'code':


```
{{</* youtube "qtIqKaDlqXo" "/uploads/youtubeposter.jpg" */>}} 
```

<!--{{< youtube "qtIqKaDlqXo" "/uploads/youtubeposter.jpg" >}} -->