const presets = [
    ["minify"],
    [
        "@babel/env",
        {
            targets: {
                edge: "15",
                firefox: "50",
                chrome: "50",
                safari: "8",
                ie: "10"
            },
            useBuiltIns: "entry",
            modules: "commonjs",
            loose: true
        },
    ],
];

const plugins = [
    ["@babel/plugin-proposal-class-properties"]
]


module.exports = {
    presets,
    plugins
};