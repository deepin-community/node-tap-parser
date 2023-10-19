/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP simple_yaml.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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

exports[`test/parser.js TAP simple_yaml.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "1..5\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 5,
      "start": 1,
    },
  ],
  Array [
    "line",
    "ok 1\\n",
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
    "result",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 1,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 2\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    fnurk: skib\\n",
  ],
  Array [
    "line",
    "    ponk: gleeb\\n",
  ],
  Array [
    "line",
    "  -\\n",
  ],
  Array [
    "line",
    "    bar: krup\\n",
  ],
  Array [
    "line",
    "    foo: plink\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Array [
        Object {
          "fnurk": "skib",
          "ponk": "gleeb",
        },
        Object {
          "bar": "krup",
          "foo": "plink",
        },
      ],
      "fullname": "",
      "id": 2,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 3\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 3,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 4\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  expected:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - 2\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  got:\\n",
  ],
  Array [
    "line",
    "    - 1\\n",
  ],
  Array [
    "line",
    "    - pong\\n",
  ],
  Array [
    "line",
    "    - 4\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "diag": Object {
        "expected": Array [
          1,
          2,
          4,
        ],
        "got": Array [
          1,
          "pong",
          4,
        ],
      },
      "fullname": "",
      "id": 4,
      "ok": true,
    },
  ],
  Array [
    "line",
    "ok 5\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "result",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "",
      "id": 5,
      "ok": true,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 5,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 5,
      "plan": FinalPlan {
        "comment": "",
        "end": 5,
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
