// Get references to the input elements and the result div
const principalInput = document.getElementById('principal');
const rateInput = document.getElementById('rate');
const frequencyInput = document.getElementById('frequency');
const yearsInput = document.getElementById('years');
const calculateButton = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

// Add event listener to the calculate button
calculateButton.addEventListener('click', calculateCompoundInterest);

// Function to perform the calculation
function calculateCompoundInterest() {
    // 1. Get values from input fields and convert them to numbers
    const P = parseFloat(principalInput.value); // Principal
    const rate = parseFloat(rateInput.value);   // Annual rate in percent
    const n = parseFloat(frequencyInput.value); // Compounding frequency per year
    const t = parseFloat(yearsInput.value);   // Time in years

    // 2. Basic Validation: Check if inputs are valid numbers
    if (isNaN(P) || isNaN(rate) || isNaN(n) || isNaN(t) || P < 0 || rate < 0 || n <= 0 || t < 0) {
        resultDiv.innerHTML = '<p style="color: red;">Error: Please enter valid positive numbers in all fields. Compounding frequency must be greater than 0.</p>';
        return; // Stop the function execution
    }

    // 3. Convert annual rate percentage to a decimal
    const r = rate / 100;

    // 4. Calculate Compound Interest using the formula: A = P * (1 + r/n)^(n*t)
    const amount = P * Math.pow(1 + r / n, n * t);

    // 5. Calculate the total interest earned
    const totalInterest = amount - P;

    // 6. Display the results in the resultDiv
    // Use toFixed(2) to format the currency to two decimal places
    resultDiv.innerHTML = `
        <p><strong>Future Value (A):</strong> ${amount.toFixed(2)}</p>
        <p><strong>Principal Amount (P):</strong> ${P.toFixed(2)}</p>
        <p><strong>Total Interest Earned:</strong> ${totalInterest.toFixed(2)}</p>
    `;
}