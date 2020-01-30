const {
  edit,
  getPaths,
} = require('@rescripts/utilities');
const findMonorepo = require('./findMonorepo');

const root = process.cwd();

const isLoader = name => inQuestion => inQuestion && inQuestion.loader && inQuestion.loader.includes(name);

const mainConfig = (config) => {
  const monorepo = findMonorepo(root);
  const babelLoaderPaths = getPaths(isLoader('babel-loader'), config);

  return edit(
    matchedSection => {
      const { include } = matchedSection;
      if (include && include.includes('src')) {
        matchedSection.include = [
          matchedSection.include,
          ...monorepo,
        ];
      }
      return matchedSection
    },
    babelLoaderPaths,
   config,
  )
};

module.exports = mainConfig;

