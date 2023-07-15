---
title: Multiple languages
---

Hugobricks has been fully prepared to support a multilingual setup. In the docs you will see the '/en/' reference more than once. This means you can duplicate and translate all content in as many languages as you want by following a similar pattern with a different language string. Adding a language also requires an additional entry in the 'config.yaml' file. This should then look simlilar to this:

```
languages:
  en:
    languageName: English
    contentDir: content/en
    weight: 1
  nl:
    languageName: Nederlands
    contentDir: content/nl
    weight: 1
```