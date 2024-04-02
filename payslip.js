let print=()=>{
    let basicPay=parseInt(document.getElementById('basicpay').value);
    let houseRent=(document.getElementById('houserent').value=(basicPay/10));
    let dailyAllowance=(document.getElementById('dailyallowance').value=(basicPay/20));
    let travelExpense=(document.getElementById('travelexpense').value=basicPay*(15/100));
    let proFund=(document.getElementById('profund').value=basicPay*(15/100));
    let grossSalary=(document.getElementById('grosssalary').value=basicPay+houseRent+dailyAllowance+travelExpense+proFund);
    let netSalary=document.getElementById('netsalary').value=grossSalary-proFund; 
}
document.getElementById('basicpay').addEventListener('keyup',print);

let displayData=()=>{
    let basicPay=parseInt(document.getElementById('basicpay').value);
    let houseRent=(document.getElementById('houserent').value=(basicPay/10));
    let dailyAllowance=(document.getElementById('dailyallowance').value=(basicPay/20));
    let travelExpense=(document.getElementById('travelexpense').value=basicPay*(15/100));
    let proFund=(document.getElementById('profund').value=basicPay*(15/100));
    let grossSalary=(document.getElementById('grosssalary').value=basicPay+houseRent+dailyAllowance+travelExpense+proFund);
    let netSalary=document.getElementById('netsalary').value=grossSalary-proFund; 
    document.getElementById('tbody').innerHTML+=`<tr><td>${basicPay}</td>
    <td id="t1">${houseRent}</td>
    <td id="t2">${dailyAllowance}</td>
    <td id="t3">${travelExpense}</td>
    <td id="t4">${proFund}</td>
    <td id="t5">${grossSalary}</td>
    <td id="t6">${netSalary}</td></tr>`
    document.getElementById('basicpay').value=""
    document.getElementById('houserent').value=""
    document.getElementById('dailyallowance').value=""
    document.getElementById('travelexpense').value=""
    document.getElementById('profund').value=""
    document.getElementById('grosssalary').value=""
    document.getElementById('netsalary').value="" 
    
}


document.getElementById('btnn').addEventListener('click',displayData)
document.getElementById('delete').addEventListener('click',del)