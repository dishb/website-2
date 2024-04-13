/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'r': ['Roboto', 'sans-serif'],
                'rmono': ['Roboto Mono', 'monospaced']
            },
            colors: {
                'bg': '#FFFFFF',
                'text': '#000000',
                'accent': '#000000',
                'hover': '#000000',
                
                'darkbg': '#000000',
                'darktext': '#FFFFFF',
                'darkaccent': '#FFFFFF',
                'darkhover': '#FFFFFF'
            }
        }
    },
    plugins: []
};
