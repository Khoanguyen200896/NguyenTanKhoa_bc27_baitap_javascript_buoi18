var numArray = [];
var numArray2 = [];

this.addEventListener("load", function () {
    var addNum = document.getElementById("addNum");
    var addNum2 = document.getElementById("addNum2");
});

function addNumButton() {
    numArray.push(addNum.value * 1);
    document.getElementById("numArray").innerHTML = `${numArray}`;
}

function sum() {
    var soDuongArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuongArray.push(numArray[i]);
        }
    }
    var total = 0;
    for (var i = 0; i < soDuongArray.length; i++) {
        total = soDuongArray[i] + total;
    }
    document.getElementById("tongCong").innerHTML = `${total}`;
}

function soDuong() {
    var soDuongArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuongArray.push(numArray[i]);
        }
    }
    document.getElementById(
        "demSo"
    ).innerHTML = `Số lượng số dương : ${soDuongArray.length}`;
}

/*3*/
function minNum() {
    var min = Math.min(...numArray);
    document.getElementById("soNhoNhat").innerHTML = `Số nhỏ nhất là : ${min}`;
}

/*4*/
function soDuongNhoNhat() {
    var soDuongArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuongArray.push(numArray[i]);
        }
    }
    var min = Math.min(...soDuongArray);
    document.getElementById(
        "soDuongNhoNhat"
    ).innerHTML = `Số nhỏ nhất là : ${min}`;
}
/*5*/
function soChanCuoiCung() {
    var soChanArray = [];
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {
            soChanArray.push(numArray[i]);
        }
    }
    document.getElementById(
        "soChanCuoiCung"
    ).innerHTML = `Số chẵn cuối cùng là : ${soChanArray[soChanArray.length - 1]}`;
}

function swapIndex() {
    // lay value
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    // bat dau swap
    var tempIndex1 = numArray[num1];
    numArray[num1] = numArray[num2];
    numArray[num2] = tempIndex1;

    document.getElementById("afterSwapArray").innerHTML = `${numArray}`;
}
/*7*/
function sapXepTangDan() {
    document.getElementById(
        "sapXep"
    ).innerHTML = `Array tăng dần : ${numArray.sort((a, b) => a - b)}`;
}
/*8*/
function checkSoNguyenTo() {
    var nguyenToArray = [];
    var notNguyenToArray = [];
    var numberX = 91;
    var arrayX = [];
    var arrayY = [];
    for (var i = 1; i < numberX + 1; i++) {
        arrayX.push(i);
    }
    arrayX.splice(0, 1);
    arrayX.splice(arrayX.length - 1, 1);
    console.log(arrayX);

    for (var i = 0; i < arrayX.length; i++) {
        if (numberX % arrayX[i] === 0) {
            console.log('chia het cho', arrayX[i]);
            console.log('khong phai so nguyen to');
            notNguyenToArray.push(numberX);
            break;
        }
    }
    console.log(notNguyenToArray);

}
/*9*/

function addNumButton2() {
    numArray2.push(addNum2.value * 1);
    document.getElementById("numArray2").innerHTML = `${numArray2}`;
}

function checkInterger() {
    intergerArray = [];
    for (var i = 0; i < numArray2.length; i++) {
        if (Number.isInteger(numArray2[i])) {
            intergerArray.push(numArray2[i]);
        }
    }
    document.getElementById("soNguyenDisplay").innerHTML = `Số nguyên là : ${intergerArray}`;
}
/10*/
function soSanhAmDuong() {
    var soDuongArray = [];
    var soAmArray = [];

    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuongArray.push(numArray[i]);
        } else {
            soAmArray.push(numArray[i]);
        }
    }
    console.log(soDuongArray, soAmArray);

    if (soDuongArray.length > soAmArray.length) {
        document.getElementById('amDuongDisplay').innerHTML = 'Số dương > Số âm';
    } else {
        document.getElementById('amDuongDisplay').innerHTML = 'Số âm > Số dương';
    }
}







