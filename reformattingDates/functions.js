/*
passing dates in an array as a string in the form "DDth MMM YYYY", reformat the date as "YYYY-MM-DD" and return as an array

for eg, if the date is "20th Oct 2052", return "2052-10-20"

input:
 20th Oct 2052
 6th Jun 1933
 26th May 1960
 20th Sep 1958
 16th Mar 2068
 25th May 1912
 16th Dec 2018
 26th Dec 2061
 4th Nov 2030
 28th Jul 1963

expected output:
 2052-10-20
 1933-06-06
 1960-05-26
 1958-09-20
 2068-03-16
 1912-05-25
 2018-12-16
 2061-12-26
 2030-11-04
 1963-07-28


 */

$(document).ready(function(){
    let dates = ['20th Oct 2052', '6th Jun 1933', '26th May 1960', '20th Sep 1958', '16th Mar 2068', '25th May 1912', '16th Dec 2018', '26th Dec 2061', '4th Nov 2030', '28th Jul 1963'];

    console.log(reformatDate(dates));
});

function reformatDate(dates) {
    let answerDates = [];

    // is there a way to return month to number?? there should be but I can't find it off the top of my head
    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let value of dates) {
        let tempArray = value.split(' ');
        let day = tempArray[0].match(/\d+/g);

        //prefix with 0 if less than 10
        if (day < 10) {
            day = ''+'0'+day;
        }

        //using array to find month string to number translation
        //let month = monthArray.indexOf(tempArray[1])+1;

        //using function to find month string to number translation
        let month = getMonthFromString(tempArray[1]);

        //prefix with 0 if less than 10
        if (month < 10) {
            month = ''+'0'+month;
        }

        let year = tempArray[2];

        answerDates.push(`${year}-${month}-${day}`);
    }
    return answerDates;
}


// found a function from SO to return string month to number month
function getMonthFromString(month){
    // create new date out of string that is a random date (with allocated month), then extract and return the numerical month (+1 for offset)
    return new Date(Date.parse(month +' 1, 2012')).getMonth()+1
}