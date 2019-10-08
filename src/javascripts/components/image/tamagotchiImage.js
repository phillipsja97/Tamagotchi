import utilities from '../../helpers/utilities';
import './image.scss';

const printImage = () => {
  const domString = `
  <img src="http://assets.stickpng.com/thumbs/5a2d8c0ab3c4622cbe35976e.png" alt="picture of gucci"/>
  `;
  utilities.printToDom('pet', domString);
};

export default { printImage };
