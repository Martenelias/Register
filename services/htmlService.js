const generateHtmlHeader = () => {
  const htmlHeader = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" type="text/css" href="/style.css">
    <script src="/index.js" defer></script>
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
    <form id="signinForm" action="/members" method="POST">
      <div class="signinContainer">
        <div class="wavesUp">
          <img src="waveUp.svg" alt="svgUp">
          <h1>Hello,<br> Sign in!</h1>
        </div>
        <div class="signin">
          <div class="usernameContainer">
            <input type="text" name="user" class="signinUsername" placeholder="Username">
            <i class="fa-solid fa-user"></i>
          </div>        
          <div class="passwordContainer">
            <input type="password" name="pwd" class="signinPassword" placeholder="Password">
            <i class="fa-solid fa-lock"></i>
          </div>
          <button type="submit" class="signinConfirmBtn">Sign in</button>
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
    <form id="signupForm" action="/members" method="POST">
      <div class="signupContainer">
        <div class="waveHeader">
          <h1>Create Your<br> Account</h1>
          <img src="/img/waveUpTrans.svg" alt="waveUp">
        </div>
        <div class="detailsContainer">
          <img src="/img/waveDownTrans.svg" alt="waveTwo">
          <div class="details">
            <div class="detailsInfo">
              <input type="text" name="name" class="signupBox" placeholder="Full Name">
              <i class="fa-solid fa-user"></i>
            </div>
            <div class="detailsInfo">
              <input type="text" name="user" class="signupBox" placeholder="Username">
              <i class="fa-solid fa-gear"></i>
            </div>
            <div class="detailsInfo">
              <input type="email" name="email" class="signupBox" placeholder="Email">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="detailsInfo">
              <input type="password" name="pwd" class="signupBox" placeholder="Password">
              <i class="fa-solid fa-lock"></i>
            </div>
          </div>
          <button type="submit" class="confirmSignup">Sign up</button>
          <div class="signupAccountContainer">
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
const generateMembers = (members) => {
  const htmlHeader = generateHtmlHeader();
  const htmlFooter = generateHtmlFooter();

  const membersList = members.map((member) => `
    <div class="memberDetail">
      <img class="memberListImage" src="/img/bear.png" alt="bear">
      <a href="#">${member.name}</a>
    </div>`).join('');

  const htmlContent = `
    <div class="outerBox">
      <div class="membersContainer">
        <div class="memberHeader">
          <img class="memberUp" src="memberUp.svg" alt="white">
          <div class="membersLogo">
            <h1>Members</h1>
            <img src="MyLogo.png" alt="my logo">
          </div>
        </div>
        <div class="membersList">
        ${membersList}
        </div>
        <div class="membersFooter">
          <img src="memberDown.svg" alt="down">
          <a href="/"><i class="fa-solid fa-arrow-right-from-bracket"></i></a>
        </div>
      </div>
    </div>
  `;

  const html = `
    ${htmlHeader}
    ${htmlContent}
    ${htmlFooter}`;
  return html;
};

const generateMembersDetail = () => {
  const htmlHeader = generateHtmlHeader();
  const htmlFooter = generateHtmlFooter();

  const htmlContent = `
    <form>
      <div class="userInfoContainer">
        <div class="waveHeader">
          <img class="waveTrans" src="/img/waveUpTrans.svg" alt="waveUp">
        </div>
        <div class="userDetailsContainer">
          <img class="waveTransTwo" src="/img/waveDownTrans.svg" alt="waveTwo">
          <div class="userDetails">
            <img class="userImage" src="/img/bear.png" alt="bear image">
            <div class="usersInfo">
              <h2 class="usersName">Malle Maasikas</h2>
              <p class="usersAcc">Mallekas</p>
              <p class="usersEmail">malle@gmail.com</p>
            </div>
          </div>
          <div class="backToMembersContainer">
            <a href="/members">Members</a>
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
  generateMembers,
  generateMembersDetail,
};
