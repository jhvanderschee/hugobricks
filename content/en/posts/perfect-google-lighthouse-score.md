---
title: This theme has a perfect Google Lighthouse&nbsp;score
image: /uploads/gallery/02.jpg
date: 2023-07-11
tags:
  - performance
  - jamstack
---

This theme has a (near) [perfect Google Lighthouse score](https://pagespeed.web.dev/analysis/https-www-hugobricks-preview-usecue-com/je4uqrt6nj?form_factor=mobile). Some people like fast cars. I like fast websites. But how to get to a perfect Google Lighthouse score? Let me explain.

You might feel that it is nearly impossible to get to a perfect 100% score. You minified your Javascript, properly scaled your images and even combined some requests, but that did not help nearly enough. The problem is: you might be looking at it from the wrong angle. I build 100% scoring websites on a daily basis, so obviously it is very well possible to get a perfect score on all your websites with little effort. I will try to explain what we want to achieve and how we can achieve that.

## Common pitfalls

There are some basic facts that a lot of people get wrong when it comes to speed and performance. Minifying does not beat gzipping, image scaling does not beat JPG compression and combining requests is actually counter-effective over HTTP/2. These are probably the reasons why your earlier efforts had so little effect. Another important thing to know is that Google Lighthouse simulates a slow connection. This emphasizes the importance of a low ‘page weight’ or ’total size’ over fast infrastructure, as a small page is delivered significantly faster over such a narrow connection than a large page.

## The trick

First of all you need a low Time To First Byte. All websites in the list above have a TTFB of less than 200ms. This means that the server needs to respond fast. I use CloudFlare for most of my websites, but using a well configured VM works too (as you can see). I am not sure what hosting Delete Agency uses, but they got a nice low TTFB. Getting a low TTFB is mainly a matter of choosing the right hosting. You can test this metric with a tool like Pingdom or GTMetrix. Note that proper (server-side) caching helps a lot too. I use a Static Site Generator to generate my pages, which is essentially the same as using full server-side caching.

Secondly, you need to optimize your images. Use SVG whenever possible and heavily compressed JPG for the rest. If you have to use PNG, make sure you use TinyPNG to compress them and use loading=“lazy” on all image tags. Note that using WebP is not required at all to get a good score. The total page size to aim for is under a 1000kb.

Finally, you need to address all the small issues Google Lighthouse throws at you. These could be accessibility things, but also SEO or performance issues. Note that Performance issues correlate to the speed at which the site loads, not to the checklist, so fixing these issues is optional. A Performance score of 100 represents the 98th percentile.

## The blocking code issue

When you have done all the above, you are probably left with some hard to solve ‘blocking code’ issues. Google will suggest to move the Javascript and CSS to the footer, but that does not really solve it. You will get an ugly Flash Of Unstyled Text (FOUT) and your website will only be usable after your code has fully loaded. Here is where I initially got stuck. 

The solution is simple. The most effective strategy for getting a perfect Google Lighthouse score is to stop using Javascript and CSS frameworks. That might seem scary at first, but Javascript and CSS have come a long way. Things like Flexbox, CSS columns and CSS grid handle most of your more complex CSS problems with ease. Cross-browser issues are close to non-existent in the [current browser landscape](https://www.netmarketshare.com/browser-market-share.aspx). Stick to writing lean CSS and lean Javascript. It might feel like you are going back to the nineties or the zero's, but that is okay. Listen to Michael Jackson and sing along. A world [without dependencies](/blog/code-warriors/) is a happy place. Heal the world!

A final piece of advice: if you feel insecure about programming [Vanilla Javascript](https://gomakethings.com/), please let [Chris Ferdinandy](https://gomakethings.com/) help you. He is an advocate for a simpler World Wide Web and loves to teach. Go make simpler things!

*Note that Hugobricks is based on the MIT licensed [Hugoplate](https://hugoplate.netlify.app) from Zeon studio. Hugoplate scores 20 points lower on Performance in Google Lighthouse due to the 'blocking code issue', because it uses (CSS) frameworks.*