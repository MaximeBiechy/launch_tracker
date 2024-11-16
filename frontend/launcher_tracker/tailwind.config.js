/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{vue,js,ts,jsx,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dark: '#151515',
                dark_card: '#222',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
