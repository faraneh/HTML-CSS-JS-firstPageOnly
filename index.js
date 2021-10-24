//////////////////// Links to WebPage ////////////////////
const signInForm = document.querySelector('.signInForm');
const signUpForm = document.querySelector('.signUpForm');

const signInComplete = document.querySelector('.signInComplete');
const signUpComplete = document.querySelector('.signUpComplete');

const signInUserName = document.getElementById("signInUserName");
const signInPassword = document.getElementById('signInPassword');
const signUpUserName = document.getElementById('signUpUserName');
const signUpPassword = document.getElementById('signUpPassword');
const signUpPasswordCheck = document.getElementById('signUpPasswordCheck');

const biginnerBtn = document.querySelector('.TourSelectBtn1');
const intermediateBtn = document.querySelector('.TourSelectBtn2');
const advanceBtn = document.querySelector('.TourSelectBtn3');
const secondQ = document.querySelector('.secondQ');
const secondQ0 = document.querySelector('.secondQ0');
const secondQ1 = document.querySelector('.secondQ1');
const secondQ2 = document.querySelector('.secondQ2');
const secondQ3 = document.querySelector('.secondQ3');


const finalPlans = document.querySelector('.finalPlans');
const placeToGo = document.querySelector('.placeToGo');
const planTime = document.querySelector('.planTime');
const planPrice1 = document.querySelector('.planPrice1');
const planPrice2 = document.querySelector('.planPrice2');

const planBackBtn = document.querySelector('.planBackBtn');




//////////////////// Event Listeners ////////////////////

//sign up / sign in
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputValuesSignIn();
});

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputValuesSignUp();
});

//plan picker
biginnerBtn.addEventListener('click', (e) => { 
    biginnerNextQuestion();
});

intermediateBtn.addEventListener('click', (e) => { 
    intermediateNextQuestion();
});

advanceBtn.addEventListener('click', (e) => { 
    advanceNextQuestion();
});

secondQ.addEventListener('click', (e) => { 
    backToQ1();
});

secondQ1.addEventListener('click', (e) => { 
    if(ChoosedProgram.length === 1) { 
        ChoosedProgram.push('Mountain');
    } else {
        ChoosedProgram.pop();
        ChoosedProgram.push('Mountain');
    }
    showCamps();
});

secondQ2.addEventListener('click', (e) => { 
    if(ChoosedProgram.length === 1) { 
        ChoosedProgram.push('Forest');
    } else {
        ChoosedProgram.pop();
        ChoosedProgram.push('Forest');
    }
    showCamps();
});

secondQ3.addEventListener('click', (e) => { 
    if(ChoosedProgram.length === 1) { 
        ChoosedProgram.push('Village');
    } else {
        ChoosedProgram.pop();
        ChoosedProgram.push('Village');
    }
    showCamps();
});

planBackBtn.addEventListener('click', (e) => {
    backFromFinal()
})


//////////////////// Data ////////////////////

