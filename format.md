# Format

The `dr4` format can best be described in the form of *documents*. Documents are composed of both a header and a body. At a high level, they symbolize a collection of *data rows*. At the document level, an 8-byte header at the beginning of the document stores the information needed to process the body. This information consists of a 3 byte *magic* sequence, a 3 byte versioning sequeunce, and 2 bytes that are currently reserved for future use. The 2 byte sequence will likely be used to handle different variants of the `dr4` format.

## Document Header

The 8-byte document header is structured with the following representation.

```
[83][94][121]  [0][0][1]    [0][0]
     |             |           |
  magic seq     version    reserved
```

### Structure

In the above format, the header is composed of three parts. Each `[]` represents a single unsigned 8-bit integer, ranging in value in decimal form between `0` to `255`. The values of the magic sequence are absolute, they represent the values that almost be present to validate the document. The version and reserved bytes are just examples. However, the version must be a valid version.

### Magic Sequence

The magic sequence of `dr4`, `83, 94, 121`, serves as a validation or marked start of a dr4 document. This also helps if a `dr4` document is packed into a string or a file, or if multiple `dr4` documents need to be joined together in a file. This will sequence will never change.

### Version

The version of `dr4` the document corresponds to is represented by three 8-bit unsigned integers. They each respectively indicate:

* First byte : The major release number
* Second byte : The minor release number
* Third byte : The patch number

The major release number is incremented the most seldomly, while the third byte is incremented the most frequently. `dr4` is not a software package or library, it is a specification for a data or file format. The only real difference between versions are the formats, sizes, or structures of the data types present in fields. All versions are backwards compatible to one another. The format of the file or rows will not change between versions.


### Reserved Bytes

The last two 8-bit unsigned bytes of the header are reserved for future use. Most likely, they will be used to represent variants of the `dr4` document that will be handled differently. Such as, if the main form of the `dr4` document stores the sizes and offsets as 32-bit unsigned integers, another variant might only use 16-bit unsigned integers.

## Document Body

The document body consists of a sequence of data rows.
