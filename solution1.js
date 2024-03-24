Input = ("enter students marks:")

//converting Input to a floating -point number

 let marks = parseFloat(Input)
 
//checking if marks is between 0 and 100 by using the AND Operator

if(marks>=0 && marks<=100){
    let grade

    if (marks > 79) {
        grade ='A'  
    }else if (marks >=60 && marks<=79) {
        grade = 'B'
    } else if (marks >=49 && marks<=59) {
        grade = 'C'   
    } else if (marks >=40 && marks<=49) {
        grade ='D'   
    } else {
        grade = 'E' 
    }

    // Output the grade
        
    console.log ( grade)
} else{
   console.log('!!!!Marks should be between 0 and 100' )
}g