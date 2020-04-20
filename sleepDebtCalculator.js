const getSleepHours = day => {
    if  (day == 'Monday'){
      return 5
    } else if (day == 'Tuesday'){
      return 5
    } else if (day == 'Wednesday'){
      return 5
    } else if (day == 'Thursday'){
      return 5
    } else if (day == 'Friday'){
      return 5
    } else if (day == 'Saturday'){
      return 5
    } else if (day == 'Sunday'){
      return 5
    }
  }
  
  const getActualSleepHours = () =>{
  const sum = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  return sum;
  }
  const getIdealSleepHours = () =>{
  const idealHours = 7
  return idealHours * 7
  }
  // console.log(getActualSleepHours());
  // console.log(getIdealSleepHours());
  const calculateSleepDebt = () =>{
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log('Congratulations, you"ve got the perfect amount of sleep which is ' + (idealSleepHours))
    } else if (actualSleepHours < idealSleepHours){
      console.log('Oh no, you got ' + (idealSleepHours - actualSleepHours) + ' of sleep, please get more sleep')
    } else {
      console.log('Congrats but you seems to get more sleep than usual, the ideal amount of sleep hours is ' + idealSleepHours)
    }
  }
  
  calculateSleepDebt();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // console.log(getSleepHours('Monday'))