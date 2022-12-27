//
let optionButtons = document.querySelectorAll('.option-button');
let advanceOptionButton = document.querySelectorAll('.adv-option-button');
let fontnName = document.getElementById('fontName');
let fontSizeRef = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');
let linkButton = document.getElementById('createLink');
let alignButtons = document.querySelectorAll('.align');
let spacingButton = document.querySelectorAll('.spacing');
let formateButtons = document.querySelectorAll('.format');
let scriptButtons = document.querySelectorAll('.script');

//  list  of  Fontlist
let fontLsit = [
  'Arial',
  'Verdana',
  'Times New Roman',
  'Georgia',
  'Courier New',
  'cursive',
];

const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(spacingButton, true);
  highlighter(formateButtons, false);
  highlighter(scriptButtons, true);

  /// creat opion
  fontLsit.map((value) => {
    let opiton = document.createElement('option');
    opiton.value = value;
    opiton.innerHTML = value;
    fontnName.appendChild(opiton);
  });

  ///   font size creat option
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }

  /// defaout  size
  fontSizeRef.value = 3;
};

const highlighter = (className, needsRmoval) => {
  className.forEach((button) => {
    button.addEventListener('click', () => {
      if (needsRmoval) {
        let allreadyActive = false;
        if (button.classList.contains('active')) {
          allreadyActive = true;
        }
        highlighterRemover(className);

        if (!allreadyActive) {
          button.classList.add('active');
        }
      } else {
        button.classList.toggle('active');
      }
    });
  });
};

const highlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove('active');
  });
};

// creat modifi text
const modifyText = (command, defaultUI, value) => {
  document.execCommand(command, defaultUI, value);
};

optionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modifyText(button.id, false, null);
  });
});

advanceOptionButton.forEach((button) => {
  button.addEventListener('change', () => {
    modifyText(button.id, false, button.value);
  });
});

linkButton.addEventListener('click', () => {
  let userklink = prompt('Enter a URL');
  if (/http/i.test(userklink)) {
    modifyText(linkButton.id, false, userklink);
  } else {
    userklink = 'http://' + userklink;
    modifyText(linkButton.id, false, userklink);
  }
});
window.onload = initializer();
