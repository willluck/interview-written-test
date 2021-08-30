// 数组去重
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];

// 1.使用Set
const res1 = [...new Set(arr)];

// 2.暴力双循环
const unique1 = arr => {
    let len = arr.length;

    for (let i = 0; i < len; i += 1) {
        for (let j = 1; j < len; j += 1) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                len -= 1;
                j -= 1;
            }
        }
    }
};

// 3.利用indexOf或includes

const unique2 = arr => {
    const res = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i]);
        }
    }
};

const unique2 = arr => {
    const res = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (!res.includes(arr[i])) {
            res.push(arr[i]);
        }
    }
};
