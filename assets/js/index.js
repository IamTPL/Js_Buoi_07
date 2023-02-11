var titleList = document.querySelectorAll('.title');

for (let i = 0; i < titleList.length; i++) {
    titleList[i].onclick = function () {
        this.classList.toggle('active');
        var current = document.querySelectorAll('.active');
        if (current.length > 1) {
            for (let i = 0; i < current.length; i++) {
                current[i].classList.remove('active');
            }
            this.classList.add('active');
        }
    };
}

// Thêm số

var arr = [];
document.getElementById('btn').onclick = function () {
    arr.push(document.getElementById('num').value * 1);
    document.getElementById('array').innerHTML = arr;
};

// Bài 1
document.getElementById('cta-1').onclick = function () {
    var sum = arr.reduce((sum, current) => {
        if (current > 0) return sum + current;
        else return sum;
    }, 0);
    document.getElementById('result-1').innerText = `Tổng số dương: ${sum}`;
};

// Bài 2
document.getElementById('cta-2').onclick = function () {
    var sum = arr.reduce((sum, current) => {
        if (current > 0) return sum + 1;
        else return sum;
    }, 0);

    document.getElementById(
        'result-2'
    ).innerText = `Trong mảng có: ${sum} số dương`;
};
// Bài 3

document.getElementById('cta-3').onclick = function () {
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    document.getElementById('result-3').innerText = `Số nhỏ nhất: ${min}`;
};

// Bài 4

document.getElementById('cta-4').onclick = function () {
    var min = arr[0];
    arr.forEach((current) => {
        if (current < min && current > 0) min = current;
    });
    document.getElementById('result-4').innerText = `Số nhỏ nhất: ${min}`;
};

// Bài 5

document.getElementById('cta-5').onclick = function () {
    var evenLast = arr.reduce((evenLast,current) => {
        if(current % 2 == 0) return current;
        else return evenLast;
    },-1);
    document.getElementById(
        'result-5'
    ).innerText = `Số chẵn cuối cùng: ${evenLast}`;
};

// Bài 6

document.getElementById('cta-6').onclick = function () {
    var index = document.querySelectorAll('.index');
    var index1 = index[0].value * 1;
    var index2 = index[1].value * 1;
    if (index1 >= arr.length || index2 >= arr.length) {
        alert('Chọn vị trí trong phạm vi mảng');
    }
    var arrAfterSwap = arr.slice();
    [arrAfterSwap[index1], arrAfterSwap[index2]] = [
        arrAfterSwap[index2],
        arrAfterSwap[index1],
    ];
    document.getElementById(
        'result-6'
    ).innerText = `Mảng sau khi đổi: ${arrAfterSwap}`;
};

// Bài 7

document.getElementById('cta-7').onclick = function () {
    var arrSorted = arr.slice();
    for (let i = 0; i < arrSorted.length - 1; i++) {
        for (let j = i + 1; j < arrSorted.length; j++) {
            if (arrSorted[j] < arrSorted[i])
                [arrSorted[i], arrSorted[j]] = [arrSorted[j], arrSorted[i]];
        }
    }
    document.getElementById(
        'result-7'
    ).innerText = `Mảng sau khi sắp xếp: ${arrSorted}`;
};

// Bài 8

function isSNT(n) {
    if (n == 2) return true;
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) return false;
    }
    return true;
}

document.getElementById('cta-8').onclick = function () {
    var SNT = arr.find((current) => {
        if (isSNT(current)) {
            return current;
        }
    });
    if (SNT == undefined) SNT = 'Không có số nguyên tố nào trong mảng';
    document.getElementById('result-8').innerText = SNT;
};

// Bài 9

var arrayLesson9 = [];
document.getElementById('add').onclick = function() {
    arrayLesson9.push(document.getElementById('numberAdd').value * 1);
    document.getElementById('display-9').innerText = arrayLesson9;
}

document.getElementById('cta-9').onclick = function () {
    var soNguyen = 0;
    arrayLesson9.forEach((current) => {
        if(Number.isInteger(current)) soNguyen++;
    })
    document.getElementById('result-9').innerText = soNguyen;
};

// Bài 10

document.getElementById('cta-10').onclick = function () {
    var soDuong = 0;
    var soAm = 0;
    arr.forEach((current) => {
        if(current > 0) soDuong++
        if(current < 0) soAm++;
    })
    var soSanh = '=';
    if(soDuong > soAm) soSanh = '>';
    if(soDuong < soAm) soSanh = '<';

    document.getElementById('result-10').innerText = `Số dương ${soSanh} Số âm`;
};