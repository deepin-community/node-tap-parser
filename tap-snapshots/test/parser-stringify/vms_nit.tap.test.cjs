/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP vms_nit.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "not \\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP vms_nit.tap bail > stringified 1`] = `
1..2
not 
ok 1
ok 2

`

exports[`test/parser-stringify.js TAP vms_nit.tap bail > stringified flat 1`] = `
1..2
not 
ok 1
ok 2

`

exports[`test/parser-stringify.js TAP vms_nit.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "not \\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP vms_nit.tap default settings > stringified 1`] = `
1..2
not 
ok 1
ok 2

`

exports[`test/parser-stringify.js TAP vms_nit.tap default settings > stringified flat 1`] = `
1..2
not 
ok 1
ok 2

`

exports[`test/parser-stringify.js TAP vms_nit.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "not \\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "not \\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP vms_nit.tap strict > stringified 1`] = `
1..2
not 
ok 1
ok 2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP vms_nit.tap strict > stringified flat 1`] = `
1..2
not 
ok 1
ok 2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP vms_nit.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "extra",
    "not \\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 1 of 2 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 1,
      "failures": Array [
        Object {
          "data": "not \\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
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

exports[`test/parser-stringify.js TAP vms_nit.tap strictBail > stringified 1`] = `
1..2
not 
ok 1
ok 2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP vms_nit.tap strictBail > stringified flat 1`] = `
1..2
not 
ok 1
ok 2
# failed 1 of 2 tests

`
