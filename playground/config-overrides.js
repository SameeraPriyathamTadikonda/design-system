const path = require('path')
const { override, fixBabelImports, babelInclude, addLessLoader, addWebpackAlias, removeModuleScopePlugin, babelExclude } = require('customize-cra')
const themeVariables = require('marklogic-ui-library/src/theme-variables.json')

module.exports = override(
  fixBabelImports('import', [
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
    {
      libraryName: 'marklogic-ui-library',
      libraryDirectory: 'src',
    },
  ]),
  addLessLoader({
    javascriptEnabled: true,
    paths: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../src'),
    ],
    modifyVars: themeVariables,
  }),
  removeModuleScopePlugin(),
  addWebpackAlias({
    antd: path.resolve(__dirname, 'node_modules/antd'),
  }),
  babelInclude([
    path.resolve(__dirname, 'src'),
    path.resolve(__dirname, '../src'),
    path.resolve(__dirname, '../stories'),
    path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, 'node_modules/marklogic-ui-library'),
    // path.resolve('../src'),
  ]),
  babelExclude([
    path.resolve('node_modules/marklogic-ui-library/node_modules'),
  ]),
)
// Refer to theme vars below
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
