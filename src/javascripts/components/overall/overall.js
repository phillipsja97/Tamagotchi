import utilities from '../../helpers/utilities';
import './overall.scss';
// import play from '../components/play';
// import eat from '../components/eat';
// import sleep from '../components/sleep';
// import fight from '../components/fight';

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
  setInterval(overallProgressBar, 30000);
};


// const overallAverage = () => {
//   let total = 0;
//   const progressValues = document.getElementsByClassName('progressBar').value;
//   for (let i = 0; i < progressValues.length; i += 1) {
//     total += progressValues[i].length;
//   }
//   const overallAvg = total / progressValues.length;
//   return overallAvg;
// };

// const overallProgressBar = () => {
//   let domString = '';
//   domString = `
//       <div class="overallProgress">
//       <label>Overall Health</label>
//       <progress id="overallProgress" max="100" value="${overallAverage}"></progress>
//       </div>
//       `;
//   utilities.printToDom('progress', domString);
// };

// const overallAverage = () => {
//   const getValues = document.getElementsByClassName('progressBar');
//   console.log(getValues);
//   for (let i = 0; i < getValues.length; i += 1) {
//     const avg = getValues.reduce((a, b) => a + b, 0) / getValues.length;
//     console.log(avg);
//   }
// };

export default { overallProgressBar };
