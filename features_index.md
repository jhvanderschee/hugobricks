---
title: Features
---

Want to show the selling points of your service or product?
Say you want to achieve this neat Features 'component' markup (as the source code of a short text, leading to a button + aside related image) :

```
<section class="features">
    <div class="container small"><h2 id="the-ultimate-hugo-theme">The Ultimate Hugo theme</h2>
	<p>Hugobricks covers all components you would like to have at hand. It is a power engine for your web oriented projects. It has excellent performance in all categories.</p></div>
    <div class="container">
        <ul class="grid features">
            <li class="has_icon"><p class="image"><img class="black_2_accent" src="/img/icons/material-symbols/200/rounded/auto_awesome_mosaic.svg" alt=""></p>
				<h3 id="covers-all-components">Covers all components</h3>
					<p>We aim to provide the following bricks: intro, title, image, cta, contact, team, testimonials, about, pricing, products, product, usps, stats, gallery,
				quote, faqs, brands, video, blogs, post, related.</p>
			</li>
            <li class="has_icon"><p class="image"><img class="black_2_accent" src="/img/icons/material-symbols/200/rounded/performance_max.svg" alt=""></p>
				<h3 id="99-google-lighthouse-score">99+ Google Lighthouse score</h3>
				<p>Lightning fast website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed.</p>
	       </li>
           <li class="has_icon"><p class="image"><img class="black_2_accent" src="/img/icons/material-symbols/200/rounded/design_services.svg" alt=""></p>
			   <h3 id="themeable-through-css-variables">Themeable through CSS variables</h3>
			   <p>Easily themeable. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis illum nesciunt commodi vel nisi ut alias excepturi ipsum, totam, labore tempora, odit ex iste tempore sed.</p>
		   </li>
        </ul>
    </div>
</section>
```

Say you sculpt your brick style like this, by means of :





Basically, the hugobricks way, the Call To Action brick (CTA) is made of text+image '(sub)components'. Add some simple but ellegant styling, and voilà.

(as a reminder, as long as the following is re-used across several bricks in the project :)

```
/*------------------------*/
/* brick image
/*------------------------*/

section.image.alt {background: var(--light); border-top: 0.1rem solid var(--light); border-bottom: 0.1rem solid var(--light);}
section.image.alt .container {direction: rtl;}
section.image.alt .container > div {direction: ltr;}
section.image .twocols .image {text-align: center;}
section.image .twocols .image img {width: auto; display: inline-block; width: 29rem}
@media (max-width: 600px) {
    section.image .twocols .image {text-align: left;}
}
```

What's under the hood ? Have a look at the relevant layout/partials.


>  NOTE: We try to keep media queries for responsive design minimal, yet fully functional, as you might notice.

< Enjoy /> .
