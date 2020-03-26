[![](https://vsmarketplacebadge.apphb.com/version/bierner.lit-xml-owl.svg)](https://marketplace.visualstudio.com/items?itemName=bierner.lit-xml-owl) [![Build Status](https://travis-ci.org/mjbvz/vscode-lit-xml-owl.svg?branch=master)](https://travis-ci.org/mjbvz/vscode-lit-xml-owl)

Adds xml/html syntax highlighting and language support inside of JavaScript and TypeScript tagged template strings, such as used in [owl](https://github.com/odoo/owl/blob/master/doc/reference/component.md).

![](https://github.com/mjbvz/vscode-lit-xml-owl/raw/master/docs/example.gif)


## Features

- Syntax highlighting of inline xml blocks.
- IntelliSense for html tags and attributes.
- Emmet abbreviation ready.
- ~~Quick info hovers on tags~~.
- Formatting support.
- ~~Auto closing tags~~.
- ~~Folding xml/html~~.
- CSS completions in style blocks.
- Works with literal html strings that contain placeholders.

## Usage
The `lit-xml-owl` extension adds highlighting and IntelliSense for lit-xml-owl template strings in JavaScript and TypeScript. It works out of the box when you use VS Code's built-in version of TypeScript.

If you are using VS Code 1.30 or older and are [using a workspace version of typescript](https://code.visualstudio.com/Docs/languages/typescript#_using-newer-typescript-versions), you must currently configure the TS Server plugin manually by following [these instructions](https://github.com/Microsoft/typescript-lit-xml-owl-plugin#usage)

## Configuration

You can either configure this plugin using a `tsconfig` or `jsconfig` as described [here](https://github.com/Microsoft/typescript-lit-xml-owl-plugin#configuration), or configure the plugin using VS Code. This requires VS Code 1.30+ and TS 3.2+. Note the VS Code based configuration override the `tsconfig` or `jsconfig` configuration.

### Embeded XML Emmet Integration
To enable emmet, you must set emmet in settings.json

```jsonc
    "emmet.includeLanguages": {
        "javascript": "html",
        // "javascript": "javascriptreact", 
    },
```
if you set `"javascript": "javascriptreact"`, the html property will use `className` rather than `class`. 

### Embeded XML Folding
To enable code folding, you must set editor.foldingStrategy in settings.json

```jsonc
    "[javascript]": {
        "editor.foldingStrategy": "indentation",
        // "editor.foldingStrategy": "auto"
    },
```
if you set `"javascript": "javascriptreact"`, the html property will use `className` rather than `class`. 

### Tags
This extension adds html IntelliSense to any template literal [tagged](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) with `xml`, `css` or `html`:

```js
const { Component, useState, tags } = owl;
const { xml, css } = tags;

// Counter component
const COUNTER_TEMPLATE = xml`
  <button t-on-click="state.value++">
    Click! [<t t-esc="state.value"/>]
  </button>`;

const COUNTER_STYLE = css`
  button {
    color: blue;
  }`;

class Counter extends Component {
  state = useState({ value: 0})
}
Counter.template = COUNTER_TEMPLATE;
Counter.style = COUNTER_STYLE;

// App
const APP_TEMPLATE = xml`
  <div>
    <Counter/>
    <Counter/>
  </div>`;

class App extends Component {}
App.template = APP_TEMPLATE;
App.components = { Counter };

// Application setup
const app = new App();
app.mount(document.body);
```

You can enable IntelliSense for other tag names by settings `"lit-xml-owl.tags"`:

```json
"lit-xml-owl.tags": [
    "html",
    "template"
]
```

### Formatting
The plugin formats html code by default. You can disable this by setting `"lit-xml-owl.format.enabled": false`:

```json
"lit-xml-owl.format.enabled": false
```

## Credit
- This plugin is a direct fork of awesome `lit-html` 
- TextMate Grammar: https://flight-manual.atom.io/hacking-atom/sections/creating-a-legacy-textmate-grammar/
- Writing a TextMate Grammar: http://www.apeth.com/nonblog/stories/textmatebundle.html