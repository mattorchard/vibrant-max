const palette = require("../palette");
module.exports = formatTokenColors([
  {
    name: "unison punctuation",
    scope:
      "punctuation.definition.delayed.unison,punctuation.definition.list.begin.unison,punctuation.definition.list.end.unison,punctuation.definition.ability.begin.unison,punctuation.definition.ability.end.unison,punctuation.operator.assignment.as.unison,punctuation.separator.pipe.unison,punctuation.separator.delimiter.unison,punctuation.definition.hash.unison",
    settings: palette.red[400],
  },
  {
    name: "haskell variable generic-type",
    scope: "variable.other.generic-type.haskell",
    settings: palette.purple[300],
  },
  {
    name: "haskell storage type",
    scope: "storage.type.haskell",
    settings: palette.yellow[500],
  },
  {
    name: "support.variable.magic.python",
    scope: "support.variable.magic.python",
    settings: palette.red[400],
  },
  {
    name: "punctuation.separator.parameters.python",
    scope:
      "punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python",
    settings: palette.gray[400],
  },
  {
    name: "variable.parameter.function.language.special.self.python",
    scope: "variable.parameter.function.language.special.self.python",
    settings: palette.yellow[200],
  },
  {
    name: "variable.parameter.function.language.special.cls.python",
    scope: "variable.parameter.function.language.special.cls.python",
    settings: palette.yellow[200],
  },
  {
    name: "storage.modifier.lifetime.rust",
    scope: "storage.modifier.lifetime.rust",
    settings: palette.gray[400],
  },
  {
    name: "support.function.std.rust",
    scope: "support.function.std.rust",
    settings: palette.blue[300],
  },
  {
    name: "entity.name.lifetime.rust",
    scope: "entity.name.lifetime.rust",
    settings: palette.yellow[200],
  },
  {
    name: "variable.language.rust",
    scope: "variable.language.rust",
    settings: palette.red[400],
  },
  {
    name: "support.constant.edge",
    scope: "support.constant.edge",
    settings: palette.purple[300],
  },
  {
    name: "regexp constant character-class",
    scope: "constant.other.character-class.regexp",
    settings: palette.red[400],
  },
  {
    name: "keyword.operator",
    scope: ["keyword.operator.word"],
    settings: palette.purple[300],
  },
  {
    name: "regexp operator.quantifier",
    scope: "keyword.operator.quantifier.regexp",
    settings: palette.yellow[500],
  },
  {
    name: "Text",
    scope: "variable.parameter.function",
    settings: palette.gray[400],
  },
  {
    name: "Comment Markup Link",
    scope: "comment markup.link",
    settings: palette.gray[600],
  },
  {
    name: "markup diff",
    scope: "markup.changed.diff",
    settings: palette.yellow[200],
  },
  {
    name: "diff",
    scope:
      "meta.diff.header.from-file,meta.diff.header.to-file,punctuation.definition.from-file.diff,punctuation.definition.to-file.diff",
    settings: palette.blue[300],
  },
  {
    name: "inserted.diff",
    scope: "markup.inserted.diff",
    settings: palette.green[300],
  },
  {
    name: "deleted.diff",
    scope: "markup.deleted.diff",
    settings: palette.red[400],
  },
  {
    name: "c++ function",
    scope: "meta.function.c,meta.function.cpp",
    settings: palette.red[400],
  },
  {
    name: "c++ block",
    scope:
      "punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c",
    settings: palette.gray[400],
  },
  {
    name: "js/ts punctuation separator key-value",
    scope: "punctuation.separator.key-value",
    settings: palette.gray[400],
  },
  {
    name: "js/ts import keyword",
    scope: "keyword.operator.expression.import",
    settings: palette.blue[300],
  },
  {
    name: "math js/ts",
    scope: "support.constant.math",
    settings: palette.yellow[200],
  },
  {
    name: "math property js/ts",
    scope: "support.constant.property.math",
    settings: palette.yellow[500],
  },
  {
    name: "js/ts variable.other.constant",
    scope: "variable.other.constant",
    settings: {
      foreground: palette.red[450],
      fontStyle: "",
    },
  },
  {
    name: "java type",
    scope: ["storage.type.annotation.java", "storage.type.object.array.java"],
    settings: palette.yellow[200],
  },
  {
    name: "java source",
    scope: "source.java",
    settings: palette.red[400],
  },
  {
    name: "java modifier.import",
    scope:
      "punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java",
    settings: palette.gray[400],
  },
  {
    name: "java modifier.import",
    scope: "meta.method.java",
    settings: palette.blue[300],
  },
  {
    name: "java modifier.import",
    scope:
      "storage.modifier.import.java,storage.type.java,storage.type.generic.java",
    settings: palette.yellow[200],
  },
  {
    name: "java instanceof",
    scope: "keyword.operator.instanceof.java",
    settings: palette.purple[300],
  },
  {
    name: "java variable.name",
    scope: "meta.definition.variable.name.java",
    settings: palette.red[400],
  },
  {
    name: "operator channel",
    scope: [
      "keyword.operator.channel",
      "keyword.operator.bitwise",
      "keyword.operator.logical",
    ],
    settings: palette.yellow[300],
  },
  {
    name: "Object Property",
    scope: "variable.other.property",
    settings: palette.pink[500],
  },
  {
    name: "Assignment",
    scope: "keyword.operator.assignment",
    settings: palette.teal[400],
  },
  {
    name: "support.constant.property-value.scss",
    scope:
      "support.constant.property-value.scss,support.constant.property-value.css",
    settings: palette.yellow[500],
  },
  {
    name: "CSS/SCSS/LESS Operators",
    scope: "keyword.operator.css,keyword.operator.scss,keyword.operator.less",
    settings: palette.teal[400],
  },
  {
    name: "css color standard name",
    scope:
      "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
    settings: palette.yellow[500],
  },
  {
    name: "css comma",
    scope: "punctuation.separator.list.comma.css",
    settings: palette.gray[400],
  },
  {
    name: "css attribute-name.id",
    scope: "support.constant.color.w3c-standard-color-name.css",
    settings: palette.yellow[500],
  },
  {
    name: "css property-name",
    scope: "support.type.vendored.property-name.css",
    settings: palette.teal[400],
  },
  {
    name: "js/ts module",
    scope: "support.module.node,support.type.object.module,support.module.node",
    settings: palette.yellow[200],
  },
  {
    name: "entity.name.type.module",
    scope: "entity.name.type.module",
    settings: palette.yellow[200],
  },
  {
    name: "js variable readwrite",
    scope: [
      "variable.other.readwrite",
      "support.variable.property",
      "support.variable.object.process",
      "support.variable.object.node",
    ],
    settings: {
      foreground: palette.red[300],
      fontStyle: "bold",
    },
  },
  {
    name: "Import reset",
    scope: "variable.other.readwrite.alias",
    settings: { fontStyle: "" },
  },
  {
    name: "js/ts json",
    scope: "support.constant.json",
    settings: palette.yellow[500],
  },
  {
    name: "js/ts Keyword",
    scope: [
      "keyword.operator.ternary",
      "storage.type.function.arrow",
      "punctuation.accessor.optional",
    ],
    settings: {
      foreground: palette.yellow[300],
      fontStyle: "",
    },
  },
  {
    name: "js/ts Keyword",
    scope: [
      "keyword.operator.expression.instanceof",
      "keyword.operator.new",
      "keyword.operator.optional",
      "keyword.operator.expression.keyof",
    ],
    settings: palette.purple[300],
  },
  {
    name: "js/ts console",
    scope: "support.type.object.console",
    settings: palette.red[400],
  },
  {
    name: "js/ts support.variable.property.process",
    scope: "support.variable.property.process",
    settings: palette.yellow[500],
  },
  {
    name: "js console function",
    scope: "entity.name.function,support.function.console",
    settings: palette.blue[300],
  },
  {
    name: "keyword.operator.misc.rust",
    scope: "keyword.operator.misc.rust",
    settings: palette.gray[400],
  },
  {
    name: "keyword.operator.sigil.rust",
    scope: "keyword.operator.sigil.rust",
    settings: palette.purple[300],
  },
  {
    name: "operator",
    scope: "keyword.operator.delete",
    settings: palette.purple[300],
  },
  {
    name: "js dom",
    scope: "support.type.object.dom",
    settings: palette.teal[400],
  },
  {
    name: "js dom variable",
    scope: "support.variable.dom,support.variable.property.dom",
    settings: palette.red[400],
  },
  {
    name: "keyword.operator",
    scope:
      "keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment,keyword.operator.relational",
    settings: palette.yellow[300],
  },
  {
    name: "C operator assignment",
    scope:
      "keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp",
    settings: palette.purple[300],
  },
  {
    name: "Punctuation",
    scope: "punctuation.separator.delimiter",
    settings: palette.gray[400],
  },
  {
    name: "Other punctuation .c",
    scope: "punctuation.separator.c,punctuation.separator.cpp",
    settings: palette.purple[300],
  },
  {
    name: "C type posix-reserved",
    scope: "support.type.posix-reserved.c,support.type.posix-reserved.cpp",
    settings: palette.teal[400],
  },
  {
    name: "keyword.operator.sizeof.c",
    scope: "keyword.operator.sizeof.c,keyword.operator.sizeof.cpp",
    settings: palette.purple[300],
  },
  {
    name: "python parameter",
    scope: "variable.parameter.function.language.python",
    settings: palette.yellow[500],
  },
  {
    name: "python type",
    scope: "support.type.python",
    settings: palette.teal[400],
  },
  {
    name: "python logical",
    scope: "keyword.operator.logical.python",
    settings: palette.purple[300],
  },
  {
    name: "pyCs",
    scope: "variable.parameter.function.python",
    settings: palette.yellow[500],
  },
  {
    name: "python block",
    scope:
      "punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python",
    settings: palette.gray[400],
  },
  {
    name: "python function-call.generic",
    scope: "meta.function-call.generic.python",
    settings: palette.blue[300],
  },
  {
    name: "python placeholder reset to normal string",
    scope: "constant.character.format.placeholder.other.python",
    settings: palette.yellow[500],
  },
  {
    name: "Operators",
    scope: "keyword.operator",
    settings: palette.gray[400],
  },
  {
    name: "Compound Assignment Operators",
    scope: "keyword.operator.assignment.compound",
    settings: palette.purple[300],
  },
  {
    name: "Compound Assignment Operators js/ts",
    scope:
      "keyword.operator.assignment.compound.js,keyword.operator.assignment.compound.ts",
    settings: palette.teal[400],
  },
  {
    name: "Keywords",
    scope: "keyword",
    settings: palette.purple[300],
  },
  {
    name: "Namespaces",
    scope: "entity.name.namespace",
    settings: palette.yellow[200],
  },
  {
    name: "Variables",
    scope: "variable",
    settings: palette.red[400],
  },
  {
    name: "Variables",
    scope: "variable.c",
    settings: palette.gray[400],
  },
  {
    name: "Language variables",
    scope: "variable.language",
    settings: palette.yellow[200],
  },
  {
    name: "Java Variables",
    scope: "token.variable.parameter.java",
    settings: palette.gray[400],
  },
  {
    name: "Java Imports",
    scope: "import.storage.java",
    settings: palette.yellow[200],
  },
  {
    name: "Packages",
    scope: "token.package.keyword",
    settings: palette.purple[300],
  },
  {
    name: "Packages",
    scope: "token.package",
    settings: palette.gray[400],
  },
  {
    name: "Functions",
    scope: [
      "entity.name.function",
      "meta.require",
      "support.function.any-method",
      "variable.function",
    ],
    settings: palette.blue[300],
  },
  {
    name: "Classes",
    scope: "entity.name.type.namespace",
    settings: palette.yellow[200],
  },
  {
    name: "Type Parameter",
    scope: "entity.name.type.parameter",
    settings: palette.teal[300],
  },

  {
    name: "Classes",
    scope: "support.class, entity.name.type.class",
    settings: palette.yellow[200],
  },
  {
    name: "Class name",
    scope: "entity.name.class.identifier.namespace.type",
    settings: palette.yellow[200],
  },
  {
    name: "Class name",
    scope: [
      "entity.name.class",
      "variable.other.class.js",
      "variable.other.class.ts",
    ],
    settings: palette.yellow[200],
  },
  {
    name: "Class name php",
    scope: "variable.other.class.php",
    settings: palette.red[400],
  },
  {
    name: "Type Name",
    scope: "entity.name.type",
    settings: palette.teal[200],
  },
  {
    name: "Keyword Control",
    scope: "keyword.control",
    settings: palette.purple[300],
  },
  {
    name: "Keyword Control switch",
    scope: "storage.type",
    settings: {
      foreground: palette.purple[300],
      fontStyle: "underline",
    },
  },

  {
    name: "Keyword Control Flow",
    scope: "keyword.control.flow",
    settings: {
      foreground: palette.purple[400],
      fontStyle: "bold",
    },
  },
  {
    name: "Control Elements",
    scope: "control.elements, keyword.operator.less",
    settings: palette.yellow[500],
  },
  {
    name: "Methods",
    scope: "keyword.other.special-method",
    settings: palette.blue[300],
  },
  {
    name: "Storage",
    scope: "storage",
    settings: palette.purple[300],
  },
  {
    name: "Storage JS TS",
    scope: "token.storage",
    settings: palette.purple[300],
  },
  {
    name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
    scope:
      "keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void",
    settings: palette.purple[300],
  },
  {
    name: "Java Storage",
    scope: "token.storage.type.java",
    settings: palette.yellow[200],
  },
  {
    name: "Support",
    scope: "support.function",
    settings: palette.teal[400],
  },
  {
    name: "Support type",
    scope: "support.type.property-name",
    settings: palette.gray[400],
  },
  {
    name: "Support type",
    scope: "support.constant.property-value",
    settings: palette.gray[400],
  },
  {
    name: "Support type",
    scope: "support.constant.font-name",
    settings: palette.yellow[500],
  },
  {
    name: "Meta tag",
    scope: "meta.tag",
    settings: palette.gray[400],
  },
  {
    name: "Strings",
    scope: "string",
    settings: palette.green[300],
  },
  {
    name: "Constant other symbol",
    scope: "constant.other.symbol",
    settings: palette.teal[400],
  },
  {
    name: "Integers",
    scope: "constant.numeric",
    settings: palette.green[400],
  },
  {
    name: "Big Integers",
    scope: "storage.type.numeric.bigint",
    settings: {
      foreground: palette.orange[300],
      fontStyle: "underline",
    },
  },
  {
    name: "JSON Numbers",
    scope: "constant.numeric.json",
    settings: palette.orange[300],
  },
  {
    name: "Constants",
    scope: "constant",
    settings: palette.yellow[500],
  },
  {
    name: "Special Constants",
    scope: "constant.language",
    settings: { foreground: palette.yellow[400], fontStyle: "bold" },
  },
  {
    name: "Constants",
    scope: "punctuation.definition.constant",
    settings: palette.yellow[500],
  },
  {
    name: "Tags",
    scope: "entity.name.tag",
    settings: palette.red[400],
  },
  {
    name: "Attributes",
    scope: "entity.other.attribute-name",
    settings: palette.yellow[500],
  },
  {
    name: "Attribute IDs",
    scope: "entity.other.attribute-name.id",
    settings: palette.blue[300],
  },
  {
    name: "Attribute class",
    scope: "entity.other.attribute-name.class.css",
    settings: palette.yellow[500],
  },
  {
    name: "Selector",
    scope: "meta.selector",
    settings: palette.purple[300],
  },
  {
    name: "Headings",
    scope: "markup.heading",
    settings: palette.red[400],
  },
  {
    name: "Headings",
    scope: "markup.heading punctuation.definition.heading, entity.name.section",
    settings: palette.blue[300],
  },
  {
    name: "Units",
    scope: "keyword.other.unit",
    settings: palette.red[400],
  },
  {
    name: "Bold",
    scope: "markup.bold,todo.bold",
    settings: palette.yellow[500],
  },
  {
    name: "Bold",
    scope: "punctuation.definition.bold",
    settings: palette.yellow[200],
  },
  {
    name: "markup Italic",
    scope: "markup.italic, punctuation.definition.italic,todo.emphasis",
    settings: palette.purple[300],
  },
  {
    name: "emphasis md",
    scope: "emphasis md",
    settings: palette.purple[300],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown headings",
    scope: "entity.name.section.markdown",
    settings: palette.red[400],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown heading Punctuation Definition",
    scope: "punctuation.definition.heading.markdown",
    settings: palette.red[400],
  },
  {
    name: "punctuation.definition.list.begin.markdown",
    scope: "punctuation.definition.list.begin.markdown",
    settings: palette.yellow[200],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown heading setext",
    scope: "markup.heading.setext",
    settings: palette.gray[400],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Bold",
    scope: "punctuation.definition.bold.markdown",
    settings: palette.yellow[500],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw",
    scope: "markup.inline.raw.markdown",
    settings: palette.green[300],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw",
    scope: "markup.inline.raw.string.markdown",
    settings: palette.green[300],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Inline Raw punctuation",
    scope: "punctuation.definition.raw.markdown",
    settings: palette.yellow[200],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown List Punctuation Definition",
    scope: "punctuation.definition.list.markdown",
    settings: palette.yellow[200],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition String",
    scope: [
      "punctuation.definition.string.begin.markdown",
      "punctuation.definition.string.end.markdown",
      "punctuation.definition.metadata.markdown",
    ],
    settings: palette.red[400],
  },
  {
    name: "beginning.punctuation.definition.list.markdown",
    scope: ["beginning.punctuation.definition.list.markdown"],
    settings: palette.red[400],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Punctuation Definition Link",
    scope: "punctuation.definition.metadata.markdown",
    settings: palette.red[400],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Underline Link/Image",
    scope:
      "markup.underline.link.markdown,markup.underline.link.image.markdown",
    settings: palette.purple[300],
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Link Title/Description",
    scope:
      "string.other.link.title.markdown,string.other.link.description.markdown",
    settings: palette.blue[300],
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc Inline Raw",
    scope: "markup.raw.monospace.asciidoc",
    settings: palette.green[300],
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc Inline Raw Punctuation Definition",
    scope: "punctuation.definition.asciidoc",
    settings: palette.yellow[200],
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc List Punctuation Definition",
    scope: "markup.list.asciidoc",
    settings: palette.yellow[200],
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc underline link",
    scope: "markup.link.asciidoc,markup.other.url.asciidoc",
    settings: palette.purple[300],
  },
  {
    name: "[VSCODE-CUSTOM] Asciidoc link name",
    scope: "string.unquoted.asciidoc,markup.other.url.asciidoc",
    settings: palette.blue[300],
  },
  {
    name: "Regular Expressions",
    scope: "string.regexp",
    settings: palette.teal[400],
  },
  {
    name: "Escape Characters",
    scope: "constant.character.escape",
    settings: palette.teal[400],
  },
  {
    name: "Embedded",
    scope: "punctuation.section.embedded, variable.interpolation",
    settings: palette.red[400],
  },
  {
    name: "Embedded",
    scope:
      "punctuation.section.embedded.begin,punctuation.section.embedded.end",
    settings: palette.purple[300],
  },
  {
    name: "illegal",
    scope: "invalid.illegal",
    settings: palette.white,
  },
  {
    name: "illegal",
    scope: "invalid.illegal.bad-ampersand.html",
    settings: palette.gray[400],
  },
  {
    name: "Broken",
    scope: "invalid.broken",
    settings: palette.white,
  },
  {
    name: "Deprecated",
    scope: "invalid.deprecated",
    settings: palette.white,
  },
  {
    name: "Unimplemented",
    scope: "invalid.unimplemented",
    settings: palette.white,
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json",
    scope: "source.json meta.structure.dictionary.json > string.quoted.json",
    settings: palette.red[400],
  },
  {
    name: "Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String",
    scope:
      "source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string",
    settings: palette.red[400],
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation",
    scope:
      "source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation",
    settings: palette.green[300],
  },
  {
    name: "Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json",
    scope:
      "source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json",
    settings: palette.teal[400],
  },
  {
    name: "[VSCODE-CUSTOM] JSON Property Name",
    scope: "support.type.property-name.json",
    settings: palette.pink[500],
  },
  {
    name: "[VSCODE-CUSTOM] JSON Punctuation for Property Name",
    scope: "support.type.property-name.json punctuation",
    settings: palette.pink[500],
  },
  {
    name: "laravel blade tag",
    scope:
      "text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade",
    settings: palette.purple[300],
  },
  {
    name: "laravel blade @",
    scope:
      "text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade",
    settings: palette.purple[300],
  },
  {
    name: "use statement for other classes",
    scope:
      "support.other.namespace.use.php,support.other.namespace.use-as.php,entity.other.alias.php,meta.interface.php",
    settings: palette.yellow[200],
  },
  {
    name: "error suppression",
    scope: "keyword.operator.error-control.php",
    settings: palette.purple[300],
  },
  {
    name: "php instanceof",
    scope: "keyword.operator.type.php",
    settings: palette.purple[300],
  },
  {
    name: "style double quoted array index normal begin",
    scope: "punctuation.section.array.begin.php",
    settings: palette.gray[400],
  },
  {
    name: "style double quoted array index normal end",
    scope: "punctuation.section.array.end.php",
    settings: palette.gray[400],
  },
  {
    name: "php illegal.non-null-typehinted",
    scope: "invalid.illegal.non-null-typehinted.php",
    settings: palette.red[500],
  },
  {
    name: "php types",
    scope:
      "storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php",
    settings: palette.yellow[200],
  },
  {
    name: "php call-function",
    scope:
      "meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php",
    settings: palette.blue[300],
  },
  {
    name: "php function-resets",
    scope:
      "punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php",
    settings: palette.gray[400],
  },
  {
    name: "support php constants",
    scope: "support.constant.core.rust",
    settings: palette.yellow[500],
  },
  {
    name: "support php constants",
    scope:
      "support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php",
    settings: palette.yellow[500],
  },
  {
    name: "php goto",
    scope: "entity.name.goto-label.php,support.other.php",
    settings: palette.blue[300],
  },
  {
    name: "php logical/bitwise operator",
    scope:
      "keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php",
    settings: palette.teal[400],
  },
  {
    name: "php regexp operator",
    scope: "keyword.operator.regexp.php",
    settings: palette.purple[300],
  },
  {
    name: "php comparison",
    scope: "keyword.operator.comparison.php",
    settings: palette.teal[400],
  },
  {
    name: "php heredoc/nowdoc",
    scope: "keyword.operator.heredoc.php,keyword.operator.nowdoc.php",
    settings: palette.purple[300],
  },
  {
    name: "python function decorator @",
    scope: "meta.function.decorator.python",
    settings: palette.blue[300],
  },
  {
    name: "python function support",
    scope:
      "support.token.decorator.python,meta.function.decorator.identifier.python",
    settings: palette.teal[400],
  },
  {
    name: "parameter function js/ts",
    scope: "function.parameter",
    settings: palette.gray[400],
  },
  {
    name: "brace function",
    scope: "function.brace",
    settings: palette.gray[400],
  },
  {
    name: "parameter function ruby cs",
    scope: "function.parameter.ruby, function.parameter.cs",
    settings: palette.gray[400],
  },
  {
    name: "constant.language.symbol.ruby",
    scope: "constant.language.symbol.ruby",
    settings: palette.teal[400],
  },
  {
    name: "rgb-value",
    scope: "rgb-value",
    settings: palette.teal[400],
  },
  {
    name: "rgb value",
    scope: "inline-color-decoration rgb-value",
    settings: palette.yellow[500],
  },
  {
    name: "rgb value less",
    scope: "less rgb-value",
    settings: palette.yellow[500],
  },
  {
    name: "sass selector",
    scope: "selector.sass",
    settings: palette.red[400],
  },
  {
    name: "ts primitive/builtin types",
    scope:
      "support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx",
    settings: palette.teal[400],
  },
  {
    name: "block scope",
    scope: "block.scope.end,block.scope.begin",
    settings: palette.gray[400],
  },
  {
    name: "cs storage type",
    scope: "storage.type.cs",
    settings: palette.yellow[200],
  },
  {
    name: "cs local variable",
    scope: "entity.name.variable.local.cs",
    settings: palette.red[400],
  },
  {
    scope: "token.info-token",
    settings: palette.blue[300],
  },
  {
    scope: "token.warn-token",
    settings: palette.yellow[500],
  },
  {
    scope: "token.error-token",
    settings: palette.red[500],
  },
  {
    scope: "token.debug-token",
    settings: palette.purple[300],
  },
  {
    name: "String interpolation",
    scope: [
      "punctuation.definition.template-expression.begin",
      "punctuation.definition.template-expression.end",
      "punctuation.section.embedded",
    ],
    settings: palette.purple[300],
  },
  {
    name: "Reset JavaScript string interpolation expression",
    scope: ["meta.template.expression"],
    settings: palette.gray[400],
  },
  {
    name: "Import module JS",
    scope: ["keyword.operator.module"],
    settings: palette.purple[300],
  },
  {
    name: "js Flowtype",
    scope: ["support.type.type.flowtype"],
    settings: palette.blue[300],
  },
  {
    name: "js Flow",
    scope: ["support.type.primitive"],
    settings: palette.yellow[200],
  },
  {
    name: "js class prop",
    scope: ["meta.property.object"],
    settings: palette.red[400],
  },
  {
    name: "js func parameter",
    scope: ["variable.parameter.function.js"],
    settings: palette.red[400],
  },
  {
    name: "js template literals begin",
    scope: ["keyword.other.template.begin"],
    settings: palette.green[300],
  },
  {
    name: "js template literals end",
    scope: ["keyword.other.template.end"],
    settings: palette.green[300],
  },
  {
    name: "js template literals variable braces begin",
    scope: ["keyword.other.substitution.begin"],
    settings: palette.green[300],
  },
  {
    name: "js template literals variable braces end",
    scope: ["keyword.other.substitution.end"],
    settings: palette.green[300],
  },
  {
    name: "js operator.assignment",
    scope: [],
    settings: palette.teal[400],
  },
  {
    name: "go operator",
    scope: ["keyword.operator.assignment.go"],
    settings: palette.yellow[200],
  },
  {
    name: "go operator",
    scope: ["keyword.operator.arithmetic.go", "keyword.operator.address.go"],
    settings: palette.purple[300],
  },
  {
    name: "Go package name",
    scope: ["entity.name.package.go"],
    settings: palette.yellow[200],
  },
  {
    name: "elm prelude",
    scope: ["support.type.prelude.elm"],
    settings: palette.teal[400],
  },
  {
    name: "elm constant",
    scope: ["support.constant.elm"],
    settings: palette.yellow[500],
  },
  {
    name: "template literal",
    scope: ["punctuation.quasi.element"],
    settings: palette.purple[300],
  },
  {
    name: "html/pug (jade) escaped characters and entities",
    scope: ["constant.character.entity"],
    settings: palette.red[400],
  },
  {
    name: "styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour",
    scope: [
      "entity.other.attribute-name.pseudo-element",
      "entity.other.attribute-name.pseudo-class",
    ],
    settings: palette.teal[400],
  },
  {
    name: "Clojure globals",
    scope: ["entity.global.clojure"],
    settings: palette.yellow[200],
  },
  {
    name: "Clojure symbols",
    scope: ["meta.symbol.clojure"],
    settings: palette.red[400],
  },
  {
    name: "Clojure constants",
    scope: ["constant.keyword.clojure"],
    settings: palette.teal[400],
  },
  {
    name: "CoffeeScript Function Argument",
    scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
    settings: palette.red[400],
  },
  {
    name: "Ini Default Text",
    scope: ["source.ini"],
    settings: palette.green[300],
  },
  {
    name: "Makefile prerequisities",
    scope: ["meta.scope.prerequisites.makefile"],
    settings: palette.red[400],
  },
  {
    name: "Makefile text colour",
    scope: ["source.makefile"],
    settings: palette.yellow[200],
  },
  {
    name: "Groovy import names",
    scope: ["storage.modifier.import.groovy"],
    settings: palette.yellow[200],
  },
  {
    name: "Groovy Methods",
    scope: ["meta.method.groovy"],
    settings: palette.blue[300],
  },
  {
    name: "Groovy Variables",
    scope: ["meta.definition.variable.name.groovy"],
    settings: palette.red[400],
  },
  {
    name: "Groovy Inheritance",
    scope: ["meta.definition.class.inherited.classes.groovy"],
    settings: palette.green[300],
  },
  {
    name: "HLSL Semantic",
    scope: ["support.variable.semantic.hlsl"],
    settings: palette.yellow[200],
  },
  {
    name: "HLSL Types",
    scope: [
      "support.type.texture.hlsl",
      "support.type.sampler.hlsl",
      "support.type.object.hlsl",
      "support.type.object.rw.hlsl",
      "support.type.fx.hlsl",
      "support.type.object.hlsl",
    ],
    settings: palette.purple[300],
  },
  {
    name: "SQL Base",
    scope: "source.sql",
    settings: palette.blue[300],
  },
  {
    name: "SQL Keyword",
    scope: "keyword.other.sql",
    settings: {
      fontStyle: "italic bold",
    },
  },
  {
    name: "SQL DML",
    scope: "keyword.other.DML.sql",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "SQL Variables",
    scope: ["text.variable", "text.bracketed"],
    settings: palette.red[400],
  },
  {
    name: "SQL Star",
    scope: "keyword.operator.star.sql",
    settings: {
      foreground: palette.orange[400],
      fontStyle: "underline",
    },
  },
  {
    name: "SQL Operators",
    scope: [
      "keyword.operator.concatenator.sql",
      "keyword.operator.math.sql",
      "keyword.operator.comparison.sql",
    ],
    settings: palette.orange[400],
  },
  {
    name: "SQL Keys",
    scope: ["keyword.other.DDL.create.II.sql", "keyword.other.order.sql"],
    settings: {
      foreground: palette.yellow[400],
      fontStyle: "bold underline",
    },
  },
  {
    name: "SQL Quoted Identifier",
    scope: "string.quoted.double.sql",
    settings: palette.red[500],
  },
  {
    name: "SQL Alias",
    scope: "keyword.other.alias.sql",
    settings: {
      foreground: palette.teal[400],
      fontStyle: "bold underline",
    },
  },

  {
    name: "types",
    scope: ["support.type.swift", "support.type.vb.asp"],
    settings: palette.yellow[200],
  },
  {
    name: "heading 1, keyword",
    scope: ["entity.name.function.xi"],
    settings: palette.yellow[200],
  },
  {
    name: "heading 2, callable",
    scope: ["entity.name.class.xi"],
    settings: palette.teal[400],
  },
  {
    name: "heading 3, property",
    scope: ["constant.character.character-class.regexp.xi"],
    settings: palette.red[400],
  },
  {
    name: "heading 4, type, class, interface",
    scope: ["constant.regexp.xi"],
    settings: palette.purple[300],
  },
  {
    name: "heading 5, enums, preprocessor, constant, decorator",
    scope: ["keyword.control.xi"],
    settings: palette.teal[400],
  },
  {
    name: "heading 6, number",
    scope: ["invalid.xi"],
    settings: palette.gray[400],
  },
  {
    name: "string",
    scope: ["beginning.punctuation.definition.quote.markdown.xi"],
    settings: palette.green[300],
  },
  {
    name: "comments",
    scope: ["beginning.punctuation.definition.list.markdown.xi"],
    settings: palette.gray[500],
  },
  {
    name: "link",
    scope: ["constant.character.xi"],
    settings: palette.blue[300],
  },
  {
    name: "accent",
    scope: ["accent.xi"],
    settings: palette.blue[300],
  },
  {
    name: "wikiword",
    scope: ["wikiword.xi"],
    settings: palette.yellow[500],
  },
  {
    name: "language operators like '+', '-' etc",
    scope: ["constant.other.color.rgb-value.xi"],
    settings: palette.white,
  },
  {
    name: "elements to dim",
    scope: ["punctuation.definition.tag.xi"],
    settings: palette.gray[600],
  },
  {
    name: "C++/C#",
    scope: [
      "entity.name.label.cs",
      "entity.name.scope-resolution.function.call",
      "entity.name.scope-resolution.function.definition",
    ],
    settings: palette.yellow[200],
  },
  {
    name: "Markdown underscore-style headers",
    scope: [
      "entity.name.label.cs",
      "markup.heading.setext.1.markdown",
      "markup.heading.setext.2.markdown",
    ],
    settings: palette.red[400],
  },
  {
    name: "meta.brace.square",
    scope: [" meta.brace.square"],
    settings: palette.gray[400],
  },
  {
    name: "Comments",
    scope: "comment, punctuation.definition.comment",
    settings: {
      fontStyle: "italic",
      foreground: palette.gray[500],
    },
  },
  {
    name: "[VSCODE-CUSTOM] Markdown Quote",
    scope: "markup.quote.markdown",
    settings: palette.gray[600],
  },
  {
    name: "punctuation.definition.block.sequence.item.yaml",
    scope: "punctuation.definition.block.sequence.item.yaml",
    settings: palette.gray[400],
  },
  {
    scope: [
      "constant.language.symbol.elixir",
      "constant.language.symbol.double-quoted.elixir",
    ],
    settings: palette.teal[400],
  },
  {
    scope: ["entity.name.variable.parameter.cs"],
    settings: palette.yellow[200],
  },
  {
    scope: ["entity.name.variable.field.cs"],
    settings: palette.red[400],
  },
  {
    name: "Deleted",
    scope: "markup.deleted",
    settings: palette.red[400],
  },
  {
    name: "Inserted",
    scope: "markup.inserted",
    settings: palette.green[300],
  },
  {
    name: "Underline",
    scope: "markup.underline",
    settings: {
      fontStyle: "underline",
    },
  },
  {
    name: "punctuation.section.embedded.begin.php",
    scope: [
      "punctuation.section.embedded.begin.php",
      "punctuation.section.embedded.end.php",
    ],
    settings: palette.red[700],
  },
  {
    name: "support.other.namespace.php",
    scope: ["support.other.namespace.php"],
    settings: palette.gray[400],
  },
  {
    name: "variable.other.object",
    scope: ["variable.other.object"],
    settings: palette.yellow[200],
  },
  {
    name: "variable.other.constant.property",
    scope: ["variable.other.constant.property"],
    settings: palette.red[400],
  },
  {
    name: "entity.other.inherited-class",
    scope: ["entity.other.inherited-class"],
    settings: palette.yellow[200],
  },
  {
    name: "c variable readwrite",
    scope: "variable.other.readwrite.c",
    settings: palette.red[400],
  },
  {
    name: "php scope",
    scope:
      "entity.name.variable.parameter.php,punctuation.separator.colon.php,constant.other.php",
    settings: palette.gray[400],
  },
  {
    name: "Assembly",
    scope: ["constant.numeric.decimal.asm.x86_64"],
    settings: palette.purple[300],
  },
  {
    name: "super",
    scope: "variable.language.super",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "JSX Attribute",
    scope: [
      "entity.other.attribute-name.js",
      "entity.other.attribute-name.ts",
      "entity.other.attribute-name.jsx",
      "entity.other.attribute-name.tsx",
    ],
    settings: {
      fontStyle: "italic",
      foreground: palette.pink[300],
    },
  },
  {
    name: "JSX Tag",
    scope: ["support.class.component.tsx", "support.class.component.jsx"],
    settings: {
      foreground: palette.blue[300],
    },
  },

  {
    name: "JSX Tag",
    scope: ["constant.character.entity.tsx", "constant.character.entity.jsx"],
    settings: {
      fontStyle: "underline",
    },
  },
  {
    name: "Param",
    scope: "variable.parameter",
    settings: {
      foreground: palette.red[400],
      fontStyle: "italic",
    },
  },
  {
    name: "comment",
    scope: "comment.line.double-slash,comment.block.documentation",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "Python Keyword Control",
    scope:
      "keyword.control.import.python,keyword.control.flow.python,keyword.operator.logical.python",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "markup.italic.markdown",
    scope: "markup.italic.markdown",
    settings: {
      fontStyle: "italic",
    },
  },
  {
    name: "[VSCODE-CUSTOM] JS Debugger",
    scope: "keyword.other.debugger.ts",
    settings: {
      foreground: palette.red[600],
      fontStyle: "bold underline",
    },
  },
  {
    scope: "variable.language.this",
    settings: {
      foreground: palette.yellow[300],
      fontStyle: "underline",
    },
  },
]);

function formatTokenColors(tokens) {
  return tokens.map(({ name, scope, settings }) => ({
    name,
    scope,
    settings:
      typeof settings === "string" ? { foreground: settings } : settings,
  }));
}
