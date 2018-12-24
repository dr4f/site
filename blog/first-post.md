---
title: A new way to deal with data
description: dr4, the compact, effecient way to store data.
date: 12-9-18 (mm-dd-yy)
meta:
- name: keywords
  content: files data science csv bson file streaming programming format
- name: author
  content: Joshua Weinstein
---

# A new way to deal with data

The data we use and see is stored in a variety of different formats. Text, images, emails, videos, logs, spreadsheets, a nearly infinite amount of channels and formats. In programming, most of the data that applications deal with is *object-oriented* data. Data can be considered object-oriented if it contains fields or keys which hold values. Almost anything can be *modeled* as an object. The power of processing object-oriented data can provide incredible insights and services in software.

## What exactly is an object?

The term "object" can be a bit ambiguous, it carries different meanings in different settings. In programming, *object* refers to some compound data structure that can be constructed and destroyed. These objects are usually *defined* in the respective language through writing the structure of the desired object. A common example would be a `class` defined in python:

```python

class Fruit(object):

	def __init__(self, name, calories):
		self.name = name
		self.calories = calories
```

Here, the `Fruit` object will contain two fields, *name* and *calories*. Yet the sizes of the two fields, their offsets, and the memory `Fruit` instances would be allocated in are hidden. The true storage representation of the object is masked by the language. Without additional code or libraries, the data in the object is not portable or accessable beyond the Python runtime.

## Storage Formats

Common methods of transporting object data out of programs are serialization formats like `JSON`. These are often text-based formats, which although useful, have unique drawbacks. Data stored in text takes longer to read off disk, takes up more space, and takes time to convert back to text. Overall, it's not usable by software in it's usual form, it needs to be parsed and altered into runtime data the program understands.

Binary formats, such as `BSON` are already in a format readable by programs. Yet, many of them follow a style of formatting that presents the following issues:

1. The entire document must be read to read any of the data inside it.
2. The document is pre-sized, data cannot be added without creating an entirely new document.
3. The documents are not indexed. To find some item, the entire document needs to be read.

Data, particularly object-oriented is commonly stored in several document formats. `CSV`, `JSON`, `XML`, the list goes on and on. Data objects are also stored in binary formats, like `BSON`. Binary formats can usually store data in either less space or more detailed information. Databases, for example, almost always store data in binary objects. Storage formats differ from the programming runtime objects discussed previously because formats make readability and writability a priority.

## Putting together the pros, removing the cons

The available, commonly used storage formats provide a number of unique advantages, as well as disadvantages. Putting them together in a new, more viable format is not a simple task. The performance costs and tradeoffs between each use case of a data format must be looked over carefully. However, in the creation of such a format, one can assume the following.

* Converting binary data to a textual format is easy, converting a textual format to a binary format is hard and costly performance-wise.
* Data collections should be easily searchable.
* There should be a performance effecient way to store and access data in a binary format, while not having to involve a full database.
* The data format should be able to be wrapped with classes or containers written in multiple programming languages.
* Existing data formats should be able to be converted back and forth for easier adoption by developers.
* Possess a detailed type system to store type-specific values within objects.

`dr4` is a modern, fast, and effecient data storage format embodies those principles. This article is just the first of many intended to highlight it's uses, capabilities, and potential. `dr4` is an excellent choice for developing new applications and changing the way software can handle and store data.
