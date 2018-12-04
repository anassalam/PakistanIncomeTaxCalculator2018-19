function annualTax (pay) {
  
  var taxObject = {
	annualIncome : 0,
	monthlyIncome: 0,
	taxRate: 0,
	monthlyIncomeAfterTax : 0,
	annualIncomeAfterTax: 0
  };
  
  if (pay < 400000){ //1st Tax Slab
	  taxObject.annualIncome = pay;
	  taxObject.monthlyIncome = pay/12;
	  taxObject.taxRate = 0;
	  taxObject.monthlyIncomeAfterTax = pay/12;
	  taxObject.annualIncomeAfterTax = pay;
    return taxObject;
  }
  else if (pay < 800000){ //2nd Tax Slab
    return "PKR.1000/-";
  }
  else if (pay < 1200000){ //3rd Tax Slab
    return "PKR.2000/-";
  }
  else if (pay < 2500000){ //4th Tax Slab
    return "PKR." + (0.05*(pay-1200000)) + "/-";    
  }
  else if (pay < 4000000){ //5th Tax Slab
    return "PKR." + (65000+(0.15*(pay-2500000))) + "/-";    
  }
  else if (pay < 8000000){ //6th Tax Slab
    return "PKR." + (290000+(0.20*(pay-4000000))) + "/-";    
  }
  else if (pay >= 8000000){ //7th Tax Slab
    return "PKR." + (1090000+(0.25*(pay-8000000))) + "/-";    
  }

  return "Change Me";
}

// Change this value to test
console.log(annualTax(720000));
