import utilities from '../helpers/utilities';

const printPlay = () => {
  let domString = '';
  domString += `
  <div class="playContainer">
  <h2>Play</h2>
  </div>
  `;
  utilities.printToDom('play', domString);
};

export default { printPlay };
