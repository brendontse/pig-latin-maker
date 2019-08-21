
// front end ui
$(document).ready(function(){
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    console.log(userInput);
    // business logic
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];

    if (true) {

    } else if (vowels.includes(userInput)) {
      var output = (userInput + "way");

    } else {
      alert("Please enter a sentence with alphabetical characters")
    };
  });
});
