/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP todo_inline.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP todo_inline.tap bail > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`

exports[`test/parser-stringify.js TAP todo_inline.tap bail > stringified flat 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`

exports[`test/parser-stringify.js TAP todo_inline.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP todo_inline.tap default settings > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`

exports[`test/parser-stringify.js TAP todo_inline.tap default settings > stringified flat 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`

exports[`test/parser-stringify.js TAP todo_inline.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP todo_inline.tap strict > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`

exports[`test/parser-stringify.js TAP todo_inline.tap strict > stringified flat 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`

exports[`test/parser-stringify.js TAP todo_inline.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Foo",
      "ok": false,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Unexpected success",
      "ok": true,
      "todo": "Just testing the todo interface.",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "This is not todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "",
      "ok": true,
      "todo": "This is a todo with an empty description",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "testTitle#todo is not a todo, it's a url",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# todo: 3\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 1,
      "failures": Array [],
      "ok": true,
      "pass": 4,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 3,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP todo_inline.tap strictBail > stringified 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`

exports[`test/parser-stringify.js TAP todo_inline.tap strictBail > stringified flat 1`] = `
1..5
not ok 1 - Foo # TODO Just testing the todo interface.
ok 2 - Unexpected success # TODO Just testing the todo interface.
ok 3 - This is not todo
ok 4 # TODO This is a todo with an empty description
ok 5 - testTitle\\#todo is not a todo, it's a url
# todo: 3

`
