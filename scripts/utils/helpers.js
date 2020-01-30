const fs = require('fs');
const path = require('path');
const findRoot = require('find-root');
const globby = require('globby');

const findMonorepoPrivate = appDir => {
	try {
		return findRoot(appDir, dir => {
			const pkg = path.join(dir, 'package.json');
			const monoPkgPath = fs.existsSync(pkg);
			const monoPkg = monoPkgPath && require(pkg);
			return monoPkg.private;
		});
	} catch (e) {
		throw new Error(
			`package.json with "private" variable not found in path`
		);
	}
};
const findPkgs = (rootPath, globPatterns) => {
	if (!globPatterns) {
		return [];
	}
	const globOpts = {
		cwd: rootPath,
		strict: true,
		absolute: true
	};
	return globPatterns
		.reduce(
			(pkgs, pattern) =>
				pkgs.concat(
					globby.sync(path.join(pattern, 'package.json'), globOpts)
				),
			[]
		)
		.map(f => path.dirname(path.normalize(f)));
};

module.exports = {
  findMonorepoPrivate,
	findPkgs
};
