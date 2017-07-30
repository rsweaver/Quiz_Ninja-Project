// Question 1
// a. 5
// b. false
// c. false

//Question 2
// a. 0
// b. 0
// c. 2
// d. 4
// e. 4

// Question 3
// The division will be executed before squaring r, and division is not communicative, so it matters which order it is done in
// F = (G * mass1 * mass2) / (r * r)

//Question 4

function isLeapYear(year)
{
    if (year%400 == 0 )
        {
            console.log(year +" is a leap year!");
        }

    else if (year%4== 0 && year%100!= 0)
        {
            console.log(year + " is a leap year!")
        }
    else
        {
            console.log(year + " is not a leap year!")
        }
}

isLeapYear(1200)

isLeapYear(100)

isLeapYear(88)

isLeapYear(79)

