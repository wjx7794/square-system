module.exports = {
  extends: require.resolve('@umijs/max/eslint'),
  /**
   * 开启 hook 依赖提示，参考:
   * [https://www.npmjs.com/package/eslint-plugin-react-hooks]
   * [https://github.com/umijs/umi/issues/3200]
   */
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
