import utilities from '../helpers/utilities.js';

const printEat = () => {
    let domString = '';
    domString += `
    <h3>Eat</h3>
    `
    utilities.printToDom('eat', domString)
};

export default { printEat };
