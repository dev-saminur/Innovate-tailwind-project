tailwind.config = {
    theme: {
      screens: {
        'xs': '320px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1400px',
      },
      extend: {
        colors: {
          clifford: '#da373d',
        },
        container: {
          center: true,
        },
        fontFamily: {
          'primary': ['Poppins', 'sans-serif'],
          'secondary': ['Nunito', 'sans-serif'],
          'navfont': ['Open-Sans', 'sans-serif'],
        },
        backgroundImage: {
          'hero-banner': "url('./image/banner.jpg')",
          'analytics-banner': "url('./image/analyticsbg.jpg')",
        },
        
      },
  
    }
  }
