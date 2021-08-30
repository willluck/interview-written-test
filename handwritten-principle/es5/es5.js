// es5实现filter方法
function myFilter(fn, context) {
    const arr = [].slice.call(this);
    const filterArray = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (!arr.hasOwnProperty(i)) {
            continue;
        }

        fn.call(context, arr[i], i, this) && filterArray.push(arr[i]);
    }

    return filterArray;
}

// es5实现map方法
function myMap(fn, context) {
    const arr = [].slice.call(this);
    const resArray = [];

    for (let i = 0; i < arr.length; i += 1) {
        if (!arr.hasOwnProperty(i)) {
            continue;
        }

        resArray.push(fn.call(context, arr[i], i, this));
    }

    return resArray;
}

// es5实现some方法
function mySome(fn, context) {
    const arr = [].slice.call(this);
    if (!arr.length) {
        return false;
    }
    let flag = false;
    for (let i = 0; i < arr.length; i += 1) {
        if (!arr.hasOwnProperty(i)) {
            continue;
        }
        let res = fn.call(context, arr[i], i, this);
        if (res) {
            flag = true;
            break;
        }
    }

    return flag;
}

// es5实现splice
function mySplice(index, deleteCount, ...addList) {
    const arr = [].slice.call(this);

    let left = arr.slice(0, index);

    let right = arr.slice(index + deleteCount, arr.length);

    let result = [...left, ...addList, ...right];

    for (let i = 0; i < result.length; i += 1) {
        this[i] = result[i];
    }

    return this.slice(index, index + deleteCount);
}

// es5实现reduce
function myReduce(callback, initValue) {
    let i = 0;
    let result = initValue;
    if (typeof initValue === 'undefined') {
        result = this[0];
        i += 1;
    }

    for (i; i < this.length; i += 1) {
        result = callback(result, this[i], i, this);
    }

    return result;
}

// 利用reduce实现flat功能
function myFlat(deep = 1) {
    const arr = [].slice.call(this);
    if (deep === 0) {
        return arr;
    }

    return arr.reduce((total, cur) => {
        if (Array.isArray(cur)) {
            return [...total, ...myFlat.call(cur, deep - 1)];
        }
        return [...total, cur];
    }, []);
}
