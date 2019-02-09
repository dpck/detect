# @depack/detect

[![npm version](https://badge.fury.io/js/%40depack%2Fdetect.svg)](https://npmjs.org/package/@depack/detect)

`@depack/detect` is Detects Dependencies In The Source File.

```sh
yarn add -E @depack/detect
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`detect(source: string): Array<string>`](#detectsource-string-arraystring)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import detect from '@depack/detect'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `detect(`<br/>&nbsp;&nbsp;`source: string,`<br/>`): Array<string>`

Returns the paths or names of packages that are imported in the source code.

_For example, for the given source file_
```js
// returns the correct output
import test from 'test'
import test2, * as test3 from 'test2'
import 'test3'
export { default as Test } from 'test4'

/* expected */
["test", "test2", "test3", "test4"]
/**/
```

_It will produce the following output_

```js
/* yarn example/ */
import detect from '@depack/detect'
import read from '@wrote/read'

(async () => {
  const source = await read('example/source.js')
  const res = detect(source)
  console.log(res)
})()
```
```js
[ 'test', 'test2', 'test3', 'test4' ]
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>
      © <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a>
      2019
    </th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif" alt="Tech Nation Visa" />
      </a>
    </th>
    <th>
      <a href="https://www.technation.sucks">Tech Nation Visa Sucks</a>
    </th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>