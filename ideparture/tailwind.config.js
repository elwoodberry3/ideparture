/** 
 * iDeparture
 * @type {import('tailwindcss').Config} 
**/

module.exports = {
  content: [
    './src/**/*.{html,ts}', // Ensure Tailwind applies to your Angular templates and components
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],  // Add Futura as a font family
        roboto: ['Roboto', 'sans-serif'],  // Add Roboto as a font family
      },
      colors: {
        primary: '#1B2E40',  // Define primary color
        secondary: '#2D4D67',  // Define secondary color
        accent: '#F5B753',  // Define accent color
        neutral: '#F0F0F0',  // Define neutral color
        complementary: '#A74C55',  // Define complementary color
      },
    },
  },
  plugins: [],
}


