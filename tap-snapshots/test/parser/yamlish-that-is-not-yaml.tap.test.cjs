/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.js TAP yamlish-that-is-not-yaml.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 - expected yaml, got a sea turtle\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  this is not yaml\\n",
  ],
  Array [
    "line",
    "  \\"In fact, it\\": : : :%%% <@!<\\n",
  ],
  Array [
    "line",
    "  is not \\n",
  ],
  Array [
    "line",
    "                anything\\n",
  ],
  Array [
    "line",
    "      but a peaceful\\n",
  ],
  Array [
    "line",
    "        Sea Turtle\\n",
  ],
  Array [
    "line",
    "                      _,.---.---.---.--.._ \\n",
  ],
  Array [
    "line",
    "                  _.-' \`--.\`---.\`---'-. _,\`--.._\\n",
  ],
  Array [
    "line",
    "                 /\`--._ .'.     \`.     \`,\`-.\`-._\\\\\\n",
  ],
  Array [
    "line",
    "                ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/\\n",
  ],
  Array [
    "line",
    "           _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.\\n",
  ],
  Array [
    "line",
    "        ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.\\n",
  ],
  Array [
    "line",
    "       (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\\\n",
  ],
  Array [
    "line",
    "        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\\\n",
  ],
  Array [
    "line",
    "                  /_, ,  _..-'                    \`-._\\\\\\n",
  ],
  Array [
    "line",
    "                  \\\\_, \\\\/ ._(\\n",
  ],
  Array [
    "line",
    "                   \\\\_, \\\\/ ._\\\\\\n",
  ],
  Array [
    "line",
    "                    \`._,\\\\/ ._\\\\\\n",
  ],
  Array [
    "line",
    "                      \`._// ./\`-._\\n",
  ],
  Array [
    "line",
    "               LGB      \`-._-_-_.-'\\n",
  ],
  Array [
    "line",
    "                   http://www.ascii-art.de/ascii/t/turtle.txt\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  but: this\\n",
  ],
  Array [
    "line",
    "  is: yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
      ---
        this is not yaml
        "In fact, it": : : :%%% <@!<
        is not 
                      anything
            but a peaceful
              Sea Turtle
                            _,.---.---.---.--.._ 
                        _.-' \`--.\`---.\`---'-. _,\`--.._
                       /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                      ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                 _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
              ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
             (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
              \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                        /_, ,  _..-'                    \`-._\\\\
                        \\\\_, \\\\/ ._(
                         \\\\_, \\\\/ ._\\\\
                          \`._,\\\\/ ._\\\\
                            \`._// ./\`-._
                     LGB      \`-._-_-_.-'
                         http://www.ascii-art.de/ascii/t/turtle.txt
      ...
      
    ),
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
    "# failed 1 test\\n",
  ],
  Array [
    "comment",
    "# failed 1 test\\n",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "but": "this",
            "is": "yaml",
          },
          "fullname": "",
          "id": 1,
          "name": "expected yaml, got a sea turtle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
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

exports[`test/parser.js TAP yamlish-that-is-not-yaml.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP Version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "not ok 1 - expected yaml, got a sea turtle\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  this is not yaml\\n",
  ],
  Array [
    "line",
    "  \\"In fact, it\\": : : :%%% <@!<\\n",
  ],
  Array [
    "line",
    "  is not \\n",
  ],
  Array [
    "line",
    "                anything\\n",
  ],
  Array [
    "line",
    "      but a peaceful\\n",
  ],
  Array [
    "line",
    "        Sea Turtle\\n",
  ],
  Array [
    "line",
    "                      _,.---.---.---.--.._ \\n",
  ],
  Array [
    "line",
    "                  _.-' \`--.\`---.\`---'-. _,\`--.._\\n",
  ],
  Array [
    "line",
    "                 /\`--._ .'.     \`.     \`,\`-.\`-._\\\\\\n",
  ],
  Array [
    "line",
    "                ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/\\n",
  ],
  Array [
    "line",
    "           _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.\\n",
  ],
  Array [
    "line",
    "        ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.\\n",
  ],
  Array [
    "line",
    "       (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\\\n",
  ],
  Array [
    "line",
    "        \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\\\n",
  ],
  Array [
    "line",
    "                  /_, ,  _..-'                    \`-._\\\\\\n",
  ],
  Array [
    "line",
    "                  \\\\_, \\\\/ ._(\\n",
  ],
  Array [
    "line",
    "                   \\\\_, \\\\/ ._\\\\\\n",
  ],
  Array [
    "line",
    "                    \`._,\\\\/ ._\\\\\\n",
  ],
  Array [
    "line",
    "                      \`._// ./\`-._\\n",
  ],
  Array [
    "line",
    "               LGB      \`-._-_-_.-'\\n",
  ],
  Array [
    "line",
    "                   http://www.ascii-art.de/ascii/t/turtle.txt\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "line",
    "  ---\\n",
  ],
  Array [
    "line",
    "  but: this\\n",
  ],
  Array [
    "line",
    "  is: yaml\\n",
  ],
  Array [
    "line",
    "  ...\\n",
  ],
  Array [
    "assert",
    Result {
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
    },
  ],
  Array [
    "result",
    Result {
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
    },
  ],
  Array [
    "fail",
    Result {
      "diag": Object {
        "but": "this",
        "is": "yaml",
      },
      "fullname": "",
      "id": 1,
      "name": "expected yaml, got a sea turtle",
      "ok": false,
    },
  ],
  Array [
    "extra",
    String(
      ---
        this is not yaml
        "In fact, it": : : :%%% <@!<
        is not 
                      anything
            but a peaceful
              Sea Turtle
                            _,.---.---.---.--.._ 
                        _.-' \`--.\`---.\`---'-. _,\`--.._
                       /\`--._ .'.     \`.     \`,\`-.\`-._\\\\
                      ||   \\\\  \`.\`---.__\`__..-\`. ,'\`-._/
                 _  ,\`\\\\ \`-._\\\\   \\\\    \`.    \`_.-\`-._,\`\`-.
              ,\`   \`-_ \\\\/ \`-.\`--.\\\\    _\\\\_.-'\\\\__.-\`-.\`-._\`.
             (_.o> ,--. \`._/'--.-\`,--\`  \\\\_.-'       \\\\\`-._ \\\\
              \`---'    \`._ \`---._/__,----\`           \`-. \`-\\\\
                        /_, ,  _..-'                    \`-._\\\\
                        \\\\_, \\\\/ ._(
                         \\\\_, \\\\/ ._\\\\
                          \`._,\\\\/ ._\\\\
                            \`._// ./\`-._
                     LGB      \`-._-_-_.-'
                         http://www.ascii-art.de/ascii/t/turtle.txt
      ...
      
    ),
  ],
  Array [
    "line",
    "Bail out! expected yaml, got a sea turtle\\n",
  ],
  Array [
    "bailout",
    "expected yaml, got a sea turtle",
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": "expected yaml, got a sea turtle",
      "count": 1,
      "fail": 1,
      "failures": Array [
        Result {
          "diag": Object {
            "but": "this",
            "is": "yaml",
          },
          "fullname": "",
          "id": 1,
          "name": "expected yaml, got a sea turtle",
          "ok": false,
        },
      ],
      "ok": false,
      "pass": 0,
      "plan": FinalPlan {
        "comment": "",
        "end": null,
        "skipAll": false,
        "skipReason": "",
        "start": null,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`
