---
title: Call to action documentation
---

Say you want to achieve this neat CTA 'component' markup (as the source code of a short text, leading to a button + aside related image) :

```
<section class="cta hasbackgroundcolor">
    <div class="container">
        <div class="twocols box">
            <div class="text">
                <div><h2 id="get-started-with-hugobricks-today">Get started with Hugobricks today!</h2>
<p>Experience the future of web development with Hugo and stackable content bricks. Build lightning-fast static sites with ease and flexibility.</p>
<a href="/get-started/" class="button secondary">Get started now</a>

</div>
            </div>
            <div class="image">
                <div><p><img src="/uploads/illustrations/cuate/server.svg" alt=""></p></div>
            </div>
        </div>
    </div>
</section>
```



Say you sculpt your brick style like this, by means of :

```
/*------------------------*/
/* brick cta
/*------------------------*/

section.cta {background: white;}
section.cta .twocols {display: flex;}
section.cta .twocols .text {flex: 2;}
section.cta .twocols .image {flex: 1;}
section.cta .twocols .image img {display: inline-block; width: 20rem;}
@media (max-width: 600px) {
    section.cta .twocols {flex-direction: column;}
    section.cta .twocols .image {text-align: left; display: none;}
}
``` 

Basically, the hugobricks way, the Call To Action brick (CTA) is made of text+image '(sub)components'. Add some simple but ellegant styling, and voil�.

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
