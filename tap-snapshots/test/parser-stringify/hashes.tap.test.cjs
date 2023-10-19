/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP hashes.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
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
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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

exports[`test/parser-stringify.js TAP hashes.tap bail > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser-stringify.js TAP hashes.tap bail > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser-stringify.js TAP hashes.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
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
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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

exports[`test/parser-stringify.js TAP hashes.tap default settings > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser-stringify.js TAP hashes.tap default settings > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser-stringify.js TAP hashes.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
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
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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

exports[`test/parser-stringify.js TAP hashes.tap strict > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser-stringify.js TAP hashes.tap strict > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser-stringify.js TAP hashes.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "contains # hash",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "directive",
      "ok": true,
      "todo": "# x # y",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "escaped \\\\ slash \\\\",
      "ok": true,
      "todo": "true",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "yes todo",
      "ok": true,
      "todo": "# hash",
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "not todo # hash # todo",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 6,
      "start": 1,
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
      "count": 6,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 6,
      "plan": FinalPlan {
        "comment": "",
        "end": 6,
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

exports[`test/parser-stringify.js TAP hashes.tap strictBail > stringified 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`

exports[`test/parser-stringify.js TAP hashes.tap strictBail > stringified flat 1`] = `
TAP version 13
ok 1 - contains \\# hash
ok 2 - directive # TODO \\# x \\# y
ok 3 - escaped \\\\ slash \\\\ # TODO true
ok 4 - not todo \\# hash \\# todo
ok 5 - yes todo # TODO \\# hash
ok 6 - not todo \\# hash \\# todo
1..6
# todo: 3

`
