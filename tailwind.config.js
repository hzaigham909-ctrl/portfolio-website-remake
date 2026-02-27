/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // more common & readable than["class"]

    content: [
        './src/**/*.{js,jsx,ts,tsx}', // ← consolidated & most common pattern
        './app/**/*.{js,jsx,ts,tsx}', // keep if using Next.js App Router
        './pages/**/*.{js,jsx,ts,tsx}', // keep if still using Pages Router
        './components/**/*.{js,jsx,ts,tsx}',
    ],

    // prefix: "",                   // ← default value → can be safely removed

    theme: {
        container: {
            center: true,
            padding: '1rem', // ← 15px → 1rem (more semantic & consistent)
        },

        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px', // non-standard – most use 1024px or 992px
            xl: '1200px',
        },

        fontFamily: {
            primary: 'var(--font-jetbrainsMono)',
            // Consider adding fallbacks:
            // primary: ['var(--font-jetbrainsMono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        },

        extend: {
            colors: {
                primary: '#1c1c22',

                accent: {
                    DEFAULT: '#ff6000', // ← fixed typo (DEAFULT → DEFAULT)
                    hover: '#ff5000',
                },

                // Bonus: consider semantic naming
                // background: '#0f0f11',
                // surface:    '#1c1c22',
                // brand:      '#ff6000',
            },

            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },

            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },

    plugins: [
        require('tailwindcss-animate'),
        // Add more plugins here when needed, e.g.:
        // require('@tailwindcss/typography'),
        // require('@tailwindcss/forms'),
    ],
}