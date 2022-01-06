const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
                serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
            },
            backgroundImage: {
                dataImg: "url(${'data.img'})"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
};