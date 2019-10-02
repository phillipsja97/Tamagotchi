import utilities from '../helpers/utilities';

const printEat = () => {
  let domString = '';
  domString += `
  <div class="feedMe">
    <h2>Eat</h2>
  </div>
    `;
  utilities.printToDom('eat', domString);
};

export default { printEat };
