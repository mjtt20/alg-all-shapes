
// error handling

function updateParagraph(input) {
    var userInput = document.getElementById(input).value;
    if (isNaN(userInput)) {
        alert('Please enter number!')
        document.getElementById(input).value = '';
    }
    else {

    }
}



// function for random color 

function changeBG(input) {
    const letters = '0123465789ABCDEF'
    let hexCode = '#';
    for (var i = 0; i < 6; i++) {
        hexCode += letters[Math.floor(Math.random() * 16)]
    }
    const getTheElenemt = document.getElementById(input);
    getTheElenemt.style.backgroundColor = hexCode;
}
function normal(input) {
    const getTheElenemt = document.getElementById(input);
    getTheElenemt.style.backgroundColor = 'white';
}


//cm to m & conversion

function addList(input, input2) {
    const resultList = document.getElementById('olList');
    const listAdd = document.createElement('li');
    resultList.appendChild(listAdd);
    // listAdd.textContent = input+''+ input2;

    const paragrap = document.createElement('p');
    paragrap.textContent = input;
    paragrap.classList.add('p-tag');
    const span = document.createElement('span');
    span.textContent = input2;
    span.classList.add('span-tag');
    listAdd.appendChild(paragrap);
    listAdd.appendChild(span);
    listAdd.classList.add('liST');
    const buttonSQ = document.createElement('button');
    buttonSQ.textContent = 'Covert to m2'


    // all alg

    buttonSQ.classList.add('btn-tag');
    buttonSQ.onclick = function () {
        span.textContent = (input2 / 10000).toFixed(4);

    }
    listAdd.appendChild(buttonSQ);

}




// Triangle
document.getElementById('tri-btn').addEventListener('click', function () {
    const half = 0.5;
    const getTriInput = document.getElementById('tri-input');
    const triValue = getTriInput.value;
    const triInputValue = parseFloat(triValue);
    const getTriInput2 = document.getElementById('tri-input2');
    const triValue2 = getTriInput2.value;
    const secoundThiInputValue = parseFloat(triValue2);
    const alg = half * triInputValue * secoundThiInputValue;
    if (!isNaN(alg)) {
        const inputValue = 'Triangle';
        addList(inputValue, alg)
    } else {
        alert('enter value')
        getTriInput.value = '';
        getTriInput2.value = '';
    }

})

// Ellipse
document.getElementById('ell-btn').addEventListener('click', function () {
    const half = Math.PI;
    const getTriInput = document.getElementById('ell-input');
    const triValue = getTriInput.value;
    const triInputValue = parseFloat(triValue);
    const getTriInput2 = document.getElementById('ell-input2');
    const triValue2 = getTriInput2.value;
    const secoundThiInputValue = parseFloat(triValue2);
    const alg = (half * triInputValue * secoundThiInputValue).toFixed(4);
    if (!isNaN(alg)) {
        const inputValue = 'Ellipse';
        addList(inputValue, alg)
    } else {
        alert('enter value')
        getTriInput.value = '';
        getTriInput2.value = '';
    }
})

// Parallelogram
document.getElementById('par-btn').addEventListener('click', function () {
    const getTriInput = document.getElementById('par-input');
    const triValue = getTriInput.value;
    const triInputValue = parseFloat(triValue);
    const getTriInput2 = document.getElementById('par-input2');
    const triValue2 = getTriInput2.value;
    const secoundThiInputValue = parseFloat(triValue2);
    const alg = triInputValue * secoundThiInputValue;
    if (!isNaN(alg)) {
        const inputValue = 'Parallelogram';
        addList(inputValue, alg)
    } else {
        alert('enter value')
        getTriInput.value = '';
        getTriInput2.value = '';
    }
})

// Pentagon
document.getElementById('pen-btn').addEventListener('click', function () {
    const half = 0.5;
    const getTriInput = document.getElementById('pen-input');
    const triValue = getTriInput.value;
    const triInputValue = parseFloat(triValue);
    const getTriInput2 = document.getElementById('pen-input2');
    const triValue2 = getTriInput2.value;
    const secoundThiInputValue = parseFloat(triValue2);
    const alg = half * triInputValue * secoundThiInputValue;
    if (!isNaN(alg)) {
        const inputValue = 'Pentagon';
        addList(inputValue, alg)
    } else {
        alert('enter value')
        getTriInput.value = '';
        getTriInput2.value = '';
    }
})

// Rectangle
document.getElementById('rec-btn').addEventListener('click', function () {
    const getTriInput = document.getElementById('rec-input');
    const triValue = getTriInput.value;
    const triInputValue = parseFloat(triValue);
    const getTriInput2 = document.getElementById('rec-input2');
    const triValue2 = getTriInput2.value;
    const secoundThiInputValue = parseFloat(triValue2);
    const alg = triInputValue * secoundThiInputValue;
    if (!isNaN(alg)) {
        const inputValue = 'Rectangle';
        addList(inputValue, alg)
    } else {
        alert('enter value')
        getTriInput.value = '';
        getTriInput2.value = '';
    }
})

// Rhombus
document.getElementById('rho-btn').addEventListener('click', function () {

    const half = 0.5;
    const getTriInput = document.getElementById('rho-input');
    const triValue = getTriInput.value;
    const triInputValue = parseFloat(triValue);
    const getTriInput2 = document.getElementById('rho-input2');
    const triValue2 = getTriInput2.value;
    const secoundThiInputValue = parseFloat(triValue2);
    const alg = half * triInputValue * secoundThiInputValue;
    if (!isNaN(alg)) {
        const inputValue = 'Rhombus';
        addList(inputValue, alg)
    } else {
        alert('enter value')
        getTriInput.value = '';
        getTriInput2.value = '';
    }
})