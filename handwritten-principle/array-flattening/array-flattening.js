// 数组扁平化
const arr = [1, [2, [3, [4, 5]]], 6];

// 1.使用flat
const res1 = arr.flat(Infinity);

// 2.使用reduce

const flatten = (arr, deep) => {
    if (deep === 0) {
        return arr;
    }
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur, deep - 1) : cur);
    }, []);
};

const res2 = flatten(arr);
