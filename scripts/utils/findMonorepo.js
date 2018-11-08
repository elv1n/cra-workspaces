const fs = require('fs');
const path = require('path');
const findPkg = require('find-pkg');
const { findPkgs, findMonorepoPrivate } = require('./helpers');

const findMonorepo = appDir => {
	const mainPkg = findMonorepoPrivate(appDir);
	const monoPkgPath = findPkg.sync(mainPkg);
	const monoPkg = monoPkgPath && require(monoPkgPath);
	const workspaces = monoPkg && monoPkg.workspaces;
	const patterns = (workspaces && workspaces.packages) || workspaces;
	const allPkgs = patterns && findPkgs(path.dirname(monoPkgPath), patterns);
	return allPkgs ? allPkgs.filter(f => fs.realpathSync(f) !== appDir) : [];
};

module.exports = findMonorepo;
