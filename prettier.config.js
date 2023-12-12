/** @type {import("prettier").Config} */
const config = {
    trailingComma: "es5",
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    bracketSameLine: true,
    endOfLine: "auto",
    plugins: ["prettier-plugin-tailwindcss"],
}

module.exports = config
