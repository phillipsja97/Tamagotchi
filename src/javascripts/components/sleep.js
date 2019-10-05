import utilities from '../helpers/utilities';

let energy = 50;

const printSleep = () => {
  let domString = '';
  domString += `
  <div class="sleepContainer">
  <h2>Sleep</h2>
  </div>
  <div class="overallButton">
  <button id="napButton" class="example_e" align="center">Take a nap</a></button>
  <button id="slumberButton" class="example_e" align="center">Deep Slumber</a></button>
  </div>
  <label>Progress</label>
  <div class="checkProgress">
  <progress id="sleepProgress" max="100" value="${energy}"></progress>
  </div>
  `;
  utilities.printToDom('sleep', domString);
};

const slumberOption = () => {
  document.getElementById('slumberButton').addEventListener('click', () => {
    const add = energy + 60;
    if (add > 100) {
      energy = 100;
    } else {
      energy = add;
    }
    document.getElementById('sleepProgress').value = energy;
  });
};

const napOption = () => {
  document.getElementById('napButton').addEventListener('click', () => {
    energy += 50;
    document.getElementById('sleepProgress').value = energy;
  });
};

const sleepSubtractProgress = () => {
  document.getElementById('sleepProgress').value = energy;
  energy -= 5;
  const sleepSubtractBySeconds = () => {
    setInterval(sleepSubtractProgress, 30000);
  };
  sleepSubtractBySeconds();
};

export default {
  printSleep,
  sleepSubtractProgress,
  napOption,
  slumberOption,
};
