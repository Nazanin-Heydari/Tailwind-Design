/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens:{
        mobile: '480px',
        tablet: '768px',
        desktop: '1200px',
      },

      fontFamily: {
        Forum: ['Forum'],
        Poppins: ['Poppins']
      },

      colors:{
        CustomYellow:'#BF9766',
        CustomBlack:'#171717',
        Customgray:'#575656',
        DividerColor:'rgba(255, 255, 255, 1)',
        inputBox:'rgba(45, 44, 44, 1)',

        Customgray2: 'rgba(87, 86, 86, 1)',
        CustomBlack2: 'rgba(45, 44, 44, 1)',
        Customgray3: 'rgba(255, 255, 255, 1)',
        Customgray4: 'rgba(189, 189, 189, 1)',
        Customgray5: 'rgba(129, 128, 128, 1)',
        FooterWhite: 'rgba(255, 255, 255, 1)',

        hoverColor: 'rgba(191, 151, 102, 1)' ,

      },

      backgroundImage:{
        MyBackground:  "url('./Images/background.png')",
        MyBackgroundMobile:  "url('./Images/back-mobile.png')",
        MyBackgroundTablet:  "url('./Images/back-tablet.png')",

        RoomMobile: "url('./Images/Section3/mobile-room.png')",
        RoomTablet: "url('./Images/Section3/tablet-room.png')",
        RoomDesktop: "url('./Images/Section3/desktop-room.png')",

        luxuriousExperience: "url('./Images/Section6/Image.png')",
      },
    },
  },
  plugins: [],
}

