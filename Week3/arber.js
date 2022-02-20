/* Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
	•	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
    (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
    Print the result to the console.
	•	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
	•	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
 */

        var ages = [3, 9, 23, 64, 2, 8, 28, 93];

        console.log("The diffrence between the last and first element in the ages array =  " +((ages[ages.length - 1]) - (ages[ages.length - ages.length])));

        // add a new elemnt to the array

        ages.push(10);

        // print out the previus command last - first element 

        console.log("The diffrence between the last and first element in the ages array =  " +((ages[ages.length - 1]) - (ages[ages.length - ages.length])));

        // part 3 calculate the average age

        var i, sum = 0;

        for( let i = 0; i < ages.length; i++){
                sum = sum + ages[i];
        }

        console.log("The avereage age is = "+ (sum / ages.length));

    /*     Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
	•	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
	•	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
 */

            var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

            sum=0;

    for(i=0; i<names.length; i++)

    {

        sum = sum + names[i].length;

    }

    console.log("Average letters per name in the names array is : ",sum/names.length);

    // concatenate all the names together seperated by a space

    var con= names[0];

for(i=1; i<names.length; i++)

{

    con = con.concat(" ",names[i]);

}

console.log("Concatenated  names : ",con);


/* How do you access the last element of any array? answer --> array[array.length -1]
	•	How do you access the first element of any array? --> array[0] or array[array.length - array.length]
	•	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array */

// Creating new array nameLength from names array

var nameLengths = [];

for(i=0; i<names.length; i++)

{

    nameLengths[i] = names[i].length;

}

//Calculating sum of all elements in the nameLengths array

sum=0;

for(i=0; i<nameLengths.length; i++)

{

    sum = sum + nameLengths[i];

}

console.log("Sum of all elements in the nameLengths array is : ",sum);

////////////////////////////////////////////////////////////////////////////////

//Function to concatenate same word for n times

    function concatNTimes(word, n)

    {

        var con= word;

        for(i=1; i<=n; i++)

        {

            con = con.concat(word);

        }

        return con;

    }

    //Printing the concatenated same word for n times using function call

    console.log("Concatenated words : ",concatNTimes("Hello", 5));


    console.log("\n\n");

    //////////////////////////////////////////////////////////////////////

    //Function to create full name with first name and last name

    function fullName(firstName, lastName)

    {

        return firstName.concat(" ", lastName);

    }

    //Printing full name using function call

    console.log("Full Name : ",fullName("Arber", "Kadriu"));

    console.log("\n\n")
    ////////////////////////////////////////////////////////////////////////

    // Function to calculate the sum of an array and return true if sum > 100

    function sumGreaterThan(arr){

        for( i = 0; i < arr.length ; i++){
            sum = sum + arr[i];
        }
        if(sum > 100){

            return true;
        }
        else{
            return false;
        }

    }

    ///////////////////////////////////////////////////////////////////////////////

    // Function that takes an array of numbers and returns the average of all elemnts

    function arrayAverage(arr){
        sum = 0;
        for ( i = 0; i < arr.length; i++){
            sum = sum + arr[i];

        }
        return (sum/arr.length);
    }

        //////////////////////////////////////////////////////////////////////////////

        // Function that takes in 2 arrays and returns true if the average of 1st is greater that average of 2nd

        function averageOfTwo(arr1,arr2){

            var sum1 = 0;
            var sum2 = 0;

            for(i = 0; i < arr1.length;i++){
                sum1 = sum1 + arr1[i];
            }
            var average1 = sum1/arr1.length;

            for(i = 0; i < arr2.length; i++){
                sum2 = sum2 + arr2[i];
            } 
            var average2 = sum2/arr2.length;

            if(average1 > average2){
                return true;
            }
            else{
                return false;
            }
        }

        /////////////////////////////////////////////////////////////////////////////

        // Function that will return true or false if you can buy drink

        //Function willBuyDrink

    function willBuyDrink(isHotOutside, moneyInPocket)

{

    if((isHotOutside) && (moneyInPocket > 10.50))

    {

        return true;

    }

    else

    {

        return false;

    }

}

//function testing

var hotOutside = true;

var moneyInthePocket = 30.5;

//Printing the return value of willBuyDrink function

console.log("Can we buy drink ?  ",willBuyDrink(hotOutside, moneyInthePocket));


console.log("Write a custom program and show what it does\n");

        

     
// program to generate end of fibonacci series for n terms


function fibonacci(number){

    let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    debugger
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}
 
    
    



console.log(fibonacci(5));