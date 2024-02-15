/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#DEE9F6',
        secondary: '#08A4FA',
        secondary2: '#00f6ff',
        accent: '#00f6ff',
        bg: '#00040F',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },

      boxShadow: {
        '3xl': '0 0 2px 0 rgba(0, 246, 255)',
      },

      fontFamily: { 
      inter: ['Inter', 'sans-serif'],
      tektur: ['Tektur', 'sans-serif'],  
      },
      backgroundImage: {
        'hero': "url('./assets/images/bg-hero.jpg')",
        'wave': "url('./assets/images/bg-wave.png')",
        'face': "url('./assets/face.png')",
      },

    },
    screens: {
      'xs': '480px',
      'ss': '620px',
      'sm': '768px',
      'md': '1024px',
      'lg': '1200px',
    },

    container: {
      'max-width': '1200px',
      'padding': '15px',
      'center': true
    },

    
  },
  plugins: [],
}

