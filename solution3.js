function calculateNetSalary(basicSalary,benefits){
    let taxrate = 0.25
    let nhifRate = 0.05
    let nssfRate = 0.06

    // calculating the grosssalary,payee,nhifdeductions,nssfdeductions,netsalary

     let grossSalary = basicSalary + benefits
     let payee = grossSalary * taxrate
     let nhifDeductions = grossSalary * nhifRate
     let nssfDeductions = grossSalary * nssfRate
     let netSalary = grossSalary - payee - nhifDeductions - nssfDeductions
  

// outputting the results by logging them

     console.log("Gross salary:" + grossSalary)
     console.log("Payee:" + payee)
     console.log("NHIF deductions:" + nhifDeductions)
     console.log("NSSF deductions:" + nssfDeductions)
     console.log("Net salary:" + netSalary)

}

Input = ("Enter basic salary")

// converting Input which is a string  to a floating number by using parseFloat

let basicSalary = parseFloat(Input)

input = ("Enter benefits")

// converting input  which is a string to a floating number by using parseFloat

let benefits = parseFloat(input)

// function call

calculateNetSalary(basicSalary,benefits)