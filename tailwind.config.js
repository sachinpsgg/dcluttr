export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensures Tailwind scans JSX files
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
};
