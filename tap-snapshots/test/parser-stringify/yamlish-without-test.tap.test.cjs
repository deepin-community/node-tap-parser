/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP yamlish-without-test.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "extra",
    "  this: is yaml\\n",
  ],
  Array [
    "extra",
    "  but: no test here\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap bail > stringified 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1

`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap bail > stringified flat 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1

`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "extra",
    "  this: is yaml\\n",
  ],
  Array [
    "extra",
    "  but: no test here\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap default settings > stringified 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1

`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap default settings > stringified flat 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1

`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "extra",
    "  this: is yaml\\n",
  ],
  Array [
    "extra",
    "  but: no test here\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 4 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ---\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  this: is yaml\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  but: no test here\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap strict > stringified 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1
# failed 4 test

`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap strict > stringified flat 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1
# failed 4 test

`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "extra",
    "  ---\\n",
  ],
  Array [
    "extra",
    "  this: is yaml\\n",
  ],
  Array [
    "extra",
    "  but: no test here\\n",
  ],
  Array [
    "extra",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "name": "this is fine",
      "ok": true,
    },
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# failed 4 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ---\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  this: is yaml\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  but: no test here\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 1,
      "plan": FinalPlan {
        "comment": "",
        "end": 1,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap strictBail > stringified 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1
# failed 4 test

`

exports[`test/parser-stringify.js TAP yamlish-without-test.tap strictBail > stringified flat 1`] = `
TAP version 13
  ---
  this: is yaml
  but: no test here
  ...
ok - this is fine
1..1
# failed 4 test

`
