var arr = [0, 0, 0];
for (var i = 0; i < arr.length; i++) {
    var random = Math.random() * 10;
    arr[i] = parseInt(random);
}

var new_arr = arr;
console.log(new_arr);
var form = document.querySelector("form");
var input = document.querySelector("input");
var para = document.querySelector(".won-or-loss");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(input.value);
    var data = guess(input.value, new_arr);
    console.log(data);
    if (data.index == -1) {
        para.innerHTML = `No Player Matched Your Guess & You Loss The Game`;
    } else {
        para.innerHTML = `Player ${data.index + 1} Matched Your Guess & You Won The Game`;
    }
})

const guess = (value, array) => {
    var json_data = { "value": value, "index": -1 };
    for (let index = 0; index < array.length; index++) {
        if (value == array[index]) {
            json_data = { "value": value, "index": index };
            return json_data;
        }
    }
    return json_data;
}