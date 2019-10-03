import utilities from '../helpers/utilities';

const printSleep = () => {
  let domString = '';
  domString += `
  <div class="sleepContainer">
  <h2>Sleep</h2>
  </div>
  <div class="overallButton">
  <button>Take a Nap</button>
  <button>Deep Slumber</button>
  </div>
  <label>Progress</label>
  <div class="checkProgress">
  <progress max="100" value="70"> 70% </progress>
  </div>
  `;
  utilities.printToDom('sleep', domString);
};

export default { printSleep };
