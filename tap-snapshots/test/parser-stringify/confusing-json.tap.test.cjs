/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP confusing-json.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
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
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
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
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
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
    "extra",
    "  ],\\n",
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
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
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
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
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

exports[`test/parser-stringify.js TAP confusing-json.tap bail > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser-stringify.js TAP confusing-json.tap bail > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser-stringify.js TAP confusing-json.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
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
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
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
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
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
    "extra",
    "  ],\\n",
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
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
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
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
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

exports[`test/parser-stringify.js TAP confusing-json.tap default settings > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser-stringify.js TAP confusing-json.tap default settings > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms

`

exports[`test/parser-stringify.js TAP confusing-json.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
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
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
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
        "# failed 9 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 9,
          "failures": Array [
            Object {
              "data": "{\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  \\"x\\": 1\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "}\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"y\\": 2,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"steps\\": [\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  {\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "    \\"z\\": 3\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "]\\n",
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
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
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
    "extra",
    "  ],\\n",
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
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
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
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# failed 17 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 17,
      "failures": Array [
        Object {
          "data": "createdMultipleStepsWithWeightAndCapacity={\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"usedByModels\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"x\\": 1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"stepsOrdered\\": {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"y\\": 2,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"steps\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    \\"z\\": 3\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "]\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  },\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"a\\": \\"bc\\"\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
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
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP confusing-json.tap strict > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`

exports[`test/parser-stringify.js TAP confusing-json.tap strict > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`

exports[`test/parser-stringify.js TAP confusing-json.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: Test newlines in tap and console.log\\n",
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
        "assert",
        Result {
          "fullname": "Test newlines in tap and console.log",
          "id": 2,
          "name": "After console.log",
          "ok": true,
        },
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
        "# failed 9 of 2 tests\\n",
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 2,
          "fail": 9,
          "failures": Array [
            Object {
              "data": "{\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  \\"x\\": 1\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "}\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"y\\": 2,\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "\\"steps\\": [\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  {\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "    \\"z\\": 3\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "  }\\n",
              "tapError": "Non-TAP data encountered in strict mode",
            },
            Object {
              "data": "]\\n",
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
          "time": 4.137,
          "todo": 0,
        },
      ],
    ],
  ],
  Array [
    "extra",
    "createdMultipleStepsWithWeightAndCapacity={\\n",
  ],
  Array [
    "extra",
    "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
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
    "extra",
    "  ],\\n",
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
    "extra",
    "  },\\n",
  ],
  Array [
    "extra",
    "  \\"a\\": \\"bc\\"\\n",
  ],
  Array [
    "extra",
    "}\\n",
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
    "plan",
    Object {
      "end": 1,
      "start": 1,
    },
  ],
  Array [
    "comment",
    "# time=13.316ms\\n",
  ],
  Array [
    "comment",
    "# failed 17 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 17,
      "failures": Array [
        Object {
          "data": "createdMultipleStepsWithWeightAndCapacity={\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"name\\": \\"Multiple Steps with Weight and Capacity\\",\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"usedByModels\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "{\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"x\\": 1\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  ],\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"stepsOrdered\\": {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"y\\": 2,\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "\\"steps\\": [\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  {\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "    \\"z\\": 3\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  }\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "]\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  },\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "  \\"a\\": \\"bc\\"\\n",
          "tapError": "Non-TAP data encountered in strict mode",
        },
        Object {
          "data": "}\\n",
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
      "time": 13.316,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP confusing-json.tap strictBail > stringified 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`

exports[`test/parser-stringify.js TAP confusing-json.tap strictBail > stringified flat 1`] = `
TAP version 13
# Subtest: Test newlines in tap and console.log
    ok 1 - Before console.log
    ok 2 - After console.log
    1..2
    # failed 9 of 2 tests
createdMultipleStepsWithWeightAndCapacity={
  "name": "Multiple Steps with Weight and Capacity",
  "usedByModels": [
    {
      "x": 1
    }
  ],
  "stepsOrdered": {
    "y": 2,
    "steps": [
      {
        "z": 3
      }
    ]
  },
  "a": "bc"
}
ok 1 - Test newlines in tap and console.log # time=4.137ms
1..1
# time=13.316ms
# failed 17 test

`
