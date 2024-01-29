---
title: Map
---

Say you want to achieve a neat Map 'component' (see the first content section at the  home page of this sample website).
In order to get such a component, just use the markup below. The content in the brick starts with a screenshot of the given map area and the URL of the mapping service provider (Google, OpenstreetMaps, etc). They will automatically be converted into a clickable map. If you want to see this brick in action, take a look at the footer of the [contact page](/contact/).

```
---
title: Page title
---
{{</* brick_map */>}}

![](/static/uploads/map2.svg)

[Google Maps](https://www.google.com/maps/dir//sgnc,+3rd+Level,+Gecamines+Building,+Bd+Du+30+Juin,+Kinshasa,+Congo+-+Kinshasa/@-4.3113773,15.1485401,12z/data=!4m18!1m8!3m7!1s0x1a6a33f51eb33e1b:0xe22d389f8c8dd83a!2ssgnc!8m2!3d-4.3032154!4d15.3105518!15sChhCdWlsZGluZyBHw6ljYW1pbmVzLUJsdmSSAR5idXNpbmVzc19tYW5hZ2VtZW50X2NvbnN1bHRhbnTgAQA!16s%2Fg%2F11l36g6084!4m8!1m0!1m5!1m1!1s0x1a6a33f51eb33e1b:0xe22d389f8c8dd83a!2m2!1d15.3105518!2d-4.3032154!3e3?entry=ttu)

https://www.google.com/maps/place/sgnc/@-4.3026809,15.3099689,18.95z/data=!4m10!1m2!2m1!1sBuilding+G%C3%A9camines-Blvd!3m6!1s0x1a6a33f51eb33e1b:0xe22d389f8c8dd83a!8m2!3d-4.3032154!4d15.3105518!15sChhCdWlsZGluZyBHw6ljYW1pbmVzLUJsdmSSAR5idXNpbmVzc19tYW5hZ2VtZW50X2NvbnN1bHRhbnTgAQA!16s%2Fg%2F11l36g6084?entry=ttu

## Contact us

Building Gécamines-Blvd, June 30 
Kinshasa Gombe
Democratic Republic of Congo

{{</* contactbuttons */>}}

{{</* /brick_map */>}}
```
<!--{{< brick_map >}}{{< /brick_map >}}-->

