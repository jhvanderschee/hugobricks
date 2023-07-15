---
title: F.A.Q.
---

Want to add a block with the most frequently asked questions? Then use the code below. Do you want to see it in action? Have a look at the [FAQ page](/faq) or the [Elements page](/elements/).

```
{{</* faq */>}}
```

<!--{{< faq >}}-->

The data for the FAQ's is stored in the faqs.yaml in the data folder and looks like this:

```
- title: Hugobricks theme
  faqs:
    - question: Why choose Hugobricks for my next project?
      answer: Hugo allows you to build a fast, efficient, ...
    - question: Does Hugobricks offer a good performance?
      answer:  Hugobricks is renowned for its exceptional ...
- title: Scalability, ease of use and flexibility?
  faqs:
    - question: What about scalability and portability
      answer: Whether you’re building a personal blog or ...
    - question: How easy is it to set up?
      answer: Hugobricks offers a straightforward and ...
    - question: How flexible is the offered architecture?
      answer: Hugobricks provides a flexible architecture ...
- title: Markdown content and SEO
  faqs:
    - question: What about Markdown and content management?
      answer: Content creation and management are made ...
    - question: What about SEO-friendliness?
      answer:  Hugobricks is designed with search engine ...
    - question: What about hugobricks security?
      answer: Additionally, Hugobricks’s static nature ...
```

You can load a subset of the FAQ's by adding an index number. It will then show only one list of faqs (in the example below only the first 'faqs' array). This looks like this:


```
{{</* faq 0 */>}}
```