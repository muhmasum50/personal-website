module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '16px',
                lg: '200px',
                xl: '200px'
            }
        },
        extend: {
            colors: {
                primary: '#243c5a',
                secondary: '#64748b',
                dark: '#171923',
                semidark: '#2d3748'
            },
            screens: {
                '2x': '1320px',
            }
        },
    },
    plugins: [require("daisyui")],
}