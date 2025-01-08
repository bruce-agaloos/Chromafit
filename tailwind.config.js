import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                londrina: ['Londrina Solid', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(40px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeOutDown: {
                    '0%': { opacity: 1, transform: 'translateY(0)' },
                    '100%': { opacity: 0, transform: 'translateY(60px)' },
                },

                buttonInUp: {
                    '0%': { opacity: 0, transform: 'translateY(60px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                buttonOutDown: {
                    '0%': { opacity: 1, transform: 'translateY(0)' },
                    '100%': { opacity: 0, transform: 'translateY(70px)' },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 1s forwards',
                fadeOutDown: 'fadeOutDown 1s forwards',
                buttonInUp: 'buttonInUp 1s forwards',
                buttonOutDown: 'buttonOutDown 1s forwards',
            },
        },
    },

    plugins: [forms],
};