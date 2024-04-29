const getSleepHours = day => {
    switch(day) {
     case 'Monday':
       return 8
       break;
     case 'Tuesday':
       return 8
       break;
      case 'Wednesday':
       return 7
       break;
      case 'Thursday':
       return 6
       break;
      case 'Friday':
       return 5
       break;
      case 'Saturday':
       return 8
       break;
      case 'Sunday':
       return 10
       break;
   
       default: 
       return 'Error!'
    }
   };
   
   
   
   const getActualSleepHours = () =>
     getSleepHours('Monday') + 
     getSleepHours('Tuesday') + 
     getSleepHours('Wednesday') + 
     getSleepHours('Thursday') + 
     getSleepHours('Friday') + 
     getSleepHours('Saturday') + 
     getSleepHours('Sunday');
   
   console.log(getSleepHours('Monday'));
   console.log(getActualSleepHours());
   
   
   const getIdealSleepHours = () => {
     let idealHours = 8;
     return idealHours * 7;
   };
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
   
     if (actualSleepHours === idealSleepHours){
       console.log('got the perfect amount of sleep.');
     } 
     else if (actualSleepHours > idealSleepHours){
       console.log('got more sleep than needed.');
     } 
     else if(actualSleepHours < idealSleepHours){
       console.log('should get some rest!!');
     }
   };
   
   calculateSleepDebt();