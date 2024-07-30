const generateHtmlHeader = () => {
  const htmlHeader = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="/style.css">
    <title>Register Page</title>
  </head>
  <body>`;
  return htmlHeader;
};

const generateHtmlFooter = () => {
  const htmlFooter = `
  </body>
  </html>`;
  return htmlFooter;
};

const generateHtmlResponse = () => {
  const htmlHeader = generateHtmlHeader();
  const htmlFooter = generateHtmlFooter();
  const htmlContent = `
    <form>
      <div class="welcomeContainer">
        <h1>Welcome back</h1>
        <div class="logo">
          <img src="MyLogo.png" alt="my logo">
          <p>Building the Future of Web</p>
        </div>
        <div class="signin-signup">
          <button class="signinBtn" type="button">Sign in</button>
          <button class="signupBtn" type="button">Sign up</button>
        </div>
      </div>
    </form>
  `;
  const html = `
    ${htmlHeader}
    ${htmlContent}
    ${htmlFooter}`;
  return html;
};

module.exports = {
  generateHtmlHeader,
  generateHtmlFooter,
  generateHtmlResponse,
};
