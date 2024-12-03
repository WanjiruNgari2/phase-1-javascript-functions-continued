// saturday fun
function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`; 
}

 
//monday work
function mondayWork (activity = "go to the office") {
return `This Monday, I will ${activity}.`;
}


//wrapadjective
function wrapAdjective (wrapper = '*') {
  return function (adjective) {
    return `You are ${wrapper}${adjective}${wrapper}!`;
  }
}