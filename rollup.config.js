import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs"; // cjs => esm
import { nodeResolve } from "@rollup/plugin-node-resolve";

const extensions = [".js", ".jsx"];

export default {
  input: ["./src/index.js"],
  output: {
    file: "./lib/index.js",
    format: "esm",
    name: "experience",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      preferBuiltins: true,
    }),
    commonjs({
      include: "node_modules/**",
    }),
    babel({
      exclude: "node_modules/**",
      extensions,
      babelHelpers: "runtime",
    }),
  ],
  sourceMap: true,
  // external: ["react", "antd"],
};
