(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{164:function(e,t,a){"use strict";a.r(t);a(46),a(72),a(73);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=a(6),n=Object(o.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"a-new-way-to-deal-with-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-new-way-to-deal-with-data","aria-hidden":"true"}},[e._v("#")]),e._v(" A new way to deal with data")]),e._v(" "),a("p",[e._v("The data we use and see is stored in a variety of different formats. Text, images, emails, videos, logs, spreadsheets, a nearly infinite amount of channels and formats. In programming, most of the data that applications deal with is "),a("em",[e._v("object-oriented")]),e._v(" data. Data can be considered object-oriented if it contains fields or keys which hold values. Almost anything can be "),a("em",[e._v("modeled")]),e._v(" as an object. The power of processing object-oriented data can provide incredible insights and services in software.")]),e._v(" "),a("h2",{attrs:{id:"what-exactly-is-an-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-exactly-is-an-object","aria-hidden":"true"}},[e._v("#")]),e._v(" What exactly is an object?")]),e._v(" "),a("p",[e._v('The term "object" can be a bit ambiguous, it carries different meanings in different settings. In programming, '),a("em",[e._v("object")]),e._v(" refers to some compound data structure that can be constructed and destroyed. These objects are usually "),a("em",[e._v("defined")]),e._v(" in the respective language through writing the structure of the desired object. A common example would be a "),a("code",[e._v("class")]),e._v(" defined in python:")]),e._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[e._v("\n"),a("span",{attrs:{class:"token keyword"}},[e._v("class")]),e._v(" "),a("span",{attrs:{class:"token class-name"}},[e._v("Fruit")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{attrs:{class:"token builtin"}},[e._v("object")]),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[e._v("def")]),e._v(" "),a("span",{attrs:{class:"token function"}},[e._v("__init__")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),e._v("self"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" name"),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" calories"),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n\t\tself"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name "),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" name\n\t\tself"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),e._v("calories "),a("span",{attrs:{class:"token operator"}},[e._v("=")]),e._v(" calories\n")])])]),a("p",[e._v("Here, the "),a("code",[e._v("Fruit")]),e._v(" object will contain two fields, "),a("em",[e._v("name")]),e._v(" and "),a("em",[e._v("calories")]),e._v(". Yet the sizes of the two fields, their offsets, and the memory "),a("code",[e._v("Fruit")]),e._v(" instances would be allocated in are hidden. The true storage representation of the object is masked by the language. Without additional code or libraries, the data in the object is not portable or accessable beyond the Python runtime.")]),e._v(" "),a("h2",{attrs:{id:"storage-formats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-formats","aria-hidden":"true"}},[e._v("#")]),e._v(" Storage Formats")]),e._v(" "),a("p",[e._v("Common methods of transporting object data out of programs are serialization formats like "),a("code",[e._v("JSON")]),e._v(". These are often text-based formats, which although useful, have unique drawbacks. Data stored in text takes longer to read off disk, takes up more space, and takes time to convert back to text. Overall, it's not usable by software in it's usual form, it needs to be parsed and altered into runtime data the program understands.")]),e._v(" "),a("p",[e._v("Binary formats, such as "),a("code",[e._v("BSON")]),e._v(" are already in a format readable by programs. Yet, many of them follow a style of formatting that presents the following issues:")]),e._v(" "),a("ol",[a("li",[e._v("The entire document must be read to read any of the data inside it.")]),e._v(" "),a("li",[e._v("The document is pre-sized, data cannot be added without creating an entirely new document.")]),e._v(" "),a("li",[e._v("The documents are not indexed. To find some item, the entire document needs to be read.")])]),e._v(" "),a("p",[e._v("Data, particularly object-oriented is commonly stored in several document formats. "),a("code",[e._v("CSV")]),e._v(", "),a("code",[e._v("JSON")]),e._v(", "),a("code",[e._v("XML")]),e._v(", the list goes on and on. Data objects are also stored in binary formats, like "),a("code",[e._v("BSON")]),e._v(". Binary formats can usually store data in either less space or more detailed information. Databases, for example, almost always store data in binary objects. Storage formats differ from the programming runtime objects discussed previously because formats make readability and writability a priority.")]),e._v(" "),a("h2",{attrs:{id:"putting-together-the-pros-removing-the-cons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#putting-together-the-pros-removing-the-cons","aria-hidden":"true"}},[e._v("#")]),e._v(" Putting together the pros, removing the cons")]),e._v(" "),a("p",[e._v("The available, commonly used storage formats provide a number of unique advantages, as well as disadvantages. Putting them together in a new, more viable format is not a simple task. The performance costs and tradeoffs between each use case of a data format must be looked over carefully. However, in the creation of such a format, one can assume the following.")]),e._v(" "),a("ul",[a("li",[e._v("Converting binary data to a textual format is easy, converting a textual format to a binary format is hard and costly performance-wise.")]),e._v(" "),a("li",[e._v("Data collections should be easily searchable.")]),e._v(" "),a("li",[e._v("There should be a performance effecient way to store and access data in a binary format, while not having to involve a full database.")]),e._v(" "),a("li",[e._v("The data format should be able to be wrapped with classes or containers written in multiple programming languages.")]),e._v(" "),a("li",[e._v("Existing data formats should be able to be converted back and forth for easier adoption by developers.")]),e._v(" "),a("li",[e._v("Possess a detailed type system to store type-specific values within objects.")])]),e._v(" "),a("p",[a("code",[e._v("dr4")]),e._v(" is a modern, fast, and effecient data storage format embodies those principles. This article is just the first of many intended to highlight it's uses, capabilities, and potential. "),a("code",[e._v("dr4")]),e._v(" is an excellent choice for developing new applications and changing the way software can handle and store data.")])])},[],!1,null,null,null);n.options.__file="first-post.md";t.default=n.exports}}]);