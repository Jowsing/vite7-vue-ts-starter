export default {
  '*.{js,ts,vue}': ['eslint --quiet --fix', 'prettier --write'],
  '*.{css,vue}': ['stylelint --quiet --fix'],
}
