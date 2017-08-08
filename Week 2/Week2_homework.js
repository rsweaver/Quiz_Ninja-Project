// Question 1
// a. false
// b. false
// c. true
// B is false because test1 and test3 are two separate arrays, althought they
// have elements defined the same way they are considered separate arrays.

//Question 2
// The second loop will run through once regardless of the while condition
// since the condition will be evaluated AFTER the do statement is executed.
//  The first loop will evaluate the truthfulness of the first statement 
// BEFORE executing the statement

//Question 3
function hasDuplicate(array)
{
    
    // Delcare max length of array to loop through, and looping variable
    var max= array.length;
    var i;
    
    //Loop through each index of the array
    for (i=0; i < max; i++)
        {

            //Declare variables
            var newArrayFront; //if index is not beginning or end, we must divide the array, front half
            var newArrayEnd; // back  half
            var number; 
            var index;
            var newArray;
            
            number = array[i]; // the number at index i of the array
            
                        
            switch (i)
                {
                case 0: //if we are at the front we can just remove the first index
                        //remove index 0, declare new array 
                    
                    newArray = array.slice(1, max);                  
                    if (newArray.indexOf(number) > 0) //if number is in the new array this will be positive
                        {
                            console.log("The number " + number + " has a duplicate!")
                        }
                    else
                        {
                            console.log("The number " + number + " is not a duplicate!")   
                        }
                    break;
                    
                case max-1: //if we are at the end we can just remove the last index
                        //remove index max-1, declare new array 
                    
                    newArray = array.slice(0, max-1);                   
                    if (newArray.indexOf(number) > 0) //if number is in the new array this will be positive
                        {
                            console.log("The number " + number + " has a duplicate!")
                        }
                    else
                        {
                            console.log("The number " + number + " is not a duplicate!")   
                        }
                    break;
                    
                default: //if we are somewhere in the middle we must split the array around index i
                        //remove index 0 up to i and declare new array as the front
                    
                    newArrayFront = array.slice(0, i);
                    
                        //remove index i+1 to index max and declare new array as the end
                    newArrayEnd = array.slice(i+1, max);
            
                        //make a new array by concatenating the new front and new end
                    newArray = newArrayFront.concat(newArrayEnd);
                    
                        //find index of the number in the concatenated array
                    index = newArray.indexOf(number);
                    
                    if ( index >0) // if number is in new array index > 0
                        {
                            
                            console.log("The number " + number + " has a duplicate!")
                         }
                    else
                        {
                            console.log("The number " + number + " is not a duplicate!")
                        }                     
                }        
        }    
}


hasDuplicate([2,3,6, 7, 9, 4,4,6]) // example output


// Question 4

function toBinary(n)
{
    
    if (n===0)  // if n is 0, output 0
        {
            console.log("0");
        }
    else
        {
            var m = []; //intialize empty array to fill binary numbers
            while(n > 0)  // while n >0 we will append 0's and 1's
                {
                    // we will take our number and divide by 2, for each division we will write down the 
                    // remainder until we can not longer divide by 2
                    
                    if((n%2)===0) //if our number divides 2, we will have a 0 
                        {
                            m.unshift("0"); //add number to left since binary reads right to left
                            n = n/2;  //now halve our number to test for the next largest power of 2
                        }
                    else if (n!=1) //if our number does not, we will have a 1
                            // if our number is 1, we must stop
                        {
                            m.unshift("1");
                            n = (n-1)/2; // we halve rounding down
                        }
                    else // we have reached 1 and to end of dividing we will add our last 1, and set n=0 to break it
                        {
                            m.unshift("1");
                            n =0;
                        }
                }
            console.log(m.join("")); // print the array but remove the commas
        }

}

toBinary(8)