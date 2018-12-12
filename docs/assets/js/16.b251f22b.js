(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{173:function(e,t,a){"use strict";a.r(t);a(46),a(72),a(73);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=a(6),r=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.slotKey}},[a("h1",{attrs:{id:"_1-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-0-0","aria-hidden":"true"}},[e._v("#")]),e._v(" "),a("code",[e._v("1.0.0")])]),e._v(" "),a("p",[a("em",[e._v("Specification for dr4 version "),a("code",[e._v("0.0.1")])])]),e._v(" "),a("h2",{attrs:{id:"notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),a("ul",[a("li",[e._v("This is the first fully-fledged release version for "),a("code",[e._v("dr4")])])]),e._v(" "),a("h2",{attrs:{id:"document"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document","aria-hidden":"true"}},[e._v("#")]),e._v(" Document")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("dr4")]),e._v(" document shall be defined as a sequence of bytes, that includes a document header, document body, and a termination sequence.")]),e._v(" "),a("h3",{attrs:{id:"document-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-header","aria-hidden":"true"}},[e._v("#")]),e._v(" Document Header")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("dr4")]),e._v(" document header shall be defined as a sequence of eight unsigned 8-bit integers at the beginning of the document. These are designated as follows:")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("Bytes 1-3 are the magic sequence: 83, 94 and 121.")]),e._v(" "),a("li",[e._v("Bytes 4-6 are the version bytes.")]),e._v(" "),a("li",[e._v("Bytes 7 and 8 are reserved for future use.")])])]),e._v(" "),a("h3",{attrs:{id:"document-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#document-body","aria-hidden":"true"}},[e._v("#")]),e._v(" Document Body")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("dr4")]),e._v(" document body shall be defined as a series of "),a("em",[e._v("data rows")]),e._v(", terminated by a 4-byte sequence, all of which have the value 0.")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("A document body is always terminated by 0 0 0 0, also read as \\x00\\x00\\x00\\x00")])])]),e._v(" "),a("h2",{attrs:{id:"rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows","aria-hidden":"true"}},[e._v("#")]),e._v(" Rows")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("dr4")]),e._v(" row shall be defined as a sequence of bytes, which includes a header, body, and stop byte.")]),e._v(" "),a("h3",{attrs:{id:"row-header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-header","aria-hidden":"true"}},[e._v("#")]),e._v(" Row Header")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("dr4")]),e._v(" row header shall be defined as sequence of unsigned 32-bit integers, which represent the size, length, and offsets of the row. The header values are defined as follows:")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("Bytes 1-4 of the header are an unsigned 32-bit integer holding the row size.")]),e._v(" "),a("li",[e._v("Bytes 5-8 of the header are an unsigned 32-bit integer holding the row length.")]),e._v(" "),a("li",[e._v("The row length shall never be greater than the row size.")]),e._v(" "),a("li",[e._v("The row length shall never be zero.")]),e._v(" "),a("li",[e._v("The row size shall never be zero.")]),e._v(" "),a("li",[e._v("Bytes 9-f of the header are a sequence of unsigned 32-bit integers.")])])]),e._v(" "),a("p",[e._v("The offset array of the row header's end byte, f, is derived by the following formula:")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("f = 8 + (length * 4) - 1")])])]),e._v(" "),a("p",[e._v("The offset of a row's field is defined as the first byte of the field at an offset of "),a("code",[e._v("n")]),e._v(" bytes from byte "),a("code",[e._v("0")]),e._v(" of the row's body. The rules of the offsets held within a row header's offset array are defined as:")]),e._v(" "),a("blockquote",[a("ul",[a("li",[e._v("An offset value is never greater than the size of the row.")]),e._v(" "),a("li",[e._v("No two offset value's can be the same within the same row.")]),e._v(" "),a("li",[e._v("The length of the row and the size of the offset array must always be equal.")]),e._v(" "),a("li",[e._v("The first offset in the offset array is always "),a("code",[e._v("0")]),e._v(".")]),e._v(" "),a("li",[e._v("Each row must always have at least one offset.")])])]),e._v(" "),a("h3",{attrs:{id:"row-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-body","aria-hidden":"true"}},[e._v("#")]),e._v(" Row Body")]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("dr4")]),e._v(" row body shall be defined as a sequence of bytes, that is terminated by a stopping byte. The stopping byte is an unsigned 8-bit integer with a value of "),a("code",[e._v("0")]),e._v(". The contents within the row body correspond to the typed fields which hold the data of the "),a("code",[e._v("dr4")]),e._v(" format.")]),e._v(" "),a("h2",{attrs:{id:"types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types","aria-hidden":"true"}},[e._v("#")]),e._v(" Types")]),e._v(" "),a("p",[e._v("A type shall be defined as a unique, 8-bit unsigned integer with indicates the type of data stored within a field. A type mark is defined as the first byte of each type, which indicates the type.")]),e._v(" "),a("hr"),e._v(" "),a("h4",{attrs:{id:"notation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notation","aria-hidden":"true"}},[e._v("#")]),e._v(" Notation")]),e._v(" "),a("p",[e._v("The binary notation used adheres to the format:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\\x01 == 1 == 00000001\n |      |       |\n fmt    dec    binary \n")])])]),a("p",[e._v("The max value for a byte is "),a("code",[e._v("\\x255")]),e._v(" and the minimum is "),a("code",[e._v("\\x00")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"type-listings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-listings","aria-hidden":"true"}},[e._v("#")]),e._v(" Type Listings")]),e._v(" "),a("p",[e._v("The types supported by this specification are as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n STOP                     \\x00\n\n . simple types .\n......................................\n\n NONE                     \\x01\n BOOL                     \\x02\n UI08                     \\x03\n UI16                     \\x04\n UI32                     \\x05\n UI64                     \\x06\n SI08                     \\x07\n SI16                     \\x08\n SI32                     \\x09\n SI64                     \\x10\n SGFN                     \\x11\n DBFN                     \\x12\n\n . sequence types .\n ......................................\n\n CSTR (C-string)          \\x13\n")])])]),a("p",[a("em",[e._v("Note")]),e._v(" : "),a("code",[e._v("FN")]),e._v(" refers to floating-point number.")]),e._v(" "),a("h3",{attrs:{id:"stop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop","aria-hidden":"true"}},[e._v("#")]),e._v(" STOP")]),e._v(" "),a("p",[e._v("The stoppage byte. This byte is always present at the end of a row body, and thus, the entire row itself.")]),e._v(" "),a("h3",{attrs:{id:"bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bool","aria-hidden":"true"}},[e._v("#")]),e._v(" BOOL")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("bool")]),e._v(" type is a data type with a size of "),a("code",[e._v("2")]),e._v(" bytes. The first byte is the bool type byte, "),a("code",[e._v("\\x02")]),e._v(", while the second byte holds the state. "),a("code",[e._v("\\x01")]),e._v(" corresponds to the true state, and "),a("code",[e._v("\\x00")]),e._v(" for the false state.")]),e._v(" "),a("h3",{attrs:{id:"ui08"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui08","aria-hidden":"true"}},[e._v("#")]),e._v(" UI08")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("UI08")]),e._v(" type is an 8-bit unsigned integer. The first byte is the "),a("code",[e._v("UI08")]),e._v(" type byte, the second byte is the value between "),a("code",[e._v("0, 255")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"ui16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui16","aria-hidden":"true"}},[e._v("#")]),e._v(" UI16")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("UI16")]),e._v(" type is a 16-bit unsigned integer. The first byte is the "),a("code",[e._v("UI16")]),e._v(" type byte, the remaining bytes represent the value between "),a("code",[e._v("0, 65535")])]),e._v(" "),a("h3",{attrs:{id:"ui32"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui32","aria-hidden":"true"}},[e._v("#")]),e._v(" UI32")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("UI32")]),e._v(" type is a 32-bit unsigned integer. The first byte is the "),a("code",[e._v("UI32")]),e._v(" type byte, the remaining bytes represent the value between "),a("code",[e._v("0, 4294967295")])]),e._v(" "),a("h3",{attrs:{id:"ui64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ui64","aria-hidden":"true"}},[e._v("#")]),e._v(" UI64")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("UI64")]),e._v(" type is a 64-bit unsigned integer. The first byte is the "),a("code",[e._v("UI64")]),e._v(" type byte, the remaining bytes represent the value between "),a("code",[e._v("0, 18,446,744,073,709,551,615")])]),e._v(" "),a("h3",{attrs:{id:"si08"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#si08","aria-hidden":"true"}},[e._v("#")]),e._v(" SI08")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SI08")]),e._v(" type is an 8-bit signed integer. The first byte is the "),a("code",[e._v("SI08")]),e._v(" type byte, the second byte is the value between "),a("code",[e._v("-127 , 127")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"si16"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#si16","aria-hidden":"true"}},[e._v("#")]),e._v(" SI16")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SI16")]),e._v(" type is an 16-bit signed integer. The first byte is the "),a("code",[e._v("SI16")]),e._v(" type byte, the remaining bytes represent the value between "),a("code",[e._v("-32767 , 32767")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"si32"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#si32","aria-hidden":"true"}},[e._v("#")]),e._v(" SI32")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SI32")]),e._v(" type is a 32-bit signed integer. The first byte is the "),a("code",[e._v("SI32")]),e._v(" type byte, the remaining bytes represent the value between "),a("code",[e._v("0, 4294967295")])]),e._v(" "),a("h3",{attrs:{id:"si64"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#si64","aria-hidden":"true"}},[e._v("#")]),e._v(" SI64")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SI64")]),e._v(" type is a 64-bit signed integer. The first byte is the "),a("code",[e._v("SI64")]),e._v(" type byte, the remaining bytes represent the value between "),a("code",[e._v("−9,223,372,036,854,775,807, +9,223,372,036,854,775,807")])]),e._v(" "),a("h3",{attrs:{id:"sgfn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sgfn","aria-hidden":"true"}},[e._v("#")]),e._v(" SGFN")]),e._v(" "),a("p",[e._v("Single precision floating point number type. Equivalent to a "),a("code",[e._v("float")]),e._v(" data type in the C language. The first byte is the "),a("code",[e._v("SGFN")]),e._v(" type byte, the remaining bytes represent the float itself.")]),e._v(" "),a("h3",{attrs:{id:"dbfn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dbfn","aria-hidden":"true"}},[e._v("#")]),e._v(" DBFN")]),e._v(" "),a("p",[e._v("Double precision floating point number type. Equivalent to a "),a("code",[e._v("double")]),e._v(" data type in the C language. The first byte is the "),a("code",[e._v("DBFN")]),e._v(" type byte, the remaining bytes represent the float itself.")])])},[],!1,null,null,null);r.options.__file="1-0-0.md";t.default=r.exports}}]);