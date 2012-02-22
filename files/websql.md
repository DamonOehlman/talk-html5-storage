# Web SQL Database

---

## Overview

__WebSQL is dead! Long live WebSQL!__

As mentioned earlier, the [Web SQL Database](http://www.w3.org/TR/webdatabase/) spec has been _deprecated_ by the W3C and is no longer part of the HTML5 spec.  

It is, however, implemented in a variety of modern browsers and still remains a valid choice for client-side storage (especially on mobile devices).

---

## Overview (cont.)

While WebSQL is a powerful spec, IMO it is not a good fit for the browser environment.  So I'm glad that the W3C recommend __against__ using it.  

As WebSQL has been deprecated, and is a pretty dry spec, I'll keep this section short.

---

## Opening a Database

When working with WebSQL we need to open a database before we can use it.  This is done through the `openDatabase` function.

[[code code/websql/open.js]]

---

## On Database Creation

When a database is created (didn't exist prior to the `openDatabase` call) an initialization function will be called.

Use this to initialize your DB to the `1.0` version:

[[code code/websql/initdb.js]]

---
:data-bg:> ../img/1152142_76778553.jpg
:data-attribution:> http://www.sxc.hu/photo/1152142

# So Bored!

---

## WebSQL target audience

I could go on to show you retrieving records, updating data, etc, etc. but in truth I'd probably fall asleep just talking about it.

If you are interested in WebSQL though, then feel free to hit me up afterwards and we can chat :)

---

## Can I Use WebSQL?

[[caniuse sql-storage]]

So on some browsers, yes, but the question is - __do you really want to__?

---

## Further Reading

- [html5doctor: Introducing Web SQL Databases](http://html5doctor.com/introducing-web-sql-databases/)

- [html5rocks: Migrating Your WebSQL DB to IndexedDB](http://www.html5rocks.com/en/tutorials/webdatabase/websql-indexeddb/)