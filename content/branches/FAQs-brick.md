---
title: FAQs Brick
---

Want to add an informative most frequently asked questions ?
Fine. Say you want to achieve this neat FAQ 'component' markup (in a series of Q & A, prefixed with short text, and maybe different sections of) :

```
<section class="wide">
    <div class="container"><h3>Hugobricks theme</h3>
			<div><details>
						<summary>Why choose Hugobricks for my next project?</summary>
						<div><div>Hugo allows you to build a fast, efficient, and scalable website. It offers you a clean separation of concerns, content vs layout and styles. The Hugobricks brings a pagebuilder to that workflow.</div></div>
					</details><details>
						<summary>I need to develop a performant website. Does Hugobricks offer a good performance?</summary>
						<div><div>Hugobricks is renowned for its exceptional speed and performance. It is built using the Go programming language, which enables it to generate websites at an astonishing pace. Whether you have a small blog or a large enterprise site, Hugobricks’s speed ensures that your pages load quickly, providing an excellent user experience. This advantage becomes especially significant when dealing with large websites or making frequent updates.</div></div>
					</details></div><h3>Scalability, ease of use and flexibility?</h3>
			<div><details>
						<summary>What about scalability and portability</summary>
						<div><div>Whether you’re building a personal blog or a large-scale enterprise website, Hugobricks scales effortlessly. Its ability to handle thousands of pages with consistent speed and efficiency makes it an ideal choice for projects of any size. Moreover, Hugobricks generates static websites that can be hosted on any web server or content delivery network (CDN) without any specific server requirements, ensuring portability and easy deployment.</div></div>
					</details><details>
						<summary>How easy is it to set up?</summary>
						<div><div>Hugobricks offers a straightforward and hassle-free setup process. It comes with pre-built binaries for various operating systems, making it accessible to developers across different platforms. Additionally, Hugobricks has a user-friendly command-line interface (CLI) that allows you to create and manage your site effortlessly. Its simplicity makes it a great choice for both experienced developers and beginners alike.</div></div>
					</details><details>
						<summary>How flexible is the offered architecture?</summary>
						<div><div>Hugobricks provides a flexible architecture that empowers developers to create websites tailored to their specific needs. With its powerful templating system, you can easily customize the look and feel of your site. Hugobricks supports a wide range of themes, allowing you to choose from a vast collection or create your own. Furthermore, its extensive plugin ecosystem enables you to extend its functionality and add features seamlessly.</div></div>
					</details></div><h3>Markdown content and SEO</h3>
			<div><details>
						<summary>What about Markdown and content management?</summary>
						<div><div>Content creation and management are made convenient with Hugobricks. It supports Markdown, a lightweight markup language that simplifies the process of writing content-rich web pages. Markdown’s simplicity and readability make it a favorite among writers and developers alike. Hugobricks’s content organization system allows you to easily structure your content, making it effortless to manage and update your website’s information.</div></div>
					</details><details>
						<summary>What about SEO-friendliness?</summary>
						<div><div>Hugobricks is designed with search engine optimization (SEO) in mind. It generates clean HTML markup, adhering to best practices for search engine discoverability. This helps your site rank higher in search engine results, increasing its visibility to potential visitors.</div></div>
					</details><details>
						<summary>What about hugobricks security?</summary>
						<div><div>Additionally, Hugobricks’s static nature eliminates the need for databases or complex server configurations, making it inherently more secure than dynamic content management systems.</div></div>
					</details></div>
</div>
</section>
```

Say you sculpt your brick style like this, by means of the following css rules :


```
/*------------------------*/
/* brick features
/*------------------------*/

section.features .container.small {margin-bottom: 4.75rem; text-align: center;}
section.features + section.title {padding-top: 0;}
```

Sweet.
That's it. We benefit from the native < summary > and < details > elements combination for the rest of the styling.

Note that 'wide' and 'container' styling classes are provided by the base.css sytlesheet directly.
We provide base/essential style, which then goes sculpted across the several bricks. Of course, both can be easily customised at whish. Just iterate over them ! Rinse and repeat.

About the glueing it the pieces of the puzzle together... What's under the hood ?
Have a look at the relevant layouts/partials.

< enjoy / >
