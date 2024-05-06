const serve = require("rollup-plugin-serve");

module.exports = {
  input: "src/JS/render.js",
  output: {
    file: "build/bundle.js",
    format: "cjs",
    inlineDynamicImports: true,
  },
  plugins: [
    serve({
      contentBase: ["dist"],
    }),
  ],
};
