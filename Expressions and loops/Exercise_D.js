function checkmood(mood) {
    if (mood === "happy" ) {   
      return `Good job, you're doing great!`;  
    } else if (mood === "sad") {   
      return `Every cloud has a silver lining`; 
    } else if (typeof mood === 'number') {  
      return `Beep beep boop`;
    } else {
      return `I'm sorry, I'm still learning about feelings!`; //If any part above happened appear this msj
    }
  }
  mod=45
  console.log(checkmood(mod))
  mod2=true
  console.log(checkmood(mod2))