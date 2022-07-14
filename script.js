document.getElementById('loginBtn').addEventListener('click', function(event){
    var loginArea = document.getElementById('login-area');
    var traArea = document.getElementById('trangection-area');
    loginArea.style.display ='none';
    traArea.style.display = 'block';
    
})

// const dipositeBtn = document.getElementById('addDiposite');
// dipositeBtn.addEventListener('click', function(event){

//     const dipositeAmount = document.getElementById('dipositeNumber').value;
//     const subDiposite = parseFloat(dipositeAmount);
//     const currentDiposite = document.getElementById('currentDiposite').innerText;
//     const currentDipositeNumber = parseFloat(currentDiposite);
    
//     var totalDiposite = currentDipositeNumber + subDiposite;
//     document.getElementById('currentDiposite').innerText = totalDiposite;

//     const oldBalance = document.getElementById('totalBalance').innerText;
//     const oldBalanceNumber = parseFloat(oldBalance);
//     const totalBalance = subDiposite + oldBalanceNumber;
//     document.getElementById('totalBalance').innerText = totalBalance;
//     document.getElementById('dipositeNumber').value = "";

// })
// ====================================================My Code==================================
// ================================================================================================


function makeValue(id){
   var dipositeNumber = document.getElementById(id).value;
   var flatDipositeNumber = parseFloat(dipositeNumber);
   return flatDipositeNumber;
   
}
function makeText(id){
    var dipositeText = document.getElementById(id).innerText;
    var flatDipositeText = parseFloat(dipositeText);
    return flatDipositeText;
    }
 
function diposite(a,b){
    var total = a + b;
    return total;
}
function withdraw(a,b){
    var total = b - a;
    return total;
}



document.getElementById('dipositeBtn').addEventListener('click', function(event){

 var result  = diposite(makeValue('dipositeNumber'), makeText('currentDiposite'));
 var resultBalance = diposite(makeValue('dipositeNumber'), makeText('totalBalance'));
 document.getElementById('currentDiposite').innerText = result;
 document.getElementById('totalBalance').innerText = resultBalance;
 document.getElementById('dipositeNumber').value ="";

})

document.getElementById('withdrawAmountBtn').addEventListener('click', function(event){
    
    var withdrawResult  = diposite(makeValue('withdrawAmount'), makeText('currentWithdraw'));
    var withdrawResultBalance = withdraw(makeValue('withdrawAmount'), makeText('totalBalance'));
    document.getElementById('currentWithdraw').innerText = withdrawResult;
    document.getElementById('totalBalance').innerText = withdrawResultBalance;
    document.getElementById('withdrawAmount').value ="";

})

















