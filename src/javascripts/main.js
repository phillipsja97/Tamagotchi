import '../styles/main.scss';
import eat from './components/eat/eat';
import play from './components/play/play';
import fight from './components/fight/fight';
import sleep from './components/sleep/sleep';
import tamagotchiImage from './components/image/tamagotchiImage';
import overall from './components/overall/overall';


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
  // play.dieAlert();
  overall.overallProgressBar();
};

init();
