/* 
 Tip Calculator
*/
const billAmount = document.getElementById('billTotalInput')
const tipAmount = document.getElementById('tipInput')
const numOfPerson = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

let numberOfPeoples = Number(numOfPerson.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    const billAmountTotal = Number(billAmount.value)
    // get the tip from user & convert it into a percentage 
    const tipPercentage = Number(tipAmount.value) / 100
  
    const tipTotal = tipPercentage * billAmountTotal
    const Total = tipTotal + billAmountTotal
    let perPersonAmount = Total / numberOfPeoples
    
    // update the perPersonTotal on DOM & show it to user
    totalBillAmount.innerText = `Rs ${Total}`
    perPersonTotal.innerText = `Rs ${perPersonAmount.toFixed(2)}`
  
  }
  
  
  const increasePeople = () => {
    // increment the amount of people
    numberOfPeoples += 1
    // update the DOM with the new number of people
    numOfPerson.innerText = numberOfPeoples
  
    calculateBill()
  
  }
  

  const decreasePeople = () => {
    // if amount is 1 or less simply return
    if(numberOfPeoples <=1){
      alert('you have not select number of people more than one')
    }
    
    // decrement the amount of people
    numberOfPeoples -= 1
  
    // update the DOM with the new number of people
    numOfPerson.innerText = numberOfPeoples
  
  
    calculateBill()
  
  }