$(function () {
// Datas and varialbes to work with
const data = [1, 2, 3, 4, 5, 6],
    input = $('.input'),
    submit = $('.submit'),
    resultSum = $('.sum');
// Click event on the submit input
submit.on('click', function() {
    // Grabs the input value and parse it into a number
    const val = input.val();
    const num = parseInt(val);
    // Verify the user gave us a real number
    if (!isNaN(num)) {
      // Add our new number to the data array
      data.push(num);
      // Use map to multiply the number in data by 3
      const sum = data.map(input => input * 4);
      // Display result
      resultSum.text(sum);
      // Resets input field empty
      input.val('');
    }
});
});


$(function () {
    // Datas and varialbes to work with
    const players = ['Romero', 'DeGea'],
        input = $('.input-2'),
        submit = $('.submit-2'),
        resultSum = $('.sum-2');
    // Click event on the submit button
    submit.on('click', function () {
        // Grabs the input value
        const enterdPlayer = input.val();
        // Use .includes to validate if input is part of the array
          const includedName = players.includes(enterdPlayer);
          // Output true or false result
          resultSum.text(includedName);
          // Reset input field empty
          input.val('');
    });
});

$(function (){
  // Datas and varialbes to work with
  const data = [1, 2, 3, 4, 5, 6],
        input = $('.input-3'),
        submit = $('.submit-3'),
        resultSum = $('.sum-3');
  // Click event on the submit input
  submit.on('click', function() {
    // Grabs the input value and parse it into a number
    const secondVal = input.val();
    const num = parseInt(secondVal);
    // use .filter function to filter numbers through data given from user
    let listedNumbers = data.filter(function(value) {
      return value > num;
    });
    // Display result
    resultSum.text(listedNumbers);
    // Resets input field empty
    input.val('');
  });
});


$(function () {
// Datas and varialbes to work with
const data = [1, 2, 3, 4, 5, 6],
    input = $('.input-4'),
    submit = $('.submit-4'),
    resultSum = $('.sum-4');
// Click event on the submit input
submit.on('click', function() {
    // Grabs the input value and parse it into a number
    const val4 = input.val();
    const num = parseInt(val4);
    // Verify the user gave us a real number
    if (!isNaN(num)) {
      // Add our new number to the data array
      data.push(num);
      // Use .sort to descend data numbers
      const sortedVals = data.sort((a, b) => b - a);
      // Display result
      resultSum.text(sortedVals);
      // Resets input field empty
      input.val('');
    }
});
});
