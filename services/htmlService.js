const generateHtmlHeader = () => {
  const htmlHeader = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
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
          <a class="signinBtn" href="/signin">Sign in</a>
          <a class="signupBtn" href="/signup">Sign up</a>
        </div>
        <img class="firstWave" src="waveOne.svg" alt="firstWave">
        <img class="secondWave" src="waveTwo.svg" alt="secondWave">
      </div>
    </form>
  `;
  const html = `
    ${htmlHeader}
    ${htmlContent}
    ${htmlFooter}`;
  return html;
};

const generateSignin = () => {
  const htmlHeader = generateHtmlHeader();
  const htmlFooter = generateHtmlFooter();

  const htmlContent = `
    <form>
      <div class="signinContainer">
        <div class="wavesUp">
          <img src="waveUp.svg" alt="svgUp">
          <h1>Hello,<br> Sign in!</h1>
        </div>
        <div class="signin">
          <div class="usernameContainer">
            <input type="text" class="signinUsername" placeholder="Username">
            <i class="fa-solid fa-user"></i>
          </div>        
          <div class="passwordContainer">
            <input type="text" class="signinPassword" placeholder="Password">
            <i class="fa-solid fa-lock"></i>
          </div>
          <a class="signinConfirmBtn" href="/members">Sign in</a>
        </div>
        <div class="wavesDown"> 
          <img src="waveDown.svg" alt="svgDown">
          <div class="signupAccountContainer">
            <p class="dontAccount">Don't have account?</p>
            <a class="signupAccount" href="/signup">Sign up</a>
          </div>  
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

const generateSignup = () => {
  const htmlHeader = generateHtmlHeader();
  const htmlFooter = generateHtmlFooter();

  const htmlContent = `
    <form>
      <div class="signupContainer">
        <div class="waveHeader">
          <h1>Create Your<br> Account</h1>
          <img src="waveUp.svg" alt="waveUp">
        </div>
        <div class"detailsContainer">
          <img src="waveTwo.svg" alt="waveTwo">
          <div class="details">
            <input type="text" class="signupName" placeholder="Full Name">
            <input type="text" class="signupUsername" placeholder="Username">
            <input type="text" class="signupPassword" placeholder="Password">
            <input type="text" class="signupConPasw" placeholder="Confirm Password">
          </div>
          <a class="confirmSignup" href="/members">Sign up</a>
          <div>
            <p>Already have account?</p>
            <a href="/signin">Sign in</a>
          </div>
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
  generateSignin,
  generateSignup,
};
