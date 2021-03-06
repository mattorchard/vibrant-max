const palette = require("../palette");
module.exports = {
  "activityBar.background": palette.gray[1000],
  "activityBar.foreground": palette.gray[200],
  "activityBarBadge.background": palette.blue[600],
  "activityBarBadge.foreground": palette.blue[50],
  "badge.background": palette.gray[800],
  "button.background": palette.gray[600],
  "button.secondaryBackground": palette.gray[700],
  "button.secondaryForeground": palette.gray[100],
  "checkbox.border": palette.gray[600],
  "debugToolBar.background": palette.gray[1000],
  descriptionForeground: palette.gray[400],
  "diffEditor.insertedTextBackground": palette.alpha(palette.green[700], "30"),
  "diffEditor.diagonalFill": palette.gray[700],
  "dropdown.background": palette.gray[1000],
  "dropdown.border": palette.gray[1000],
  "editor.background": palette.gray[900],
  "editor.findMatchBackground": palette.alpha(palette.cyan[500], "50"),
  "editor.findMatchBorder": palette.cyan[500],
  "editor.findMatchHighlightBackground": palette.alpha(palette.cyan[500], "50"),
  "editor.foreground": palette.gray[400],
  "editorBracketHighlight.foreground1": palette.pink[500],
  "editorBracketHighlight.foreground2": palette.blue[500],
  "editorBracketHighlight.foreground3": palette.orange[500],
  "editorBracketHighlight.foreground4": palette.cyan[500],
  "editorBracketHighlight.foreground5": palette.yellow[500],
  "editorBracketHighlight.foreground6": palette.purple[500],
  "editorBracketHighlight.unexpectedBracket.foreground": palette.red[500],
  "editorHoverWidget.highlightForeground": palette.blue[300],
  "editorInlayHint.foreground": palette.gray[400],
  "editorInlayHint.background": palette.gray[700],
  "editor.lineHighlightBackground": palette.alpha(palette.purple[900], "80"),
  "editorLineNumber.activeForeground": palette.gray[400],
  "editorGutter.addedBackground": palette.green[500],
  "editorGutter.deletedBackground": palette.red[700],
  "editorGutter.modifiedBackground": palette.blue[400],
  "editorGutter.background": palette.gray[1000],
  "editorOverviewRuler.addedBackground": palette.green[500],
  "editorOverviewRuler.deletedBackground": palette.red[700],
  "editorOverviewRuler.modifiedBackground": palette.blue[400],
  "editorOverviewRuler.findMatchForeground": palette.cyan[500],
  "editor.selectionBackground": palette.alpha(palette.purple[500], "50"),
  "editor.selectionHighlightBackground": palette.transparent,
  "editor.selectionHighlightBorder": palette.gray[400],
  "editor.wordHighlightBackground": palette.transparent,
  "editor.wordHighlightBorder": palette.purple[300],
  "editor.wordHighlightStrongBackground": palette.transparent,
  "editor.wordHighlightStrongBorder": palette.purple[300],
  "editorActiveLineNumber.foreground": palette.gray[600],
  "editorBracketMatch.background": palette.alpha(palette.purple[500], "80"),
  "editorBracketMatch.border": palette.purple[500],
  "editorCursor.background": palette.alpha(palette.white[100], "10"),
  "editorCursor.foreground": palette.pink[400],
  "editorError.foreground": palette.red[500],
  "editorError.background": palette.alpha(palette.red[800], "80"),
  "editorGroup.background": palette.gray[1000],
  "editorGroup.border": palette.gray[1000],
  "breadcrumb.background": palette.gray[1000],
  "editorGroupHeader.tabsBackground": palette.gray[1000],
  "editorHoverWidget.background": palette.gray[900],
  "editorHoverWidget.border": palette.gray[900],
  "editorIndentGuide.activeBackground": palette.purple[600],
  "editorIndentGuide.background": palette.gray[600],
  "editorLineNumber.foreground": palette.gray[600],
  "editorMarkerNavigation.background": palette.gray[900],
  "editorRuler.foreground": palette.gray[700],
  "editorSuggestWidget.background": palette.gray[900],
  "editorSuggestWidget.border": palette.gray[900],
  "editorSuggestWidget.selectedBackground": palette.purple[600],
  "editorWarning.foreground": palette.yellow[600],
  "editorWhitespace.foreground": palette.gray[700],
  "editorWidget.background": palette.gray[900],
  focusBorder: palette.gray[600],
  "gitDecoration.ignoredResourceForeground": palette.gray[400],
  "input.background": palette.gray[800],
  "list.activeSelectionBackground": palette.gray[700],
  "list.activeSelectionForeground": palette.gray[200],
  "list.focusBackground": palette.gray[700],
  "list.focusForeground": palette.gray[200],
  "list.highlightForeground": palette.gray[200],
  "list.hoverBackground": palette.gray[700],
  "list.hoverForeground": palette.white,
  "list.inactiveSelectionBackground": palette.gray[900],
  "list.inactiveSelectionForeground": palette.gray[200],
  "list.warningForeground": palette.yellow[400],
  "menu.foreground": palette.gray[400],
  "menu.separatorBackground": palette.gray[700],
  "minimapGutter.addedBackground": palette.green[500],
  "minimapGutter.deletedBackground": palette.red[700],
  "minimapGutter.modifiedBackground": palette.blue[400],
  "minimap.findMatchHighlight": palette.cyan[700],
  "minimap.selectionHighlight": palette.alpha(palette.purple[500], "50"),
  "panel.border": palette.gray[600],
  "panelSectionHeader.background": palette.gray[900],
  "peekViewEditor.background": palette.gray[800],
  "peekViewEditor.matchHighlightBackground": palette.alpha(
    palette.cyan[900],
    "40"
  ),
  "peekViewResult.background": palette.gray[1000],
  "scrollbar.shadow": palette.gray[1000],
  "scrollbarSlider.activeBackground": palette.alpha(palette.gray[500], "80"),
  "scrollbarSlider.background": palette.alpha(palette.gray[500], "40"),
  "scrollbarSlider.hoverBackground": palette.alpha(palette.gray[500], "60"),
  "settings.focusedRowBackground": palette.gray[800],
  "settings.headerForeground": palette.white,
  "sideBar.background": palette.gray[1000],
  "sideBar.foreground": palette.gray[400],
  "sideBarSectionHeader.background": palette.gray[800],
  "sideBarSectionHeader.foreground": palette.gray[400],
  "statusBar.background": palette.gray[1000],
  "statusBar.debuggingBackground": palette.orange[500],
  "statusBar.debuggingBorder": palette.orange[500],
  "statusBar.debuggingForeground": palette.white,
  "statusBar.foreground": palette.gray[400],
  "statusBar.noFolderBackground": palette.gray[900],
  "statusBarItem.hoverBackground": palette.gray[700],
  "statusBarItem.remoteBackground": palette.blue[600],
  "statusBarItem.remoteForeground": palette.blue[50],
  "tab.activeBackground": palette.gray[900],
  "tab.activeForeground": palette.gray[200],
  "tab.border": palette.gray[1000],
  "tab.hoverBackground": palette.gray[700],
  "tab.inactiveBackground": palette.gray[1000],
  "tab.unfocusedHoverBackground": palette.gray[700],
  "terminal.ansiBlack": palette.black,
  "terminal.ansiBlue": palette.blue[400],
  "terminal.ansiBrightBlack": palette.gray[600],
  "terminal.ansiBrightBlue": palette.blue[300],
  "terminal.ansiBrightCyan": palette.cyan[300],
  "terminal.ansiBrightGreen": palette.green[300],
  "terminal.ansiBrightMagenta": palette.purple[300],
  "terminal.ansiBrightRed": palette.red[300],
  "terminal.ansiBrightWhite": palette.gray[200],
  "terminal.ansiBrightYellow": palette.yellow[300],
  "terminal.ansiCyan": palette.cyan[400],
  "terminal.ansiGreen": palette.green[400],
  "terminal.ansiMagenta": palette.purple[400],
  "terminal.ansiRed": palette.red[400],
  "terminal.ansiWhite": palette.gray[50],
  "terminal.ansiYellow": palette.yellow[400],
  "terminal.background": palette.gray[900],
  "terminal.border": palette.gray[600],
  "terminal.foreground": palette.gray[400],
  "terminal.selectionBackground": palette.alpha(palette.purple[500], "50"),
  "textLink.foreground": palette.blue[300],
  "titleBar.activeBackground": palette.gray[900],
  "titleBar.activeForeground": palette.gray[200],
  "titleBar.inactiveBackground": palette.gray[900],
  "titleBar.inactiveForeground": palette.gray[500],
  "welcomePage.buttonHoverBackground": palette.gray[600],
  "quickInput.background": palette.gray[1000],
};
