// business logic
var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

function findFirstVowel(userInput) {
  var word = userInput.split('');
  console.log(word);
  for (var i = 0; i < word.length; ++i) {
    if (vowels.includes(word[i])) {
      return i;
    };
  };
};
 


// function translateIntoPigLatin(userInput){
//
// }
// if (consonants.includes(userInput.charAt(0))) {


  // var convertVowelsToString = vowels.toString();
  // console.log(convertVowelsToString);
  // var firstVowel = userInput.indexOf(convertVowelsToString);
  // console.log(firstVowel);


  // using forEach loop
  // vowels.forEach(function(vowel){
  //   if (userInput.indexOf(vowel) >= 1) {
  //     console.log(userInput.indexOf(vowel));
  //     console.log('happened');
  //     vowelIndex.push(userInput.indexOf(vowel));
  //     vowelIndex.sort();


// front end ui
$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();

    console.log(userInput);
    var functionResult = findFirstVowel(userInput);
    console.log(functionResult);
            //working code
    // if (consonants.includes(userInput.charAt(0))) {
    //   var startingConsonant = userInput.slice(0, 1);
    //   var restOfWord = userInput.slice(1);
    //   var output = (restOfWord + startingConsonant + "ay");
    //   console.log(output);
    } else if (vowels.includes(userInput.charAt(0))) {
      var output = (userInput + "way");
      console.log(output);
    } else {
      alert("Please enter a sentence with alphabetical characters");
  });
});
