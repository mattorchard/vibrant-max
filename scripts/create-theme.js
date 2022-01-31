const fs = require("fs");
const path = require("path");

writeTheme("vibrant-max", {
  name: "Vibrant Max",
  type: "dark",
  semanticHighlighting: true,
  semanticTokenColors: require("./components/semantic-token-colors.js"),
  colors: require("./components/colors"),
  tokenColors: require("./components/token-colors"),
});

function writeTheme(name, data) {
  fs.writeFileSync(
    path.resolve(__dirname, "..", "themes", `${name}.json`),
    JSON.stringify(data)
  );
}
