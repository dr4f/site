---
home: true
actionText: Get started here ->
actionLink: /
features:
- title: Fast and Scalable
  details: Read an unlimited volume of objects with type-marked fields.
- title: Heterogenous, Binary Data
  details: Store mixed type and sized data together, no problem!
- title: Object-oriented and tables combined
  details: Manage data in a format thats both tabular and object-like.

footer: MIT Licensed | Copyright © 2018-present Joshua Weinstein
---




## Intro

`dr4` is a revolutionary data format that allows, quick, scalable, and organized access to object oriented data. However, unlike file and data formats such as `JSON` or `XML`, `dr4` is unique in that it's binary. `dr4` is also designed to be readable and writable without any parsing or handling overhead. Additionally, it can also be used much like `CSV`, easily appendable or joinable with other `dr4` documents, without the extra hassle.

What makes `dr4` unique is that, unlike other binary data formats, it's not limited by a specific size of bytes for the entire document, and can easily be grown without reading the entire file. With formats such as `BSON`, the entire file is sized by a signed 32-bit integer at the beginning. With `dr4`, files and documents are treated as *unsized* collections of objects and data. A small amount of version and meta data is kept at the start of the file, but beyond that, it's pure data!

## What is a 'row'?

In `dr4`, data is organized in objects that are called rows. Rows 

## Files

The `dr4` format can be saved in files called `.dr4` files. These files are binary files that stores the row objects.
