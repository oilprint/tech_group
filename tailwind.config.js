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
        accent: '#A7E4F1',
        bg: '#00040F',
        dimWhite: 'rgba(255, 255, 255, 0.7)',
        dimBlue: 'rgba(9, 151, 124, 0.1)',
      },
      fontFamily: { 
      inter: ['Inter', 'sans-serif'],
      tektur: ['Tektur', 'sans-serif'],  
      },
      backgroundImage: {
        'hero': "url('./assets/bg.jpg')",
        'dark': "url('./assets/bg-dark.jpg')",
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
      width: '1200px',
      padding: '15px',
      center: true
    },

    
  },
  plugins: [],
}

