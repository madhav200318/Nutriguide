import typography from '@tailwindcss/typography';
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#EFF4E4', paper: '#F5F8EC', forest: '#16301F', pine: '#254832',
        leaf: '#3E7A4C', sprout: '#7FA463', moss: '#DCE7CC', mossd: '#C7DAB2',
        clay: '#C1642E', clayd: '#A6521F', ink: '#1B2418',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
