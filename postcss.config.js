// ❗ Sai tên file: PostCSS mặc định KHÔNG đọc .ts. Hãy đổi tên file này thành `postcss.config.js` ở GỐC dự án.
// Nội dung cấu hình (Tailwind v4):
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};