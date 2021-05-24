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
