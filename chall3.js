// Constants for tax rates and deducts
const KRA_TAX_RATE = 0.3;
const NHIF_RATE = 0.02;
const NSSF_RATE = 0.06;

// Function to evaluate Net Salary
function evaluateNetSalary(basicSalary, benefits) {
    // Evaluate gross salary
    let    grossSalary = basicSalary + benefits;

    // Evaluate PAYE (Tax)
         let payee = grossSalary * KRA_TAX_RATE;

    // Calculate NHIF Deduct
let nhifDeducts = grossSalary * NHIF_RATE;

    // Evaluate NSSF Deduct
    let nssfDeducts   = grossSalary * NSSF_RATE;

    // Evaluate Net Salary
    let netSalary = grossSalary - payee - nhifDeducts - nssfDeducts;

    return {
        grossSalary,
        payee,
        nhifDeducts,
        nssfDeducts,
        netSalary
    };
}

// an example
const basicSalary = 100000;
const benefits = 30000;
const result = evaluateNetSalary(basicSalary, benefits);
console.log(result);
  
  