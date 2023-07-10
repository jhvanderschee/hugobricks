---
title: Code is poetry
image: /uploads/gallery/01.jpg
date: 2022-09-24
tags:
  - code
---

I found the words 'code is poetry' in the footer of [the new Wordpress frontpage](https://wordpress.org/), that has been launched recently. 

I fully agree that code is poetry! I love to read and write beautiful and concise code. In a few days I will even be joining CloudCannon on their Youtube show 'Static Feedback' to talk about [Artisanal Web Development](https://www.youtube.com/c/CloudCannon). This is my hand-crafted take on building sites with absolute knowledge about every line of code. 

But what about this frontpage? Matt Mullenberg [expressed](https://make.wordpress.org/meta/2022/08/01/developing-the-redesigned-home-and-download-pages/#comment-936) some harsh criticism on its build. It took the volunteers of Wordpress 33 days to build this page. Matt called it a waste of time. And although the page looks quite good, it does not work flawlessly, nor is its code beautiful or concise. 

Here are some problems:

- There is a white line under the image of the community - [screenshot](/uploads/wordpressorg/bug1.png)
- The people from the community are hardly visible on a large screen (the upper part gets cut off) - [screenshot](/uploads/wordpressorg/bug2.png)
- On a portrait tablet the word Wordpress does not fit - [screenshot](/uploads/wordpressorg/bug3.png)
- They used a line-height of 1, which leads to impossibly small click areas - [screenshot](/uploads/wordpressorg/bug4.png)
- They used flex for the logo's, which makes the logo's fill out strange on certain screen sizes - [screenshot](/uploads/wordpressorg/bug5.png)
- On an old phone the background image of the dark area is looking like it should not be there - [screenshot](/uploads/wordpressorg/bug6.png)
- The HTML code is packed with classes and your browser has to parse 358kb of CSS, which is way too much.
- On some places spacer divs are used to create white space (1999 called: they want their spacer divs back).
- On some places empty columns are used to create white space.
- Some of the titles are just strong elements followed by a break (instead of a heading).

If you think that code is poetry, you do not build a page like this. 

To find out what happened, I looked at their [dev page](https://make.wordpress.org/meta/2022/08/01/developing-the-redesigned-home-and-download-pages/). It read: "Implementing the full design will require building some custom blocks and customizing existing core blocks". Although I am not 100% sure, I think this means that the page was not coded at all. I think it means that this page was clicked together using some standard Wordpress components (Gutenberg blocks). This would explain the clumsy solutions, the gigantic amount of CSS and the 'bugs'.

I do understand that building a page with standard components is faster and does not require a programmer. I do NOT understand why one would put 'code is poetry' in its footer.