(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{175:function(e,t,a){"use strict";a.r(t);var r={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},s=a(6),o=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format","aria-hidden":"true"}},[e._v("#")]),e._v(" Format")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("dr4")]),e._v(" format can best be described in the form of "),a("em",[e._v("documents")]),e._v(". Documents are composed of both a header and a body. At a high level, they symbolize a collection of "),a("em",[e._v("data rows")]),e._v(". At the document level, an 8-byte header at the beginning of the document stores the information needed to process the body. This information consists of a 3 byte "),a("em",[e._v("magic")]),e._v(" sequence, a 3 byte versioning sequeunce, a 1 byte to denote size variety, and 1 byte reserved for future use.")]),e._v(" "),a("h2",{attrs:{id:"document-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-header","aria-hidden":"true"}},[e._v("#")]),e._v(" Document Header")]),e._v(" "),a("p",[e._v("The 8-byte document header is structured with the following representation.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[83][94][121]  [0][0][1]   [0]       [0]\n     |             |        |         |\n  magic seq     version    sizer    reserved\n")])])]),a("h3",{attrs:{id:"structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure","aria-hidden":"true"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),a("p",[e._v("In the above format, the header is composed of three parts. Each "),a("code",[e._v("[]")]),e._v(" represents a single unsigned 8-bit integer, ranging in value in decimal form between "),a("code",[e._v("0")]),e._v(" to "),a("code",[e._v("255")]),e._v(". The values of the magic sequence are absolute, they represent the values that almost be present to validate the document. The version and reserved bytes are just examples. However, the version must be a valid version.")]),e._v(" "),a("h3",{attrs:{id:"magic-sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#magic-sequence","aria-hidden":"true"}},[e._v("#")]),e._v(" Magic Sequence")]),e._v(" "),a("p",[e._v("The magic sequence of "),a("code",[e._v("dr4")]),e._v(", "),a("code",[e._v("83, 94, 121")]),e._v(", serves as a validation or marked start of a dr4 document. This also helps if a "),a("code",[e._v("dr4")]),e._v(" document is packed into a string or a file, or if multiple "),a("code",[e._v("dr4")]),e._v(" documents need to be joined together in a file. This will sequence will never change.")]),e._v(" "),a("h3",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version","aria-hidden":"true"}},[e._v("#")]),e._v(" Version")]),e._v(" "),a("p",[e._v("The version of "),a("code",[e._v("dr4")]),e._v(" the document corresponds to is represented by three 8-bit unsigned integers. They each respectively indicate:")]),e._v(" "),a("ul",[a("li",[e._v("First byte : The major release number")]),e._v(" "),a("li",[e._v("Second byte : The minor release number")]),e._v(" "),a("li",[e._v("Third byte : The patch number")])]),e._v(" "),a("p",[e._v("The major release number is incremented the most seldomly, while the third byte is incremented the most frequently. "),a("code",[e._v("dr4")]),e._v(" is not a software package or library, it is a specification for a data or file format. The only real difference between versions are the formats, sizes, or structures of the data types present in fields. All versions are backwards compatible to one another. The format of the file or rows will not change between versions.")]),e._v(" "),a("h3",{attrs:{id:"size-variety"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size-variety","aria-hidden":"true"}},[e._v("#")]),e._v(" Size Variety")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("dr4")]),e._v(" format supports 3 different size varieties. A "),a("em",[e._v("variety")]),e._v(" means the size of the unit in the row header used to store the row size, row length, and row offsets. The supported varieties are:")]),e._v(" "),a("ol",[a("li",[e._v("8-bit")]),e._v(" "),a("li",[e._v("16-bit")]),e._v(" "),a("li",[e._v("32-bit")])]),e._v(" "),a("p",[e._v("The 32-bit variety is considered the regular or default size. However, if a system intending to use "),a("code",[e._v("dr4")]),e._v(" possesses memory constraints, the 16-bit or 8-bit variety will fill such requirements. The sizer byte can be set as "),a("code",[e._v("\\x08")]),e._v(", "),a("code",[e._v("\\x16")]),e._v(" or "),a("code",[e._v("\\x32")]),e._v(", corresponding to 8-bit, 16-bit, or 32-bit respectively.")]),e._v(" "),a("h3",{attrs:{id:"reserved-byte"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reserved-byte","aria-hidden":"true"}},[e._v("#")]),e._v(" Reserved Byte")]),e._v(" "),a("p",[e._v("The last byte of the "),a("code",[e._v("dr4")]),e._v(" document header is reserved for future use.")]),e._v(" "),a("h2",{attrs:{id:"document-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-body","aria-hidden":"true"}},[e._v("#")]),e._v(" Document Body")]),e._v(" "),a("p",[e._v("The document body consists of a sequence of data rows. Each row occupies a fixed amount of bytes, denoted by a size field within it's header. The sequence of rows is terminated by a four byte sequence containing all zeroes.")]),e._v(" "),a("h3",{attrs:{id:"structure-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#structure-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),a("p",[e._v("The overall document body can be represented by the following structure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("(row list)   [0][0][0][0]\n   |               |\n  rows        Termination Seq\n")])])]),a("h3",{attrs:{id:"termination-sequence"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#termination-sequence","aria-hidden":"true"}},[e._v("#")]),e._v(" Termination Sequence")]),e._v(" "),a("p",[e._v("The sequence of 8-bit unsigned integers "),a("code",[e._v("0, 0, 0, 0")]),e._v(" marks the end of a "),a("code",[e._v("dr4")]),e._v(" document.")]),e._v(" "),a("p",[e._v("The true role of the termination sequence is to symbolize a value of "),a("code",[e._v("0")]),e._v(". There is no specificed limit to the size of "),a("code",[e._v("dr4")]),e._v(" documents. Therefore, if a document is intended to be read row by row, as opposed to in a single chunk, the termination sequence provides a stopping point.")]),e._v(" "),a("h3",{attrs:{id:"row-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-list","aria-hidden":"true"}},[e._v("#")]),e._v(" Row List")]),e._v(" "),a("p",[e._v("The "),a("em",[e._v("row list")]),e._v(', pictured above is a finite sequence of data rows. These rows each contain their own header and body. The first four bytes of any row correspond to it\'s total size in bytes. No row can ever have a size of zero, or be "empty".')]),e._v(" "),a("p",[e._v("The reason the termination sequence of the document is four bytes long and not 1 is if the document is read row by row, when a size of zero is detected to read the next row, it must be the end of the document, as no row may have a size of zero.")]),e._v(" "),a("h2",{attrs:{id:"row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row","aria-hidden":"true"}},[e._v("#")]),e._v(" Row")]),e._v(" "),a("p",[e._v("The most important element of a "),a("code",[e._v("dr4")]),e._v(" document is the "),a("em",[e._v("row")]),e._v(". A row, also called a data row, is a binary, fixed size object, that contains an arbitrary number of fields. The row is divided between a header and a body. The header contains the size, number of fields, and an array to hold the offsets of each field. The body contains the packed, binary data values for the fields.")]),e._v(" "),a("h3",{attrs:{id:"row-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-header","aria-hidden":"true"}},[e._v("#")]),e._v(" Row Header")]),e._v(" "),a("p",[e._v("The row header is divided into three segments, the size, the length (number of fields), and the offset array. The size and length are both unsigned 32-bit integers (also 8-bit or 16-bit, depending on variety), while the offset array is just a series of 32-bit unsigned integers. The "),a("em",[e._v("length of the offset array")]),e._v(" is always equal to the value in the "),a("em",[e._v("length header field")]),e._v(". The structure of the row header is depicted below:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" (size)       (length)            (offsets...)\n   |             |                    |\n[uint-32]    [uint-32]     [uint-32]_1 ... [uint-32]_n\n")])])]),a("h4",{attrs:{id:"size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#size","aria-hidden":"true"}},[e._v("#")]),e._v(" Size")]),e._v(" "),a("p",[e._v("The size value of a row header always refers to the size of the row "),a("em",[e._v("not")]),e._v(" including the unsigned integer used to store the size. The size of a row can never be 0. In the future, there may be variant formats of "),a("code",[e._v("dr4")]),e._v(" that use smaller or larger max sizes of rows.")]),e._v(" "),a("h4",{attrs:{id:"length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(" Length")]),e._v(" "),a("p",[e._v("The length value of a row header refers to the number of fields in a row. It is stored as an unsigned integer (1, 2, or 4 byte  sequence, depending on variety) right after the size. It, like the size, can never be 0.")]),e._v(" "),a("h4",{attrs:{id:"offsets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offsets","aria-hidden":"true"}},[e._v("#")]),e._v(" Offsets")]),e._v(" "),a("p",[e._v("The offsets array of a row header stores the byte offset at which each field exists in the row. Each offset refers to the offset from the first byte of the "),a("em",[e._v("row body")]),e._v(", not the header. The first offset in the array is always 0, as the first field always starts right after the header portion of the row ends. Attempting to index an offset array with an integer greater than the "),a("em",[e._v("length")]),e._v(" of the row is invalid.")]),e._v(" "),a("h3",{attrs:{id:"row-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-body","aria-hidden":"true"}},[e._v("#")]),e._v(" Row Body")]),e._v(" "),a("p",[e._v("The row body consists of the packed data for the fields in a row. Every field within the body contains a mark byte, a single 8-bit unsigned integer to indicate the field's type, followed by additional data the field contains. The entire set of supported types is discussed in details in the "),a("code",[e._v("dr4")]),e._v(" specification.")]),e._v(" "),a("p",[e._v("The row body always ends with a "),a("code",[e._v("0")]),e._v(" byte. In the type systen, this is referred to as the "),a("code",[e._v("stop")]),e._v(" type. This byte is accounted for in the "),a("em",[e._v("size")]),e._v(" value of the row header. The offset of the stop byte is not stored in the offset array, nor is it counted as part of the "),a("em",[e._v("length")]),e._v(" value in the header.")]),e._v(" "),a("p",[e._v("An example row body is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\\x_none \\x_none \\x_bool \\x01 \\x_stop\n")])])]),a("p",[a("strong",[e._v("Note")]),e._v(": This example uses a different byte notation, where an element prefixed with "),a("code",[e._v("\\x")]),e._v(" indicates an 8-bit unsigned integer. Named bytes, such as "),a("code",[e._v("\\x_none")]),e._v(" each correspond to different bytes, but for visualization their values are replaced with names.")]),e._v(" "),a("p",[e._v("In this row body, we have two "),a("code",[e._v("none")]),e._v(" fields, followed by a boolean field who's value is true, followed by the stop byte.")]),e._v(" "),a("h3",{attrs:{id:"endianess"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endianess","aria-hidden":"true"}},[e._v("#")]),e._v(" Endianess")]),e._v(" "),a("p",[e._v("For now, "),a("code",[e._v("dr4")]),e._v(" does not support a specific endian format. Since "),a("code",[e._v("dr4")]),e._v(" was originally developed on a unix platform, all of the binary representations here are in little endian form. Satisfying the "),a("code",[e._v("dr4")]),e._v(" spec does not require a specific endian, just the arrangements and positions of specific values.")]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("p",[e._v("Given the explanation of the "),a("code",[e._v("dr4")]),e._v(" document format, this section will provide some full, binary examples of documents.")]),e._v(" "),a("h3",{attrs:{id:"single-row-single-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#single-row-single-field","aria-hidden":"true"}},[e._v("#")]),e._v(" Single Row, Single Field")]),e._v(" "),a("p",[e._v("Below is a 32-bit variety document with a single row, and one item in that row")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\\x83\\x94\\x121\\x00\\x00\\x01\\x00\\x00 -> doc header\n\\x14\\x00\\x00\\x00 -> row size\n\\x01\\x00\\x00\\x00 -> row length\n\\x00\\x00\\x00\\x00 -> offset array\n\\x_none\\x_stop -> row body\n\\x00\\x00\\x00\\x00 -> doc term\n")])])]),a("h3",{attrs:{id:"only-row-two-heterogeneous-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#only-row-two-heterogeneous-fields","aria-hidden":"true"}},[e._v("#")]),e._v(" Only Row, Two Heterogeneous Fields")]),e._v(" "),a("p",[e._v("An example of a 32-bit row (not an entire document), with two differently typed fields")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\\x20\\x00\\x00\\x00 \\x02\\x00\\x00\\x00 \\x00\\x00\\x00\\x00 \\x02\\x00\\x00\\x00 \\x_bool\\x00 \\x_bool\\x01 \\x_stop\n|______________| |______________| |______________| |______________| |_________|_|__________|______|\n       |                |                |                |                      |            |\n      size            length           offset_1        offset_2              fields         stop\n")])])]),a("h3",{attrs:{id:"invalid-row-length"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalid-row-length","aria-hidden":"true"}},[e._v("#")]),e._v(" Invalid Row - length")]),e._v(" "),a("p",[e._v("Here is an example of a row which it's length header value is greater than the number offsets it's header carries.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\\x17\\x00\\x00\\x00 \\x05\\x00\\x00\\x00 \\x00\\x00\\x00\\x00  \\x_si32\\x30\\x02\\x00\\x00  \\x_stop\n|______________| |______________| |______________|  |________________________|______|\n       |                |                |                      |               |\n      size            length           offset_1               fields           stop\n")])])]),a("p",[a("em",[e._v("Note")]),e._v(": "),a("code",[e._v("\\x_si32")]),e._v(" indicates the type for a signed 32-bit integer.")]),e._v(" "),a("h3",{attrs:{id:"_16-bit-row"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-bit-row","aria-hidden":"true"}},[e._v("#")]),e._v(" 16-bit Row")]),e._v(" "),a("p",[e._v("Here is an example of a row within a "),a("code",[e._v("dr4")]),e._v(" document with a 16-bit size variety.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\\x11\\x00 \\x02\\x00 \\x00\\x00 \\x01\\x00 \\x_none \\x_none \\x_stop\n |____|   |____|   |______________| |______________| |_____|\n   |        |             |                 |           |\n size      len          offsets            fields      stop\n")])])])])},[],!1,null,null,null);o.options.__file="format.md";t.default=o.exports}}]);