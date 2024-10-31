---
title: Webshop ~ Product doc 
---

# Introducing Our Exclusive Product

Enjoy this top-quality product, designed to elevate your experience. Available for a limited time only!

**Price: $49.99**

{{</* button "Add to Cart" "/checkout" */>}}

![Product Image](/uploads/brick_webshop.webp)

Webshop brick might help ? Say you can re-use it like this :

```
---
title: Webshop Page title
---
{{</* brick_webshop */>}}

## Hugobricks Webshop

Discover the perfect product to meet your needs.

{{</* /brick_webshop */>}}
```


## TODO What about the Products 'content' strategy ?

### TODO: 'Hugo section' approach 

Like in /content/en/webshop/:product-filename'  as a series of markdown files: one file per product.  It's frontmatter provides the product specifications (as YAML formatted
fields)

So that your 'project tree' my look similar to :

```
..
content/
    en/
	  webshop/
	    apples.md
		bananas.md
		carrots. ..
		..
layouts/ ..
static/ ..
..
```
>NOTE:	Do not forget to add the relevant 'webshop' permalinks in your hugo project config file.


### TODO:  in ' /data products ' as a YAML file (rather than in the frontmatter ?) 
   Products to be stored in a products.yaml file in the data directory. So that the looks like this:

```
- product: Apples
  sku: APL123
  price_per_kg: 2.50
- product: Bananas
  sku: BAN456
  price_per_kg: 1.80
- product: Carrots
  sku: CRT789
  price_per_kg: 1.20
- product: Tomatoes
  sku: TOM012
  price_per_kg: 2.80
- product: Potatoes
  sku: POT345
  price_per_kg: 1.00
- product: Spinach
  sku: SPN678
  price_per_kg: 3.50
- product: Oranges
  sku: ORG901
  price_per_kg: 2.20
- product: Grapes
  sku: GRP234
  price_per_kg: 4.00
- product: Onions
  sku: ONN567
  price_per_kg: 0.90
- product: Broccoli
  sku: BRC890
  price_per_kg: 2.70
```

