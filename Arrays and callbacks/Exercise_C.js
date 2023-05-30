function magician(yourFunc) {
    console.log(
      "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const magicOutput = yourFunc(namesArray);
  
    return magicOutput;
  }
  
  function uppercaseNames(namesArray) {
    // Uppercase all letters in the namesArray
    const newArray = namesArray.map((name) => name.toUpperCase());
    return newArray;
  }
  
  const result = magician(uppercaseNames);
  console.log(result);