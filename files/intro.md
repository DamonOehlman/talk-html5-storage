# HTML5 Client Side Storage

:break:

## Overview

Within the HTML5 spec suite there are a number of options for working with client-side data.  Knowing which one to use, and how to use it can be confusing.

This presentation is an attempt to make things less confusing - for myself mainly :)

:break:

## Option 1: Web Storage

This is commonly referred to as localStorage.  The [W3C spec](http://www.w3.org/TR/webstorage/#storage) defines it as:

>   an API for persistent data storage of key-value pair data in Web clients.

:break:

## Option 2: Web SQL Database

While this is a _deprecated_ standard, it has been implemented (and remains implemented) in a large number of browsers.  The [W3C spec](http://www.w3.org/TR/webdatabase/) defines it as:

>   an API for storing data in databases that can be queried using a variant of SQL.

:break:

## Option 3: IndexedDB

IndexedDB is the official replacement for Web SQL, but has nowhere near the installation coverage as it's predecessor.  The [W3C spec](http://www.w3.org/TR/IndexedDB/) defines it as:

>   APIs for a database of records holding simple values and hierarchical objects. Each record consists of a key and some value. Moreover, the database maintains indexes over records it stores. An application developer directly uses an API to locate records either by their key or by using an index. A query language can be layered on this API. An indexed database can be implemented using a persistent B-tree data structure.

um, ok?!

:break:

## Others

There are a couple of other HTML5 specs that deal with client-side storage:

- [File API](http://www.w3.org/TR/FileAPI/)
- [File API: Directories and System](http://www.w3.org/TR/file-system-api/)

In general, they are both a bit of a mess and not ready for production (but cool for demos).

:break:

## Today's Talk

Today we are going to be focusing on the first three client side storage options outlined, covering:

- presenting simple usage examples
- some potential use cases
- pros and cons
- production readiness

We won't be covering cookies in the context of this talk, but they are still an option should you wish to use them. __Personally, I would rather not.__