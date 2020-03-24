It is used to learn regex online.
such as this: https://regex101.com/

### Regular Expression:
```regex
(?x)(\b(?:\w+\.)*(?:html|xml|raw)\s*(?:\/\*.*\*\/)*\s*)(`)
```

### Test String:
```js
const APP_TEMPLATE = xml/*html*/` <div/>`
const APP_TEMPLATE = xml/* html */` <div/>`
const APP_TEMPLATE = xml/*html pdf */`<div/>`
const APP_TEMPLATE = xml/* html, pdf */
    `<div/>`
    


const PLAIN_TEMPLATE = `<div class="task"/>`
const XML_TEMPLATE = xml` <div class="task"/>` const HTML_TEMPLATE = html ` <span/>`

const ANY_TEMPLATE = FOO` <div class="task" />`
const HTML_TEMPLATE = owl.xml` <span/>`
const HTML_TEMPLATE = owl.lit.xml` <span/>`
```