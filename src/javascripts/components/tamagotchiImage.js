import utilities from '../helpers/utilities';
import gucci from '../../assets/gucci.jpg';


const printImage = () => {
  const domString = `
  <img src='<img src=${gucci} alt="picture of gucci"/>'/>
  `;
  utilities.printToDom('pet', domString);
};

export default { printImage };
