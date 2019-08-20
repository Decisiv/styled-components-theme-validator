import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import url from 'rollup-plugin-url';

import pkg from './package.json';

const output = {
  exports: 'named',
  sourcemap: true,
};

export default {
  input: 'src/index.js',
  output: [
    {
      ...output,
      file: pkg.main,
      format: 'cjs',
    },
    {
      ...output,
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    external(),
    url(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
      externalHelpers: true,
      presets: [['env', { modules: false, targets: { ie: 10 } }], 'stage-0'],
    }),
    resolve(),
    commonjs(),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    process.env.NODE_ENV === 'production' && terser(),
  ],
};
