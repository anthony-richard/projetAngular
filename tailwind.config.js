module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary" : "#141E61",
          "secondary" : "#0F044C",
          "neutral" : "#191D24",
          "base-100" : "#EEEEEE",
          "info" : "#3ABFF8",
          "success" : "#36D399",
          "warning" : "#FBBD23",
          "error" : "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}  