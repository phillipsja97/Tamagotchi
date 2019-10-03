import utilities from '../helpers/utilities';

let strength = 100;

const printFight = () => {
  let domString = '';
  domString += `
  <div class="fightContainer">
  <h2>Fight</h2>
  </div>
  <div class="overallButton">
  <button id="brave" class="example_e" align="center">Walk away from violence</a></button>
  <button id="violence" class="example_e" align="center">Activate Violence</a></button>
  </div>
  <label>Progress</label>
  <div class="checkProgress">
  <progress id="fightProgress" max="100" value="${strength}"></progress>
  </div>
  `;
  utilities.printToDom('fight', domString);
};

const braveOption = () => {
  document.getElementById('brave').addEventListener('click', () => {
    const add = strength + 1;
    if (add > 100) {
      strength = 100;
    } else {
      strength = add;
    }
    document.getElementById('fightProgress').value = strength;
  });
};

const violenceOption = () => {
  document.getElementById('violence').addEventListener('click', () => {
    strength -= 10;
    document.getElementById('fightProgress').value = strength;
  });
};

const fightSubtractProgress = () => {
  document.getElementById('fightProgress').value = strength;
  strength -= 5;
  const fightSubtractBySeconds = () => {
    setInterval(fightSubtractProgress, 30000);
  };
  fightSubtractBySeconds();
};

export default { printFight, fightSubtractProgress, violenceOption, braveOption };
