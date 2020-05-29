import { pikaResolver } from '@vinicius73/rollup-plugin-pika-resolver'
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel';
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'public/index.js',
    format: 'esm'
  },
  plugins: [
    scss({
      outputStyle: isProduction ? 'compressed' : 'expanded'
    }),
    json(),
    babel(),
    commonjs(),
    vue(),
    pikaResolver({
      modules: [
        'lodash-es',
        'vue'
      ]
    }),
    isProduction && terser()
  ]
}