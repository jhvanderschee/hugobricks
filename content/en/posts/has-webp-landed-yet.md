---
title: Has WebP landed yet?
image: /uploads/gallery/03.jpg
date: 2022-09-11
tags:
  - code
---

Those who know me, know I care about DX just as much as UX. I will not use a feature that requires prefixes, polyfills or other wizardry. I can wait for a feature to land in your browser. The question I asked myself today (from this perspective) was: Has WebP landed yet?

Although it is supported in almost any browser, it is not fully supported in [Safari on macOS](https://caniuse.com/webp). Safari supports WebP, but it is not working on macOS versions below Big Sur (macOS 11). The question is... [how many people are using Big Sur](https://apple.stackexchange.com/questions/417757/any-data-on-big-sur-market-share)? Well, since Big Sur was introduced in june 2020 you cannot expect its market share to be very big by now. We could ignore those outdated Safari lovers on Mac, but that is not my style. 

I do not like polyfills, but there IS an [easy way to check for WebP compatibility](https://stackoverflow.com/questions/5573096/detecting-webp-support). Let me show you what it looks like:

```
webp = 
document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
````

Not too bad, is it? But how should you implement this check? Well... I would (boldly) go for this:

```
webp = 
document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;
if(!webp) alert('Please use Chrome to view this website');
```

Excluding people is *not done* in our business, but the percentage of people that will see this message will decrease drastically in the coming months. The question remains: Should you use this trick/code? Well.. I think not.

The original question was: Has WebP (fully) landed yet? The anwer to that is clear: No. If you solely use WebP you will exclude a lot of macOS users on Safari. I will wait and use JPG with the [one image technique](https://hugocodex.org/blog/image-compression-for-the-lazy/). This will cost me 25% more bytes per image, but it has great DX and will ensure me that everybody sees my websites correctly. However, if you are feeling bold and adventurous, you can use the code above. Two extra lines of code won't hurt, the check [only takes 6ms](https://stackoverflow.com/questions/5573096/detecting-webp-support) and the whole construction will be obsolete within a year or two.

N.B. It should be noted that this works, but requires multiple images, which I think is bad DX:

```
<img src="image.webp" onerror="this.src = 'image.png'" />
```

Happy coding!
