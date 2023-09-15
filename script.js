var num = 0;

function add_1() {
    if (num >= 0 && num <= 9) {
        num++;
        console.log(num);       
    }
}

function minus_1() {
    if (num > 0) {
        num--;
        console.log(num);
    }
}

const button_add = document.querySelector("#btnadd");
button_add.addEventListener("click", add_1);

const button_minus = document.querySelector("#btnminus");
button_minus.addEventListener("click", minus_1);

