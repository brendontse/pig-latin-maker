
// front end ui
$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    console.log(userInput);
    // business logic
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

    vowels.forEach(function(vowel) {
      if (userInput.charAt(0) === vowel) {
        var output = (userInput + "way");
        console.log(output);
      }
});
    //
    // } else if
    // }
    //  else {
    //   alert("Please enter a sentence with alphabetical characters")
    // };
  });
});
