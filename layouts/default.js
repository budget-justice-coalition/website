const html = require('html-template-tag');

module.exports = ({ title, content }) => html`
  <!DOCTYPE html>
  <html>
    <head>
      <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="/public/css/main.css">
      <title>${title}</title>
    </head>
    <body>
      <div class="site-wrapper">
        $${content}
      </div>
    </body>
  </html>
`;