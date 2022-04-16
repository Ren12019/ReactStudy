module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      //'plugin:react/recommended', airbnb�ɂقǐݒ肳��Ă���̂ō폜�\
      'airbnb',
      'airbnb-typescript', //�ǉ�
      'airbnb/hooks', //�ǉ�
      'plugin:@typescript-eslint/recommended', //�^��K�v�Ƃ��Ȃ��v���O�C���̐������[�������ׂėL��
      'plugin:@typescript-eslint/recommended-requiring-type-checking', //�^��K�v�Ƃ���v���O�C���̐������[�������ׂėL��
      'prettier', //�ǉ� ESLint�̏��ɉ����ăt�H�[�}�b�g
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12, //latest����12�ɕύX
      sourceType: 'module',
      tsconfigRootDir: __dirname, //�ǉ� tsconfig.json�����鑊�΃p�X���w��
      project: ['./tsconfig.json'], //�ǉ�  tsconfig.json���w��
    },
    plugins: [
      'react',
      '@typescript-eslint',
      'unused-imports' //�ǉ� �g���Ă��Ȃ�import�������ō폜�p
    ],
    ignorePatterns: ['build'], //�ǉ� .eslintignore�ɑΏۊO�ɂ��Ă��邪�����ƃR���p�C���Ɏ��Ԃ�������
    /*-- ���ȉ��ǉ� --*/
    rules: {
      'no-use-before-define': 'off', //�֐���ϐ�����`�����O�Ɏg���Ă���ƃG���[�ɂȂ�f�t�H���g�̋@�\��off
      '@typescript-eslint/no-use-before-define': ["error"], //typescript����no-use-before-define���g���悤�ɂ���
      'import/prefer-default-export': 'off', //named export���G���[�ɂȂ�̂Ŏg����悤��off
      '@typescript-eslint/no-unused-vars': 'off', //unused-imports���g�����ߍ폜
      'unused-imports/no-unused-imports': 'error', //�s�v��import�̍폜
      'unused-imports/no-unused-vars': [ //unused-imports��no-unused-vars�̃��[�����Ē�`
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
      'react/function-component-definition': [//�A���[�֐��ȊO�󂯕t���Ȃ��ݒ�
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'no-param-reassign': [2, { props: false }], //�p�����[�^�[�̃v���p�e�B�ύX������
      'import/extensions': [ //import�̂Ƃ��Ɉȉ��̊g���q���L�q���Ȃ��Ă��G���[�ɂ��Ȃ�
        'error',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'react/jsx-filename-extension': [ //jsx�`���̃t�@�C���g���q��jsx��������tsx�Ɍ���
        'error',
        {
          extensions: ['.jsx', '.tsx'],
        },
      ],
      'react/react-in-jsx-scope': 'off', //import React from 'react'�������Ă��G���[�𖳂���
      'react/prop-types': 'off', //TypeScript�Ń`�F�b�N���Ă��邩��s�v�Boff�ɂ���
      'no-void': [ //void���Z�q�̋���
        'error',
        {
          allowAsStatement: true, 
        },
      ],
    },
    settings: {
      'import/resolver': { //import����t�@�C����js�����ł͂Ȃ��Ats���܂ރt�@�C����������
        node: {
          paths: ['src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    /*-- ���ǉ������܂� --*/
  };