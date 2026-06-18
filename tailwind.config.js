import { transform } from 'next/dist/build/swc'

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],

    plugins: [require('@tailwindcss/forms')],
}
