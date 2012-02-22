# Web Storage

~~~

## Overview

The Web Storage spec is by far the easiest of the specs we are going to look at in this session.

~~~

## Saving Data

Saving data is a very simple operation and can be performed by calling the `setItem` method of the `localStorage` object:

[[code code/webstorage/simple-put.js]]

~~~

## Getting Data

Getting data is essentially the opposite:

[[code code/webstorage/simple-get.js]]

~~~

## Strings Only Please

The `localStorage` interface is presently designed to store strings only.  For example, consider the following code:

[[code code/webstorage/store-object-incorrect.js]]

~~~

## Can I Use Web Storage?

[[caniuse namevalue-storage]]