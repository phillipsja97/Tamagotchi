import '../styles/main.scss';
import eat from './components/eat';
import play from './components/play';
import fight from './components/fight';
import sleep from './components/sleep';
import tamagotchiImage from './components/tamagotchiImage';


const init = () => {
  eat.printEat();
  play.printPlay();
  fight.printFight();
  sleep.printSleep();
  eat.eatSubtractProgress();
  eat.unhealthyOption();
  eat.healthyOption();
  play.playSubtractProgress();
  play.superFunOption();
  play.slightlyFunOption();
  fight.fightSubtractProgress();
  fight.braveOption();
  fight.violenceOption();
  sleep.sleepSubtractProgress();
  sleep.slumberOption();
  sleep.napOption();
  tamagotchiImage.printImage();
};

init();
