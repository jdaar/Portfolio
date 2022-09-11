module.exports = {
  extends: ["standard-with-typescript", "plugin:prettier/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["**/react-app-env.d.ts", "**/node_modules/*", "**/build/*"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": 1,
  },
};
