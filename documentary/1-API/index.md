## API

The package is available by importing its default function:

```js
import detect from '@depack/detect'
```

%~%

```## detect => Array<string>
[
  ["source", "string"]
]
```

Returns the paths or names of packages that are imported in the source code.

_For example, for the given source file_
%EXAMPLE: example/source%

_It will produce the following output_

%EXAMPLE: example/example, ../src => @depack/detect%
%FORK-js example/example%

%~%