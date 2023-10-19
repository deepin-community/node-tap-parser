/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP comment-mid-diag.tap bail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parser-stringify.js TAP comment-mid-diag.tap bail > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`

exports[`test/parser-stringify.js TAP comment-mid-diag.tap bail > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`

exports[`test/parser-stringify.js TAP comment-mid-diag.tap default settings > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
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
    "# after 2\\n",
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
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
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

exports[`test/parser-stringify.js TAP comment-mid-diag.tap default settings > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP comment-mid-diag.tap default settings > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP comment-mid-diag.tap strict > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
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
    "# after 2\\n",
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
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 1,
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

exports[`test/parser-stringify.js TAP comment-mid-diag.tap strict > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP comment-mid-diag.tap strict > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
ok 2
# after 2
# failed 1 of 2 tests

`

exports[`test/parser-stringify.js TAP comment-mid-diag.tap strictBail > parsed 1`] = `
Array [
  Array [
    "comment",
    "# before version\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "comment",
    "# after version, before plan\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# before result\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "after": "comment",
      },
      "fullname": "",
      "id": 1,
      "name": "please keep my diags",
      "ok": false,
    },
  ],
  Array [
    "comment",
    "  # before diag\\n",
  ],
  Array [
    "comment",
    "# mid diag\\n",
  ],
  Array [
    "comment",
    "  # after diag\\n",
  ],
  Array [
    "comment",
    "# before 2\\n",
  ],
  Array [
    "bailout",
    "please keep my diags",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "please keep my diags",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "after": "comment",
          },
          "fullname": "",
          "id": 1,
          "name": "please keep my diags",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parser-stringify.js TAP comment-mid-diag.tap strictBail > stringified 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`

exports[`test/parser-stringify.js TAP comment-mid-diag.tap strictBail > stringified flat 1`] = `
# before version
TAP version 13
# after version, before plan
1..2
# before result
not ok 1 - please keep my diags
  ---
  after: comment
  ...
  # before diag
# mid diag
  # after diag
# before 2
Bail out! please keep my diags

`
