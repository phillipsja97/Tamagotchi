import utilities from '../helpers/utilities';

const printPlay = () => {
  let domString = '';
  domString += `
  <div class="playContainer">
  <h2>Play</h2>
  </div>
  <div class="overallButton">
  <button>Super Fun Activity</button>
  <button>Slightly Fun Activity</button>
  </div>
  <label>Progress</label>
  <div class="checkProgress" id="playProgress">
  <progress max="100" value="70"> 70% </progress>
  </div>
  `;
  utilities.printToDom('play', domString);
};

// const progresBar = () => {
//   let domString2 = '';
//   domString2 += `
//   <label>Progress</label>
//   <div class="checkProgress">
//   <progress max="100" value="70"> 70% </progress>
//   </div>
//   `;
//   utilities.printToDom('play', domString2);
// };

export default { printPlay };
