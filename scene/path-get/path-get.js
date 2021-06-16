// 通过path路径获取对象值，类似lodash的get方法

// var object = { 'a': [{ 'b': { 'c': 3 } }] };

// _.get(object, 'a[0].b.c');
// => 3
function myGet(targetObj, path, defaultValue) {
    if (!path || typeof path !== 'string') {
        return defaultValue;
    }

    const transPath = path.replace(/\[(\d+)\]/g, '.$1').split('.');

    let res = targetObj;

    for (const p of transPath) {
        res = Object(res)[p];
        if (res === undefined) {
            return defaultValue;
        }
    }

    return res;
}
