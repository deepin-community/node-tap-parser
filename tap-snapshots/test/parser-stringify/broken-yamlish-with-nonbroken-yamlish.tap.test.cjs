/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap bail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap bail > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap bail > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap default settings > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap default settings > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap default settings > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last

`

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap strict > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ok:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - I wished for a bailout!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - lots of other shapes here can look like valid tap\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap strict > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap strict > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap strictBail > parsed 1`] = `
Array [
  Array [
    "plan",
    Object {
      "end": 3,
      "start": 1,
    },
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "ok": "this time I mean it",
      },
      "fullname": "",
      "id": 1,
      "name": "callback happened",
      "ok": true,
    },
  ],
  Array [
    "extra",
    "  ok:\\n",
  ],
  Array [
    "comment",
    "    # comment here too, why not?\\n",
  ],
  Array [
    "extra",
    "    - I wished for a bailout!\\n",
  ],
  Array [
    "extra",
    "    - lots of other shapes here can look like valid tap\\n",
  ],
  Array [
    "extra",
    " ...\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "child test",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "should come last",
      "ok": true,
    },
  ],
  Array [
    "comment",
    "# failed 4 of 3 tests\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 3,
      "fail": 4,
      "failures": Array [
        Object {
          "data": "  ok:\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - I wished for a bailout!\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    - lots of other shapes here can look like valid tap\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": " ...\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
      ],
      "ok": false,
      "pass": 3,
      "plan": FinalPlan {
        "comment": "",
        "end": 3,
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

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap strictBail > stringified 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`

exports[`test/parser-stringify.js TAP broken-yamlish-with-nonbroken-yamlish.tap strictBail > stringified flat 1`] = `
1..3
ok 1 - callback happened
  ---
  ok: this time I mean it
  ...
  ok:
    # comment here too, why not?
    - I wished for a bailout!
    - lots of other shapes here can look like valid tap
 ...
ok 2 - child test
ok 3 - should come last
# failed 4 of 3 tests

`
