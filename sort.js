var sortNumber = function (number) {
    number.sort(function (a, b) {
<<<<<<< HEAD
        if (a == b) {
=======
        if (a === b) {
>>>>>>> 9926a8445fb5edf5e13056ee05e8bcfbf42fdbe8
            return 0;
        }
        return a < b ? -1 : 1;
    });
};

<<<<<<< HEAD
=======

>>>>>>> 9926a8445fb5edf5e13056ee05e8bcfbf42fdbe8
var number = [19, 3, 81, 1, 24, 21];
sortNumber(number);
console.log(number);
