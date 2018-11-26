# Format

The `dr4` format can best be described in the form of *documents*. Documents are composed of both a header and a body. At a high level, they symbolize a collection of *data rows*. At the document level, an 8-byte header at the beginning of the document stores the information needed to process the body.
