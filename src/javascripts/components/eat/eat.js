import utilities from '../../helpers/utilities';
import './eat.scss';

let full = 100;

const printEat = () => {
  let domString = '';
  domString += `
  <div class="feedMe">
    <h2>Eat</h2>
  </div>
  <div class="overallButton">
  <button id="healthyButton" class="example_e" align="center">Eat a Healthy Snack</a></button>
  <button id="unhealthyButton" class="example_e" align="center">Eat Junkfood</a></button>
  </div>
  <label>Progress</label>
  <div class="checkProgress">
  <progress class="progressBar" id="eatProgress" max="100" value="${full}"></progress>
  </div>
    `;
  utilities.printToDom('eat', domString);
};

const healthyOption = () => {
  document.getElementById('healthyButton').addEventListener('click', () => {
    const add = full + 10;
    if (add > 100) {
      full = 100;
    } else {
      full = add;
    }
    document.getElementById('eatProgress').value = full;
  });
};

const unhealthyOption = () => {
  document.getElementById('unhealthyButton').addEventListener('click', () => {
    full -= 3;
    document.getElementById('eatProgress').value = full;
  });
};

const eatSubtractProgress = () => {
  document.getElementById('eatProgress').value = full;
  full -= 5;
  const eatSubtractBySeconds = () => {
    setInterval(eatSubtractProgress, 30000);
  };
  eatSubtractBySeconds();
};

export default {
  printEat,
  unhealthyOption,
  eatSubtractProgress,
  healthyOption,
};
