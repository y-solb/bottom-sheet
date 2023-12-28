# @solb/bottom-sheet

Bottomsheet component made with pure JavaScript. When used on the mobile web or app, it appears as a bottomsheet, and on the web it appears as a modal. ([Demo]())

This component is built with [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components), offering the key advantage of universal usability. You can employ it across various frameworks or even without any framework. Therefore, you can integrate this bottom sheet seamlessly in different environments such as React, Vue, and more.

![pc_preiview](https://github.com/y-solb/bottom-sheet/assets/59462108/0d362d77-6999-4e45-a24f-9ca3a471d445)

![mobile_preview](https://github.com/y-solb/bottom-sheet/assets/59462108/8d2673a6-512b-48e1-b0a7-6e3f394b3b41)

## Installation

### Install from NPM

```
npm i @solb/bottom-sheet
```

```
import "@solb/bottom-sheet";
import "@solb/bottom-sheet/style/style.css";
```

### Use bottom-sheet from CDN

```
<script src="https://cdn.jsdelivr.net/npm/@solb/bottom-sheet/dist/index.min.js" defer></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@solb/bottom-sheet/style/style.css"/>
```

## Usage

Children elements to be included in the bottomsheet must be wrapped with the `main` tag.

Examples of usage in react, nextjs, and vue can be seen [here ](https://github.com/y-solb/bottom-sheet/tree/main/examples)👋!

```html
<button
  type="button"
  onclick="document.getElementById('testBottomSheet').openSheet()"
>
  openSheet
</button>

<bottom-sheet id="testBottomSheet" title="Title is Lorem ipsum">
  <main class="_example">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <div>
      <button
        type="button"
        onclick="document.getElementById('testBottomSheet').closeSheet()"
      >
        closeSheet
      </button>
      <button
        type="button"
        onclick="document.getElementById('testBottomSheet').fullSheet()"
      >
        fullSheet
      </button>
    </div>
  </main>
</bottom-sheet>
```

## Methods

### openSheet()

Opens the bottomsheet

### openFullSheet()

Opens the bottomsheet in full screen.

### closeSheet()

Closes the bottomsheet

### fullSheet()

Opens an already opened bottom sheet in full screen.
