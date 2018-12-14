# About

The `dr4` project is intended to provide a simple, scalable and highly effecient way to store heterogenous data. It is also intended to provide a file format to transfer, read, write, and process binary, object-oriented data.

## What is `dr4`?

`dr4` is a binary data storage format. It's specialized for object-oriented data, that is dynamically typed or heterogeneous. `dr4`'s minimal document structure allows it to be easily transported, copied, read, and written. The `dr4` format was crafted to also be highly integratable into existing and new software. 

The format best serves to combine the advantages of both *table-like* and *object-oriented* storage formats. The data rows that `dr4` utilizes allow the aligned storing of values in fields but also permitting an arbitrary number of fields within each row. This gives each row object-like behavior capabilities.

## Inspiration

`Dr4` is largley inspired by the desire to have a data storage format that is:

1. Easy to understand
2. Easy to write libraries and packages to use the format
3. Can be read as distinct rows or lines, similar to `CSV`.
4. Can be interpreted and handled in an object-oriented fashion.
5. Can store type information for values, not just textual data.

Overall, the lack of a storage format that could be use universally greatly motivated the design of `dr4`.  A format that meets the middle ground of many different applications is missing from the development world, and `dr4`'s purpose is to solve that.

## Creation

`dr4` was created by Josh Weinstein. Josh is a software engineer currently working in San Francisco.

[Josh on github](https://github.com/jweinst1)

## Contribution

The `dr4` format is available for input and suggestions for future improvements. Feel free to visit the github and contribute.
