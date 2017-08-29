var persons = ["Sheannysass", "Bucky", "Becky", "Fiona"];

var shortList = persons.filter(function (element) {
    return element.length === 6
});

shortList.forEach(function (el) { console.log(el) });



//metode som modtager et array og et callback
function myFilter(arr, callback) {
    var resultArray = [];
    //Først skal array løbes igennem
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (callback(element)) {
            resultArray.push(element);
        }
    }
    return resultArray;
}

var result = myFilter(persons, function (element) { element.length > 2 });