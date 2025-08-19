module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-prettier'
  ],
  plugins: ['@stylistic/stylelint-plugin', 'stylelint-prettier'],
  ignoreFiles: ['**/*.js', '**/*.ts'],
  defaultSeverity: 'error',
  rules: {
    'prettier/prettier': true,
    'unit-disallowed-list': ['rem', 'pt'],
    '@stylistic/indentation': null,
    'no-empty-source': null,
    'block-no-empty': null,
    'declaration-block-no-duplicate-custom-properties': null,
    'font-family-no-missing-generic-family-keyword': null,

    'selector-class-pattern':
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$|^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',

    'scss/at-mixin-pattern':
      '^[a-z]([a-z0-9-]+)?(__([a-z0-9]+-?)+)?(__([a-z0-9]+-?)+)?(--([a-z0-9]+-?)+){0,2}$|^Mui.*$|^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
    'scss/double-slash-comment-whitespace-inside': 'always',
    'scss/dollar-variable-pattern': null,

    'declaration-property-value-no-unknown': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'deep']
      }
    ],
    'property-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'blockless-after-same-name-blockless']
      }
    ],
    'custom-property-empty-line-before': [
      'always',
      {
        except: ['after-custom-property', 'first-nested']
      }
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested']
      }
    ],
    'rule-empty-line-before': ['always-multi-line'],

    // 忽视 -webkit-xxxx 等兼容写法
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: ['box-shadow']
      }
    ]
  }
}
