/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP confusing-json.tap > output bail=false 1`] = `
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
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
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
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
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
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.js TAP confusing-json.tap > output bail=true 1`] = `
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
    "# Subtest: Test newlines in tap and console.log\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
      ],
      Array [
        "line",
        "ok 1 - Before console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 1,
          "name": "Before console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "{\\n",
      ],
      Array [
        "line",
        "  \\"x\\": 1\\n",
      ],
      Array [
        "line",
        "}\\n",
      ],
      Array [
        "line",
        "\\"y\\": 2,\\n",
      ],
      Array [
        "line",
        "\\"steps\\": [\\n",
      ],
      Array [
        "line",
        "  {\\n",
      ],
      Array [
        "line",
        "    \\"z\\": 3\\n",
      ],
      Array [
        "line",
        "  }\\n",
      ],
      Array [
        "line",
        "]\\n",
      ],
      Array [
        "line",
        "ok 2 - After console.log\\n",
      ],
      Array [
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
      ],
      Array [
        "line",
        "1..2\\n",
      ],
      Array [
        "plan",
        Object {
          "end": 2,
          "start": 1,
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
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "line",
    "    ok 1 - Before console.log\\n",
  ],
  Array [
    "line",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "line",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
  ],
  Array [
    "line",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "  \\"usedByModels\\": [\\n",
  ],
  Array [
    "extra",
    "    {\\n",
  ],
  Array [
    "extra",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "extra",
    "    }\\n",
  ],
  Array [
    "line",
    "  ],\\n",
  ],
  Array [
    "extra",
    "  ],\\n",
  ],
  Array [
    "line",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "  \\"stepsOrdered\\": {\\n",
  ],
  Array [
    "extra",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "extra",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "extra",
    "      {\\n",
  ],
  Array [
    "extra",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "extra",
    "      }\\n",
  ],
  Array [
    "extra",
    "    ]\\n",
  ],
  Array [
    "line",
    "  },\\n",
  ],
  Array [
    "extra",
    "  },\\n",
  ],
  Array [
    "line",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "line",
    "}\\n",
  ],
  Array [
    "extra",
    "}\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 1,
      "name": "Before console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    {\\n",
  ],
  Array [
    "line",
    "      \\"x\\": 1\\n",
  ],
  Array [
    "line",
    "    }\\n",
  ],
  Array [
    "line",
    "    \\"y\\": 2,\\n",
  ],
  Array [
    "line",
    "    \\"steps\\": [\\n",
  ],
  Array [
    "line",
    "      {\\n",
  ],
  Array [
    "line",
    "        \\"z\\": 3\\n",
  ],
  Array [
    "line",
    "      }\\n",
  ],
  Array [
    "line",
    "    ]\\n",
  ],
  Array [
    "line",
    "    ok 2 - After console.log\\n",
  ],
  Array [
    "result",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "pass",
    Result {
      "fullname": "Test newlines in tap and console.log",
      "id": 2,
      "name": "After console.log",
      "ok": true,
    },
  ],
  Array [
    "line",
    "    1..2\\n",
  ],
  Array [
    "line",
    "ok 1 - Test newlines in tap and console.log # time=4.137ms\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "Test newlines in tap and console.log",
      "ok": true,
      "time": 4.137,
    },
  ],
  Array [
    "line",
    "1..1\\n",
  ],
  Array [
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "line",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
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
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`
