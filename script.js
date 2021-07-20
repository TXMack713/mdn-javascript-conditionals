// Assessment 1 JavaScript
let season = 'summer';
let response;

// Add your code here

if (season === 'summer') {
  response = `It's summer! Now's a good time to go out and enjoy the sun.`;
} else if (season === 'winter') {
  response = `Brrr! It's cold outside! You'll need to bundle up to avoid frostbite.`;
} else {
  response = `We don't know what season it is.`;
}

// Don't edit the code below here!

const section1 = document.querySelector('.assessment1');

let para1 = document.createElement('p');
para1.textContent = response;
section1.appendChild(para1);

// Assessment 2 JavaScript

let response2;
let score = 75;
let machineActive = true;

// Add your code here

if (machineActive === false) {
  const section2 = document.querySelector('.assessment2');

  section2.innerHTML = ' ';

  let sec2para1 = document.createElement('p');

  response2 = `Please turn on the machine to begin.`;

  sec2para1.textContent = response2;
  section2.appendChild(sec2para1);
} else {
  if (score < 0 || score > 100) {
    response2 = `This is not possible, an error has occurred.`;
  } else if (score > 0 && score <= 19) {
    response2 = `That was a terrible score — total fail!`;
  } else if (score > 19 && score <= 39) {
    response2 = `You know some things, but it\'s a pretty bad score. Needs improvement.`;
  } else if (score > 39 && score <= 69) {
    response2 = `You did a passable job, not bad!`;
  } else if (score > 69 && score <= 89) {
    response2 = `That's a great score, you really know your stuff.`;
  } else if (score > 89 && score <= 100) {
    response2 = `What an amazing score! Did you cheat? Are you for real?`;
  }

  // Don't edit the code below here!

  const section2 = document.querySelector('.assessment2');

  section2.innerHTML = ' ';
  let sec2para1 = document.createElement('p');
  let sec2para2 = document.createElement('p');

  sec2para1.textContent = `Your score is ${score}`;
  sec2para2.textContent = response2;

  section2.appendChild(sec2para1);
  section2.appendChild(sec2para2);
}

// Assessment 3 JavaScript

let response3;
let score2 = 95;
let machineActive2 = true;

// Add your code here

if (machineActive2 === false) {
  const section3 = document.querySelector('.assessment3');

  section3.innerHTML = ' ';

  let sec3para1 = document.createElement('p');

  response3 = `Please turn on the machine to begin.`;

  sec3para1.textContent = response3;
  section3.appendChild(sec3para1);
} else {
  switch (true) {
    case score < 0 || score2 > 100:
      response3 = `This is not possible, an error has occurred.`;
      break;

    case score > 0 && score2 <= 19:
      response3 = `That was a terrible score — total fail!`;
      break;

    case score2 > 19 && score2 <= 39:
      response3 = `You know some things, but it's a pretty bad score. Needs improvement.`;
      break;

    case score2 > 39 && score2 <= 69:
      response3 = `You did a passable job, not bad!`;
      break;

    case score2 > 69 && score2 <= 89:
      response3 = `That's a great score, you really know your stuff.`;
      break;

    case score2 > 89 && score2 <= 100:
      response3 = `What an amazing score! Did you cheat? Are you for real?`;
      break;
  }

  // Don't edit the code below here!

  const section3 = document.querySelector('.assessment3');

  section3.innerHTML = ' ';
  let sec3para1 = document.createElement('p');
  let sec3para2 = document.createElement('p');

  sec3para1.textContent = `Your score is ${score2}`;
  sec3para2.textContent = response3;

  section3.appendChild(sec3para1);
  section3.appendChild(sec3para2);
}

// Assessment 4 JavaScript
let machineActive3 = true;
let pwd = 'cheese';

let machineResult;
let pwdResult;

// Add your code here
if (machineActive3 === false) {
  machineResult = `The machine is currently off. Please turn it on to get started.`;
} else {
  machineResult = `The machine is on, please enter your password`;
  pwd === 'cheese'
    ? (pwdResult = `Login successful.`)
    : (pwdResult = `Login failed.`);
}

// Don't edit the code below here!

const section4 = document.querySelector('.assessment4');

let sec4para1 = document.createElement('p');
let sec4para2 = document.createElement('p');

sec4para1.textContent = machineResult;
sec4para2.textContent = pwdResult;

section4.appendChild(sec4para1);
section4.appendChild(sec4para2);
