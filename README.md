# tutorial-load-fixtures

Source files for [the tutorial for auto loading test fixtures in node][tutorial]

## Getting Started

First clone this repo, then install its dependencies with

```shell
$ npm install
```

Now you can see it work with

```shell
$ grunt
```

This will output something similar to:

```shell
Running "jshint:gruntfile" (jshint) task

✔ No problems


Running "jshint:lib" (jshint) task

✔ No problems


Running "jshint:test" (jshint) task

✔ No problems


Running "nodeunit:files" (nodeunit) task
Testing main_test.js.OK
>> 1 assertions passed (10ms)

Done, without errors.


Execution Time (2014-04-19 07:35:31 UTC)
loading tasks                   120ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 37%
loading grunt-contrib-jshint     41ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 13%
jshint:gruntfile                 33ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 10%
jshint:lib                       12ms  ▇▇▇▇▇▇ 4%
jshint:test                      16ms  ▇▇▇▇▇▇▇ 5%
loading grunt-contrib-nodeunit   81ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 25%
nodeunit:files                   14ms  ▇▇▇▇▇▇▇ 4%
Total 323ms
```

## Tutorial files

The files you'll be interested in if you're following the [tutorial][tutorial] are in the `test` directory:

* `test/main_test.js`
* `test/fixtures/index.js`

## License
Copyright (c) 2014 Camille Reynders. Licensed under the MIT license.

[tutorial]: http://creynders.wordpress.com/2014/04/19/auto-loading-test-fixtures-in-node