const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // ���[�h�l�� production �ɐݒ肷��ƍœK�����ꂽ��ԂŁA
    // development �ɐݒ肷��ƃ\�[�X�}�b�v�L����JS�t�@�C�����o�͂����
    mode: "development",

    // ���C���ƂȂ�JavaScript�t�@�C���i�G���g���[�|�C���g�j
    entry: "./src/index.tsx",
    // �t�@�C���̏o�͐ݒ�
    output: {
      //  �o�̓t�@�C���̃f�B���N�g����
      path: `${__dirname}/dist`,
      // �o�̓t�@�C����
      filename: "main.js"
    },
    module: {
      rules: [
        {
          // �g���q .ts �������� .tsx �̏ꍇ
          test: /\.tsx?$/,
          // TypeScript ���R���p�C������
          use: "ts-loader"
        }
      ]
    },
    // import ���� .ts �� .tsx �t�@�C�����������邽��
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"]
    },
    // ES5(IE11��)�����̎w��iwebpack 5�ȏ�ŕK�v�j
    target: ["web", "es5"],
    // plugin�̐ݒ�@html�̐ݒ�
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
    ],
    // webpack dev server�̐ݒ�
    devServer: {
        open: true,
    },
  };