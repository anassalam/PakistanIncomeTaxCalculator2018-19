function annualTax (pay) {
  // Only change code below this line
  
  var taxObject = {

	annualIncome : 0,
	monthlyIncome: 0,
	taxRate: 0,
	monthlyIncomeAfterTax : 0,
	annualIncomeAfterTax: 0
	
  };
  
  
  
  if (pay < 400000){
	  
	  
	  taxObject.annualIncome = pay;
	  taxObject.monthlyIncome = pay /12;
	  taxObject.taxRate = 0;
	  taxObject.monthlyIncomeAfterTax = pay /12;
	  taxObject.annualIncomeAfterTax = pay;
	  
    return taxObject;
  }
  else if (pay < 800000){
    return "PKR.1000/-";
  }
  else if (pay < 1200000){
    return "PKR.2000/-";
  }
  else if (pay < 2500000){
    return "PKR." + (0.05*(pay-1200000)) + "/-";    
  }
  else if (pay < 4000000){
    return "PKR." + (65000+(0.15*(pay-2500000))) + "/-";    
  }
  else if (pay < 8000000){
    return "PKR." + (290000+(0.20*(pay-4000000))) + "/-";    
  }
  else if (pay >= 8000000){
    return "PKR." + (1090000+(0.25*(pay-8000000))) + "/-";    
  }

  return "Change Me";
  // Only change code above this line
}

// Change this value to test
console.log(annualTax(20));