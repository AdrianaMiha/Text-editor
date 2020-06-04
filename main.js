const getS = selector => document.querySelector(selector);

// Кнопка Edit
function editBtn() {
    getS('.area').value = getS('.top').innerHTML;
    getS('.edit-block').style.display = 'block'
    getS('.style-block').classList.add('hidden')
}

// Кнопка Style
function styleBtn() {
    getS('.style-block').classList.remove('hidden')
    getS('.edit-block').style.display = 'none'
}

// Кнопка Save
function saveBtn() {
    getS('.top').innerHTML = getS('.area').value;
    // getS('.edit-block').classList.add('hidden')
    getS('.edit-block').style.display = 'none'
}

//Radio
let size;
function fontSize() {
    getS('.top').style.fontSize = event.target.value;
    size = getS('.top').style.fontSize
    if (getS('.top').style.fontSize === size) {
        event.target.setAttribute('checked', 'true')
    }
}

//Select
function fontFamily() {
    getS('.top').style.fontFamily = event.target.value;
    let fam = getS('.top').style.fontFamily;
}

//Checkboxes
function fontWeight() {
    getS('.top').style.fontWeight = event.target.checked ? 'bold' : 'normal';
}

function fontStyle() {
    getS('.top').style.fontStyle = event.target.checked ? 'italic' : 'normal';
}

// Text Color
const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'white', 'pink', 'coral', 'purple']
function textColor() {
    if (getS('.bottom').lastElementChild.classList.contains('colors')) {
        getS('.colors').remove();
    }
    let str = '';
    for (let i = 0; i < colors.length; i++) {
        str += `<div class="color-box" style="background: ${colors[i]}" onclick="chooseTextColor()"></div>`;
    }
    let div = document.createElement('div');
    div.className = "colors";
    div.innerHTML = str
    getS('.bottom').append(div)
}

function chooseTextColor() {
    getS('.top').style.color = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement)
}

//Background Color
const backgrounds = ['violet', 'olivedrab', 'royalblue', 'yellowgreen', 'mistyrose', 'thistle', 'seagreen', 'tomato', 'aqua']
function backgroundColor() {
    if (getS('.bottom').lastElementChild.classList.contains('colors')) {
        getS('.colors').remove();
    }
    let str = '';
    for (let i = 0; i < colors.length; i++) {
        str += `<div class="color-box" style="background: ${backgrounds[i]}" onclick="chooseBackgroundColor()"></div>`;
    }
    let div = document.createElement('div');
    div.className = "colors";
    div.innerHTML = str
    getS('.bottom').append(div)
}

function chooseBackgroundColor() {
    getS('.top').style.background = event.target.style.background;
    getS('.bottom').removeChild(event.target.parentElement)
}

function addBtn() {
    getS('.second-step').classList.remove('hidden');
    getS('.first-step').classList.add('hidden');
}

//Table
function getTable() {
    getS('.table-box').classList.remove('hidden');
    getS('.list-box').classList.add('hidden');
}

function createTable() {
    const countTR = getS('.countTR').value;
    const countTD = getS('.countTD').value;
    let table = `<table style="width: ${getS('#tdW').value}px" >`;
    for (let i = 1; i <= countTR; i++) {
        table += '<tr>';
        for (let j = 1; j <= countTD; j++) {
            table += `<td style="height: ${getS('#tdH').value}px; border: ${getS('#bW').value}px ${getS('#selectType').value} ${getS('#selectColor').value}">TD</td>`
        }
        table += '</tr>'
    }
    table += `<table>`;
    getS('.countTR').value = '';
    getS('.countTD').value = '';
    getS('#bW').value = '';
    getS('#tdW').value = '';
    getS('#tdH').value = '';
    getS('#selectType').value = 'black';
    getS('#selectColor').value = 'solid';
    getS('.area').value += table;
    getS('.second-step').classList.add('hidden');
    getS('.first-step').classList.remove('hidden')
}

// Списки
function getList() {
    getS('.list-box').classList.remove('hidden');
    getS('.table-box').classList.add('hidden')
}

function createList() {
    let countLi = getS('#CL').value;
    let ul = `<ul style="list-style-type:${getS('#types').value}">`;
    for (let i = 1; i <= countLi; i++) {
        ul += `<li> item ${i}</li>`
    }
    ul += '</ul>';
    getS('#CL').value = '';
    getS('#types').value = 'circle';
    getS('.area').value += ul;
    getS('.second-step').classList.add('hidden');
    getS('.first-step').classList.remove('hidden')
}








