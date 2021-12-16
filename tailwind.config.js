const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
                serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
};