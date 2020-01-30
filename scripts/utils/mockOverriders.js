const path = require('path');
const mock = require('mock-require');
const root = process.cwd();

mock(path.join(root, '.rescriptsrc'), './override');
