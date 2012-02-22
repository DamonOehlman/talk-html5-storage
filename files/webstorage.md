# Web Storage

...

## Overview

The Web Storage spec is by far the easiest of the specs we are going to look at in this session.  Don't be fooled by the simple interface though, there is a whole lot you can do with it.

...

## Saving Data

Saving data is a very simple operation and can be performed by calling the `setItem` method of the `localStorage` object:

[[code code/webstorage/simple-put.js]]

...

## Getting Data

Getting data is essentially the opposite:

[[code code/webstorage/simple-get.js]]

...

## Strings Only Please

The `localStorage` interface is presently designed to store strings only.  For example, consider the following code:

[[code code/webstorage/store-object-incorrect.js]]

...

## JSON to the rescue

To get around this limitation of the web storage spec, we can simply serialise objects to JSON for storage:

[[code code/webstorage/store-object-json.js]]

...

## Can I Use Web Storage?

Let's have a look at what the browser support is like for the web storage spec:

[[caniuse namevalue-storage]]

...

## Extension Ideas / Advanced Topics

As stated earlier, despite it's simplicity there is a lot that potentially can be done with localStorage:

- storing user preferences for a web application client-side
- caching image data for photo galleries or maps, etc.
- implementing intelligent resource loading and caching for scripts / css, etc as an alternative to using [AppCache](http://dev.w3.org/html5/spec/offline.html)