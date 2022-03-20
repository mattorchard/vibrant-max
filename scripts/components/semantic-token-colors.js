const palette = require("../palette");
module.exports = {
  enumMember: {
    foreground: palette.teal[400],
  },
  "method.defaultLibrary": {
    foreground: palette.blue[400],
    fontStyle: "italic",
  },
  "variable.defaultLibrary": {
    foreground: palette.purple[400],
    fontStyle: "",
  },
  "class.defaultLibrary": {
    foreground: palette.yellow[400],
  },
  "variable:dart": {
    foreground: palette.yellow[500],
  },
  "property:dart": {
    foreground: palette.yellow[500],
  },
  "annotation:dart": {
    foreground: palette.yellow[500],
  },
  "parameter.label:dart": {
    foreground: palette.gray[400],
  },
  macro: {
    foreground: palette.yellow[500],
  },
};
