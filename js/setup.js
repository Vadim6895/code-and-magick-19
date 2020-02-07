'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb (0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var NUMBER_CARDS = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

var generationWizard = function () {
  var wizard1 = {
    name: arrayRandElement(WIZARD_NAMES),
    surName: arrayRandElement(WIZARD_SURNAMES),
    coatColor: arrayRandElement(COAT_COLOR),
    eyesColor: arrayRandElement(EYES_COLOR)
  };
  return wizard1;
};

for (var i = 0; i < NUMBER_CARDS; i++) {
  wizards.push(generationWizard());
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var generateWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var a = 0; a < wizards.length; a++) {
    fragment.appendChild(renderWizard(wizards[a]));
  }
  similarListElement.appendChild(fragment);
};
generateWizards();
userDialog.querySelector('.setup-similar').classList.remove('hidden');
