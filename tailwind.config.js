module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {

      peach: '#FFE5B4',
        'peach-light': '#FFF5E1',
        primary: '#0B1E2D',
      accent: '#00C2CB'
    },
    keyframes :{
      moveLeft: {
        '0%' : {transform:'translateX(0)'},
        '100%' : {transform:'translateX(-100%)'},
      },
      float:{
        '0%' : {transform:'translateY(0)'},
        '50%' : {transform:'translateY(-20px)'},
        '100%' : {transform:'translateY(0)'},
      },
      },

      animation : {
        moveLeft: 'moveLeft 20s linear infinite',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
   
    },
  },
  plugins: [],
}