/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser-stringify.js TAP common-with-explanation.tap bail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
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
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP common-with-explanation.tap bail > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser-stringify.js TAP common-with-explanation.tap bail > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser-stringify.js TAP common-with-explanation.tap default settings > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
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
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP common-with-explanation.tap default settings > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser-stringify.js TAP common-with-explanation.tap default settings > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser-stringify.js TAP common-with-explanation.tap strict > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
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
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP common-with-explanation.tap strict > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser-stringify.js TAP common-with-explanation.tap strict > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser-stringify.js TAP common-with-explanation.tap strictBail > parsed 1`] = `
Array [
  Array [
    "version",
    13,
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
    "#\\n",
  ],
  Array [
    "comment",
    "# Create a new Board and Tile, then place\\n",
  ],
  Array [
    "comment",
    "# the Tile onto the board.\\n",
  ],
  Array [
    "comment",
    "#\\n",
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 1,
      "name": "The object isa Board",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 2,
      "name": "Board size is zero",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 3,
      "name": "The object isa Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 4,
      "name": "Get possible places to put the Tile",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 5,
      "name": "Placing the tile produces no error",
      "ok": true,
    },
  ],
  Array [
    "assert",
    Result {
      "fullname": "",
      "id": 6,
      "name": "Board size is 1",
      "ok": true,
    },
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
      "todo": 0,
    },
  ],
]
`

exports[`test/parser-stringify.js TAP common-with-explanation.tap strictBail > stringified 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`

exports[`test/parser-stringify.js TAP common-with-explanation.tap strictBail > stringified flat 1`] = `
TAP version 13
1..6
#
# Create a new Board and Tile, then place
# the Tile onto the board.
#
ok 1 - The object isa Board
ok 2 - Board size is zero
ok 3 - The object isa Tile
ok 4 - Get possible places to put the Tile
ok 5 - Placing the tile produces no error
ok 6 - Board size is 1

`
