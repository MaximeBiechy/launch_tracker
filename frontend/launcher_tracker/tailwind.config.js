/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                krona: ['Krona One', 'sans-serif'],
                gowun: ['Gowun Batang', 'sans-serif'],
            },
            colors: {
                dark: '#151515',
                dark_card: '#222',
            },
            animation: {
                spin: 'spin 1s linear infinite',
            },
            keyframes: {
                spin: {
                    from: {transform: 'rotate(0deg)'},
                    to: {transform: 'rotate(360deg)'},
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
