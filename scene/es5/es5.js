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
