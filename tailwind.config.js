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

                upDown: {
                    '0%, 100%': { transform: 'translateY(3px)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
            },
            animation: {
                fadeInUp: 'fadeInUp 1s forwards',
                fadeOutDown: 'fadeOutDown 1s forwards',
                buttonInUp: 'buttonInUp 1s forwards',
                buttonOutDown: 'buttonOutDown 1s forwards',
                upDown: 'upDown 2s ease-in-out infinite',
            },
            boxShadow: {
                glow: '0 0 10px rgba(255, 255, 255, 0.8)',
                glowBrighter: '0 0 20px rgba(255, 255, 255, 1)',
              },
        },
    },

    plugins: [forms],
};