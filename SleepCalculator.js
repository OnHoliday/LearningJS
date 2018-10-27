function getSleepHours(day) {
  let a = 0
  switch (day) {
    case 'Monday': a = 7; break;
    case 'Tuesday': a = 6.5; break;
    case 'Wednesday': a = 4; break;
    case 'Thuseday': a = 9; break;
    case 'Friday': a = 0; break;
    case 'Saturday': a = 10; break;
    case 'Sunday': a = 8; break;
    default: console.log('No such day!'); break;
  }
  return a
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thuseday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = (idealHours = 8) => {
  return idealHours * 7
} 

function calculatorSleepDept(idealAmount) {
  actualSleepHours = getActualSleepHours()
  idealSleepHours = getIdealSleepHours(idealAmount)
  if (actualSleepHours === idealSleepHours) {
    console.log('You sleep perfectly!') 
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You slept ${actualSleepHours-idealSleepHours} hours too long`) 
  } else if (actualSleepHours < idealSleepHours) {
        console.log(`You slept ${idealSleepHours-actualSleepHours} hours too short`) 
  }
}
calculatorSleepDept(10)
