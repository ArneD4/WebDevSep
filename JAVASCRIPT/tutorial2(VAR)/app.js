//JAVASSCRIPT - VArIABLES 

/*VAR variable 
    
    re-update
    re-declare
*/

/// var can be value, string, boolean
/// var can be redeclared-reupdated 

var intecbrussel=1;
intecbrussel1 = "this is a string"
var intecbrussel2 = true;

first.innerHTML = "this are some variables: "  + intecbrussel + " / " + intecbrussel1 + " / " + intecbrussel2




///


book = {
    title:"This is title",
    author:"Who wrote it",
    pages: 564
}
second.innerHTML = book.title +" _ "+book.author +" _ "+ book.pages


///

intecbrussel = [1,2,3,4,5,6];

third.innerHTML = intecbrussel + " all these numbers are elements of an " + typeof intecbrussel


///

var test1;

test1 = intecbrussel

test1 = function myfunc(){return 1};
console.log(typeof test1)

forth.innerHTML = test1



let test = 5;
test=9;
/*let test = 4;*/
console.log(test)


/*let only re-update
const
const variable*/

const NewVariable= 'This is static variable'
//New variable = update ==> can not be updated
//const NewVariable = redeclare can not be redeclared
console.log(NewVariable)

fifth.innerHTML = NewVariable + "  " +  "this shit is static af"





