# Wrapper Libraries

---

## Overview

If you felt a little overwhelmed by the different specs, then you are not alone and thankfully some kind developers are making an effort to make all of these APIs simpler to work with.

Each of the APIs takes a slightly different approach and/or serves a different purpose.

---

## Lawnchair

[Brian LeRoux's](http://twitter.com/brianleroux) [lawnchair project](http://westcoastlogic.com/lawnchair/) does a great job at providing a common interface to all of the storage APIs covered today (and more).

It has a genuinely simple interface and getting started with it is a breeze:

[[code code/wrappers/lawnchair-quickstart.js]]

Well worth checking out.

[Project Page](http://brianleroux.github.com/lawnchair)

---

## Sticky

[Sticky](https://github.com/alexmng/sticky) is brought to us by [Alex Mingoia](https://github.com/alexmng) and provides a unified Web Storage like interface to the storage APIs covered today.

Like lawnchair it is very simple to use:

[[code code/wrappers/sticky-simple.js]]

[Project Page](https://github.com/alexmng/sticky)

---

## lscache

The last of the wrapper projects that will be looked at today is from [Pamela Fox](http://twitter.com/pamelafox) and focuses on providing a really useful interface for caching using localStorage.

By default, when items are placed into localStorage they remain there until they are programmatically removed or storage is cleared by the user.  Pamela's [lscache](https://github.com/pamelafox/lscache) makes it easy to have a value persist for a fixed amount of time:

[[code code/wrappers/lscache-simpleset.js]]

[Project Page](https://github.com/pamelafox/lscache)