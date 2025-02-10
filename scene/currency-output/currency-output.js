// 实现数字格式化：JavaScript 中的千分位分隔技巧

function formatNumberWithCommas(number) {
    number += '';
    let [integer, decimal] = number.split('.');
    const doSplit = (num, isInteger = true) => {
        if (num === '') return '';
        if (isInteger) num = num.split('').reverse();
        let str = [];
        for (let i = 0; i < num.length; i++) {
            if (i !== 0 && i % 3 === 0) str.push(',');
            str.push(num[i]);
        }
        if (isInteger) return str.reverse().join('');
        return str.join('');
    };
    integer = doSplit(integer);
    decimal = doSplit(decimal, false);
    return integer + (decimal === '' ? '' : '.' + decimal);
}

function formatNumberWithRegex(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatNumberWithToLocaleString(number) {
    return number.toLocaleString();
}

function formatNumberWithLocale(number) {
    let [integer, decimal = ''] = (number + '').split('.');
    integer = (+integer).toLocaleString();
    if (decimal === '') return integer;
    decimal = decimal.split('').reverse().join('');
    decimal = (+decimal).toLocaleString();
    decimal = decimal.split('').reverse().join('');
    return integer + '.' + decimal;
}
