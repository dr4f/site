---
home: true
actionText: Get started here ->
actionLink: /format.html
features:
- title: Fast and Scalable
  details: Read an unlimited volume of objects with type-marked fields.
- title: Heterogenous, Binary Data
  details: Store mixed type and sized data together, no problem!
- title: Object-oriented and tables combined
  details: Manage data in a format thats both tabular and object-like.

meta:
- name: keywords
  content: files data science csv bson file streaming programming format machine learning
- name: author
  content: Joshua Weinstein

footer: MIT Licensed | Copyright © 2018-present Joshua Weinstein
---




## Intro

`dr4` is a revolutionary data format that allows, quick, scalable, and organized access to object oriented data. It's readily usable for data science, logging, machine learning, web applications, and much more.

However, unlike file and data formats such as `JSON` or `XML`, `dr4` is unique in that it's binary. `dr4` is also designed to be readable and writable without any parsing or handling overhead. Additionally, it can also be used much like `CSV`, easily appendable or joinable with other `dr4` documents, without the extra hassle.

What makes `dr4` unique is that, unlike other binary data formats, it's not limited by a specific size of bytes for the entire document, and can easily be grown without reading the entire file. With formats such as `BSON`, the entire file is sized by a signed 32-bit integer at the beginning. With `dr4`, files and documents are treated as *unsized* collections of objects and data. A small amount of version and meta data is kept at the start of the file, but beyond that, it's pure data!

## What is a 'row'?

In `dr4`, data is organized in objects that are called rows. Each row contains a heterogenous number of fields. Each field represents a data `type`. `dr4` uses a vast selection of types to store data, like integers, floating point numbers, booleans, strings, lists, and much much more. Rows are composed of a header containing the offset to each field, and a body containing the data for each field. Learn more about rows here.

## What can you do with `dr4`?

The answer is just about anything. `dr4` is a highly dynamic, performant data storage format, that can be used to make a database, a data processor, big data applications, data science apps, machine learning, loggers, and much more. The possibilities are quite endless. `dr4` is specialized to combine the advantages of both *table-like* formats as well as *object-like* formats. 

For more news, tutorials, and info on `dr4`, check out [the blog](/blog/)

## Files

The `dr4` format can be saved in files called `.dr4` files. These files are binary files that store the row objects. More information about  `dr4` documents and files can be found on the [format page](/format.html).
