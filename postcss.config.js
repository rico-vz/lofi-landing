module.exports = {
    plugins: [
        require("postcss-obfuscator")({
            enable: true,
            length: 5,
            classMethod: "simple",
            extensions: [".js", ".html", ".vue"],
        }),
    ],
};