module.exports = {
  presets: ["next/babel"],
  ...(process.env.CYPRESS_CT
    ? { plugins: ["@babel/plugin-transform-modules-commonjs"] }
    : {}),
};
