---
title: Multiple languages
---

Hugobricks has been fully prepared to support a multilingual setup. In the docs you will see the '/en/' reference more than once. This means you can duplicate and translate all content in as many languages as you want by following a similar pattern with a different language string. Adding a language also requires an additional entry in the 'config.yaml' file. This should then look simlilar to this:

```
defaultContentLanguage: en
languages:
  en:
    languageName: English
    contentDir: content/en
    weight: 1
  nl:
    languageName: Nederlands
    contentDir: content/nl
    weight: 2
```

Additionally, you need some string translations. They can be found in the 'i18n' folder and you will find a file for every language. This files are yaml files and the 'nl.yaml' file looks like this:

```
Read more:
  other: Lees verder
Load more posts:
  other: Laad meer berichten
```