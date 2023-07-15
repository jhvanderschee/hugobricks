---
title: 'Artisanal web development'
image: /uploads/gallery/03.jpg
date: 2022-09-30
tags:
  -
---

Yesterday [David Large](https://www.linkedin.com/in/david-large-4875b81b2/?originalSubdomain=nz) invited me to his [Static Feedback](https://www.youtube.com/watch?v=MuAe7aZu0Nw) show. It was a big honor to be featured there. The interview went by in a flash... and I want this post to summarize it and add some points that we may have missed.

## What is artisanal web development?

Anything CAN be artisanal web development, but what I mean is 'knowing every line of code that goes into your project'. This implies that you are not using frameworks or any other type of third party code. 

## How does it work?

David asked me how I approach artisanal web development, but I do not feel like I answered the question sufficiently. Here is a very down to earth explanation: 

I always start with a blank HTML page, without CSS and without Javascript. Then I write the HTML, starting with the 'doctype' tag. Sure, I might copy that from another project, but I believe there is value in knowing all these components by heart. When I need columns I choose between flexbox and grid and write the CSS code that is needed to make the columns responsive. I define the breakpoints for each situation. For a [carousel](https://codepen.io/joosts/pen/MWJBPgo) I use a div with flexbox items, horizontal overflow and 'scroll snap'. A little bit of Javascript allows it to be fully functional. This way I go through all code/the whole project. I try to stay away from components and ready made solutions and I try to tailor everything to (the needs of) the project I am working on.

A few years ago this all might have been a huge task, especially when you wanted to make sure it looked the same on all browsers, but nowadays this is very simple. CSS is capable of so much and the variety in the browser landscape has vanished. Chrome is the absolute market leader, Edge is based on Chrome and Safari and Firefox are also based on [WebKit](https://en.wikipedia.org/wiki/List_of_web_browsers#WebKit-based)... which means that these browsers all behave very similar. Making things work cross-browser is no longer a challenge. Creating your own components and solutions is actually a lot of fun!

## Advantages of artisanal web development

Not using frameworks or any other type of third party code has a lot of advantages. First of all it results into smaller websites/projects, which load faster. Secondly, you know exactly how it works, so you are able to adjust the way it works easily. What we did not touch is that artisanal web development also results into more stable projects. When a library, framework or component you use is being discontinued, you need to replace it by an actively maintained one, to prevent security issues. This often influences other components as well, resulting in the [dependency hell](https://en.wikipedia.org/wiki/Dependency_hell). Maintaining software with a lot of dependencies can become a horrible task. What David and I also did not discuss are the privacy implications of using third party code. This code is often not properly vetted and sometimes even externally hosted. This is a huge risk from a privacy point of view. Finally you could argue that the need to understand every line of code can also make you a better programmer and even a better user of frameworks, as you get a better understanding of the problems these frameworks are trying to solve.

## When to avoid this approach

When you build software/websites in a large team I would not use this artisanal approach. However, before you fully dismiss it, you should realize that a lot of efficient projects involve very little teamwork at all. A strict seperation between front-end and back-end is often made to make sure developers can work as autonomously as possible. Are you the sole owner of your (front-end or back-end) code? Then the artisanal approach could very well be a valid one. If you write the code together with somebody else, I would always try to find some common ground first.

## The take-away

Try artisanal web development. It may be challenging, but it is really fun! Find a small project to try it on. Davids analogy with a car mechanic having a 'project car' is a perfect one! To me, that powerful feeling of [complete understanding of every bit of code](https://www.usecue.com/blog/code-warriors/) is addictive. It might resonate with you as well and it will make you a better programmer for sure! 

I think that Jake Albaugh formulated it perfectly: “If you can justify the effort of writing your own code, you become more familiar with web specifications and learn just how robust they are on their own. You also end up with something that can be easier to maintain long-term because it is closest to the core evolutionary path of the web.”

## Related reading

I did not come up with this term/approach/philosophy by myself. I was inspired by a lot of people. Here is some valuable related reading.

- [The web is good now](https://css-tricks.com/the-web-is-good-now/), Geoff Graham
- [Write your own code](https://css-tricks.com/embrace-your-codes-transience/), Jake Albaugh
- [Frameworks are polyfills](https://adactio.com/journal/17309), Jeremy Keith
- [We write risky breakable code](https://gomakethings.com/web-tech-is-better.-developer-norms-are-worse./), Chris Ferdinandi
- [Simplify: you know you want it](https://tobyx.com/2015/jekyll-vs-world), Tobias Horvath
- [Understand how the web is performing](https://almanac.httparchive.org/en/), Web Almanac
- [You might not need jQuery](https://youmightnotneedjquery.com/), Hubspot
- [VanillaJS](http://vanilla-js.com/), Eric Wastl

PS. I mentioned Kev Quirk in the interview. He pointed me at my missing [RSS feed](https://kevquirk.com/why-having-a-full-post-rss-feed-is-a-good-idea/). I joked about him being agressive. I should have said 'persuasive'. [Thanks again Kev!](https://www.usecue.com/blog/thanks-to-kev-quirk/)
