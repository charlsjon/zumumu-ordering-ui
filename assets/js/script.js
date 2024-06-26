tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F1F1F1',
        secondary: '#2B2A2A',
        tertiary: '#146758',
        searchfill: '#BAB3B3',
        searchplaceholder: '#5F6160',
        grad: 'rgba(0,0,0,0.3)',
        lightshadow: 'rgba(208,208,208,0.5)',
        darkshadow: 'rgba(81,81,81,0.5)',
        gray: '#E3E3E3',
        davygray: '#555555',
        matterhorn: '#555353',
        richblack: '#0F0E0E',
        redtail: '#AE4242',
        whitesmoke: '#F6F6F6',
        suvagrey: '#868686',
        gainsboro: '#DED7D7',
        textprimary: '#131516',
        textsecondary: '#EDF6F9',
      },
      container: {
        center: true,
      },
      size: {
        '100': '100px',
      },
      fontSize: {
        xxs: "10px"
      },
      fontFamily: {
        roboto: ['"Roboto"', 'sans-serif'],
        robotoslab: ['"Roboto Slab"', 'serif']
      },
      borderRadius: {
        xl4: '30px',
      },
      dropShadow: {
        invertmd: ['drop-shadow(0 -4px 3px rgb(0 0 0 / 0.07))', 
        'drop-shadow(0 -2px 2px rgb(0 0 0 / 0.06))'
      ]
      }
    }
  }
}

function toLunch() {
  location.replace('/zumumu-ordering-ui/template/order.html');
}

function toDashboard() {
  location.href = '/zumumu-ordering-ui/index.html';
}

function toCart() {
  location.replace('/zumumu-ordering-ui/template/cart.html');
}