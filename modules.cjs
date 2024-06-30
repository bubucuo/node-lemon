const path = require("node:path");

path.basename("/foo/bar/baz/asdf/quux.html");
// Returns: 'quux.html'

path.basename("/foo/bar/baz/asdf/quux.html", ".html");
// Returns: 'quux'
