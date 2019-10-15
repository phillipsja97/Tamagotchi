import utilities from '../../helpers/utilities';
import './overall.scss';


const overallAverage = () => {
  const playValue = document.getElementById('playProgress').value;
  const eatValue = document.getElementById('eatProgress').value;
  const sleepValue = document.getElementById('sleepProgress').value;
  const fightValue = document.getElementById('fightProgress').value;
  const total = playValue + eatValue + sleepValue + fightValue;
  return total / 4;
};

const overallProgressBar = () => {
  let domString = '';
  domString = `
  <div class="overallProgress">
  <label>Overall Health</label>
  <progress id="overallProgress" max="100" value="${overallAverage()}"></progress>
  </div>
  `;
  utilities.printToDom('progress', domString);
  setInterval(overallProgressBar, 10);
};

export default { overallProgressBar };
