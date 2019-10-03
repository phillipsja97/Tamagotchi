import utilities from '../helpers/utilities';

const printFight = () => {
  let domString = '';
  domString += `
  <div class="fightContainer">
  <h2>Fight</h2>
  </div>
  <div class="overallButton">
  <button>Run Away From the Fight</button>
  <button>Activate: Violence</button>
  </div>
  <label>Progress</label>
  <div class="checkProgress">
  <progress max="100" value="70"> 70% </progress>
  </div>
  `;
  utilities.printToDom('fight', domString);
};

export default { printFight };
