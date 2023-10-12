// let loanAmount, intRate, yrs, payment;
function payment() { 
    
    let loanAmount = document.getElementById("loanValue").value;
    let intRate = document.getElementById("interestValue").value;
    let yrs = document.getElementById("yearsNo").value;
    let i = interest(intRate);
    let n = yrs*freq;
    let m = (loanAmount*(i*((1+i)**n))) / (((1 + i)**n) - 1);
    
    if (loanAmount == 0 || intRate == 0 || yrs == 0) {
        m = 0;
    }

    document.getElementById("mortgagePayment").innerText = m.toFixed(0); 
    document.getElementById("dollarSign").style.display = "inline";
    
    if (freq == 26) {
        console.log ("Bi-Weekly");
        document.getElementById("freqPay").innerHTML = "Bi-Weekly Payment:";
    } else if (freq == 52) {
        console.log ("Weekly");
        document.getElementById("freqPay").innerHTML = "Weekly Payment:";
    } else if (freq == 12) {
        console.log ("Monthly");
        document.getElementById("freqPay").innerHTML = "Monthly Payment:";
    }
}


function interest(a) {
    return ( ( (1 + ((a/100)/2))**(2/freq) ) - 1);
}

function frColor(x) {
    if (x == 26) {
        document.getElementById("bweek").style.backgroundColor = "#2c90dd"
        document.getElementById("month").style.backgroundColor = "rgb(16,74,181)"
        document.getElementById("week").style.backgroundColor = "rgb(16,74,181)"
    } else if (x == 12) {
        document.getElementById("month").style.backgroundColor = "#2c90dd"
        document.getElementById("bweek").style.backgroundColor = "rgb(16,74,181)"
        document.getElementById("week").style.backgroundColor = "rgb(16,74,181)"

    } else {
        document.getElementById("week").style.backgroundColor = "#2c90dd"
        document.getElementById("bweek").style.backgroundColor = "rgb(16,74,181)"
        document.getElementById("month").style.backgroundColor = "rgb(16,74,181)"
    }
}