const Programs =  {
    Biginner : {
        Mountain : { 
            Spring : ['2 days','12 July', '14 July', 'Misty Mountain', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['1 days','12 July', '14 July', 'Pole Mountain', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['2 days','12 July', '14 July', 'Ruiz Mountain', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['3 days','12 July', '14 July', 'Mountains of Angmar', 'All include', '200$ per person', '300$ for couples'],
        },
        Forest : {
            Spring : ['2 days','12 July', '14 July', 'Fangorn', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['2 days','12 July', '14 July', 'Chetwood', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['4 days','12 July', '14 July', 'Woodland', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['2 days','12 July', '14 July', 'Parkway', 'All include', '200$ per person', '300$ for couples'],
        },
        Village : { 
            Spring : ['2 days','12 July', '14 July', 'Waterton', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['3 days','12 July', '14 July', 'North Hatley', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['2 days','12 July', '14 July', 'Blue Rocks', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['3 days','12 July', '14 July', 'Harrison', 'All include', '200$ per person', '300$ for couples'],
        },
    },
    Intermediate : { 
        Mountain : { 
            Spring : ['2 days','12 July', '14 July', 'Shadow Mountain', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['1 days','12 July', '14 July', 'Misty Mountain', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['2 days','12 July', '14 July', 'Ruiz Mountain', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['1 days','12 July', '14 July', 'Pole Mountain', 'All include', '200$ per person', '300$ for couples'],
        },
        Forest : {
            Spring : ['4 days','12 July', '14 July', 'Parkway', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['2 days','12 July', '14 July', 'Woodland', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['3 days','12 July', '14 July', 'Chetwood', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['2 days','12 July', '14 July', 'Fangorn', 'All include', '200$ per person', '300$ for couples'],
        },
        Village : { 
            Spring : ['2 days','12 July', '14 July', 'North Hatley', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['3 days','12 July', '14 July', 'Harrison', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['2 days','12 July', '14 July', 'North Hatley', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['3 days','12 July', '14 July', 'Waterton', 'All include', '200$ per person', '300$ for couples'],
        },
    },
    Advance : {
        Mountain : { 
            Spring : ['5 days','12 July', '14 July', 'Misty Mountain', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['3 days','12 July', '14 July', 'Mountains of Angmar', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['4 days','12 July', '14 July', 'Pole Mountain', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['2 days','12 July', '14 July', 'Ruiz Mountain', 'All include', '200$ per person', '300$ for couples'],
        },
        Forest : {
            Spring : ['3 days','12 July', '14 July', 'Amazon', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['4 days','12 July', '14 July', 'Fangorn', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['3 days','12 July', '14 July', 'Chetwood', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['4 days','12 July', '14 July', 'Woodland', 'All include', '200$ per person', '300$ for couples'],
        },
        Village : { 
            Spring : ['2 days','12 July', '14 July', 'North Hatley', 'All include', '200$ per person', '300$ for couples'],
            Summer : ['4 days','12 July', '14 July', 'Waterton', 'All include', '200$ per person', '300$ for couples'],
            Automn : ['5 days','12 July', '14 July', 'Harrison', 'All include', '200$ per person', '300$ for couples'],
            Winter : ['3 days','12 July', '14 July', 'Blue Rocks', 'All include', '200$ per person', '300$ for couples'],
        },
    }
}

var ChoosedProgram = [];


//////////////////// Functions ////////////////////

//signin check
checkInputValuesSignIn = () => { 
    const signInUserNameVal = signInUserName.value.trim();
    const signInPasswordVal = signInPassword.value.trim();

    let signInUserNameReg = /\d*(?:[a-zA-Z]){3,}\d*/;
    if(signInUserNameReg.test(signInUserNameVal)) { 
        signInUserName.style.border = "2px solid green";
    } else if(!signInUserNameReg.test(signInUserNameVal)) { 
        signInUserName.style.border = "2px solid red";
    }

    if (signInPasswordVal.length > 4) { 
        signInPassword.style.border = "2px solid green";
    } else {
        signInPassword.style.border = "2px solid red";
    }

    if (signInUserNameReg.test(signInUserNameVal) && signInPasswordVal.length > 4) { 
        //sign in complete
        signInForm.style.display = 'none';
        signInComplete.style.display = 'block';
    } 

}

//signup check
checkInputValuesSignUp = () => {
    const signUpUserNameVal = signUpUserName.value.trim();
    const signUpPasswordVal = signUpPassword.value.trim();
    const signUpPasswordCheckVal = signUpPasswordCheck.value.trim();

    let signUpUserNameReg = /\d*(?:[a-zA-Z]){3,}\d*/;
    if(signUpUserNameReg.test(signUpUserNameVal)) { 
        signUpUserName.style.border = "2px solid green";
    } else if(!signUpUserNameReg.test(signUpUserNameVal)) { 
        signUpUserName.style.border = "2px solid red";
    }

    if (signUpPasswordVal.length > 4) { 
        signUpPassword.style.border = "2px solid green";
    } else {
        signUpPassword.style.border = "2px solid red";
    }

    if (signUpPasswordVal === signUpPasswordCheckVal) { 
        signUpPassword.style.border = "2px solid green";
        signUpPasswordCheck.style.border = "2px solid green";
    } else if (signUpPasswordVal != signUpPasswordCheckVal) { 
        signUpPassword.style.border = "2px solid red";
        signUpPasswordCheck.style.border = "2px solid red";
    }


    if (signUpUserNameReg.test(signUpUserNameVal) && signUpPasswordVal.length > 4 && signUpPasswordVal === signUpPasswordCheckVal) { 
        //Sign up complete
        signUpForm.style.display = 'none';
        signUpComplete.style.display = 'block';
    }

}

//programs

biginnerNextQuestion = () => {
    biginnerBtn.style.display = 'none';
    intermediateBtn.style.display = 'none';
    advanceBtn.style.display = 'none';
    secondQ0.style.display = 'flex';
    secondQ1.style.display = 'flex';
    secondQ2.style.display = 'flex';
    secondQ3.style.display = 'flex';

    ChoosedProgram.push('Biginner');
    // console.log(ChoosedProgram);
}

intermediateNextQuestion = () => {
    biginnerBtn.style.display = 'none';
    intermediateBtn.style.display = 'none';
    advanceBtn.style.display = 'none';
    secondQ0.style.display = 'flex';
    secondQ1.style.display = 'flex';
    secondQ2.style.display = 'flex';
    secondQ3.style.display = 'flex';

    ChoosedProgram.push('Intermediate');
    // console.log(ChoosedProgram);
}

advanceNextQuestion = () => {
    intermediateBtn.style.display = 'none';
    advanceBtn.style.display = 'none';
    biginnerBtn.style.display = 'none';
    secondQ0.style.display = 'flex';
    secondQ1.style.display = 'flex';
    secondQ2.style.display = 'flex';
    secondQ3.style.display = 'flex';

    ChoosedProgram.push('Advance');
    // console.log(ChoosedProgram);
}

backToQ1 = () => { 
    intermediateBtn.style.display = 'flex';
    biginnerBtn.style.display = 'flex';
    advanceBtn.style.display = 'flex';
    secondQ0.style.display = 'none';
    secondQ1.style.display = 'none';
    secondQ2.style.display = 'none';
    secondQ3.style.display = 'none';

    ChoosedProgram.pop();
    // console.log(ChoosedProgram);
}


showCamps = () => { 

    const level = ChoosedProgram[0];
    const place = ChoosedProgram[1];

    const table = Object.entries(Programs).filter(el => el[0] === level).slice(0,1)[0][1];
    const table2 = Object.entries(table).filter(el => el[0] === place)[0].slice(1)[0];

    console.log(table2)

    secondQ0.style.display = 'none';
    secondQ1.style.display = 'none';
    secondQ2.style.display = 'none';
    secondQ3.style.display = 'none';

    finalPlans.style.display= 'block';
    placeToGo.innerHTML = table2.Automn[3];
    planTime.innerHTML = `When : ${table2.Automn[0]} - ${table2.Automn[1]} to ${table2.Automn[2]}`
    planPrice1.innerHTML = `Price for each : ${table2.Automn[5]} - ${table2.Automn[4]}`
    planPrice2.innerHTML = `Price for couples : ${table2.Automn[6]} - ${table2.Automn[4]}`
    
}

backFromFinal = () => { 
    finalPlans.style.display= 'none';
    secondQ0.style.display = 'flex';
    secondQ1.style.display = 'flex';
    secondQ2.style.display = 'flex';
    secondQ3.style.display = 'flex';

    ChoosedProgram.pop();
}