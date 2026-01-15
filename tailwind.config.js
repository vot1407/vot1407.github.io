// tailwind.config.js
export const content = [
    './**/*.razor',
    './**/*.html',
    './**/*.cshtml',
    './**/*.js',
];
export const safelist = [
    'w-full',
    'h-full',
    'flex',
    'items-center',
    'justify-center',
    'max-w-md',
    '!max-w-screen !max-h-screen',
    'transition-all duration-500 ease-in-out',
]
export const theme = {
    extend: {},
};
export const plugins = [];
