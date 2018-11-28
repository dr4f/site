# FAQ

This page is a resource to answer commonly asked questions on the `dr4` document format.

## Data

### What kind of data can dr4 store?

`dr4` is equipped to store any kind of data that can be represented in some form of an object. Text, database tables, `CSV` files, json files, can all be converted and stored as `dr4` documents. The rather larger limit to the size of individual data rows (4294 MB) in `dr4` also allows large data types to be stored in `dr4` as well.

### Can different types of data be stored in the same document?

Yes. The sizes and fields of each row within a document can all be different from one another. `dr4` is unique in the fact it can store heterogeneous data objects, in binary form.

### What is the max size of a dr4 document?

None. The only limits imposed on the size of an entire document lie with the operating system it is stored on. As explained in the format description, there is no storage of the entire size of the document. This allows new rows to be easily added to a document, without needing to read all of it into memory, or update other portions of it.

The max size of an individual row is 4294 MB.
