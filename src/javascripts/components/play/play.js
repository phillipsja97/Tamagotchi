import utilities from '../../helpers/utilities';
import './play.scss';

let fun = 50;

const printPlay = () => {
  let domString = '';
  domString += `
  <div class="playContainer">
  <h2>Play</h2>
  </div>
  <div class="overallButton">
  <button id="superfun" class="example_e" align="center">Super Fun Activity!</a></button>
  <button id="slightlyfun" class="example_e" align="center">Lame activity</a></button>
  </div>
  <label>Progress</label>
  <div class="checkProgress">
  <progress class="progressBar" id="playProgress" max="100" value="${fun}"></progress>
  </div>
  `;
  utilities.printToDom('play', domString);
};

const superFunOption = () => {
  document.getElementById('superfun').addEventListener('click', () => {
    const add = fun + 50;
    if (add > 100) {
      fun = 100;
    } else {
      fun = add;
    }
    document.getElementById('playProgress').value = fun;
  });
};

const slightlyFunOption = () => {
  document.getElementById('slightlyfun').addEventListener('click', () => {
    fun -= 3;
    document.getElementById('playProgress').value = fun;
  });
};

const playSubtractProgress = () => {
  document.getElementById('playProgress').value = fun;
  fun -= 5;
  const playSubtractBySeconds = () => {
    setInterval(playSubtractProgress, 30000);
  };
  playSubtractBySeconds();
};

// const dieAlert = () => {
//   const play = document.getElementById('playProgress').value;
//   if (play === 0) {
//     console.log('you killed me');
//   }
// };

export default {
  printPlay,
  playSubtractProgress,
  superFunOption,
  slightlyFunOption,
  // dieAlert,
};
