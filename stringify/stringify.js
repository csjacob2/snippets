// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

// implement JSON's stringify function
// this covers most standard data types

$(document).ready(function(){

    console.log(stringify(1));                                      // number => 1
    console.log(stringify('this is a test line'));                  // string => "this is a test line"
    console.log(stringify(true));                                   // boolean => true
    console.log(stringify('true'));                                 // boolean sounding string=> "true"
    console.log(stringify([1, 'false', false, 'test string']));     // array with above values => [1,"false",false,"test string"]
    console.log(stringify({ x: 5, y: 2 }));                         // object: => ["x":5, "y":2]
});

function stringify(data) {
    var newData = '';

    if (Array.isArray(data)) {
        let newArray = [];
        for (let i = 0; i < data.length; i++) {
            newArray.push(stringify(data[i]));
        }
        newData = `[${newArray.join()}]`;
    } else if (typeof data == 'number' || typeof data == 'boolean') {
        //string or number
        newData = `${data}`;
    } else if (typeof data == 'string') {
        newData = `"${data}"`;
    } else if (Object.prototype.toString.call(data)) {
        let newArray = [];
        var tempVar = '';

        for (let key in data) {
            tempVar = (stringify(data[key]));
            newArray.push(`"${key}":${tempVar}`);
        }
        newData = `{${newArray.join()}}`;
    }

    return newData;
}