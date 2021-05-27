// 首先模拟一个请求，有可能随机成功或失败
function getMyData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.ceil(Math.random() * 20);

            if (num <= 5) {
                console.log('符合条件', num);
                resolve(num);
            }
            reject(`${num}不符合要求`);
        }, 2000);
    });
}

// 实现重启函数
function reStartFunc(fn, times = 5, delay = 1000) {
    return new Promise((resolve, reject) => {
        function attemp() {
            fn()
                .then(resolve)
                .catch(err => {
                    if (times === 0) {
                        reject(err);
                    } else {
                        times -= 1;
                        setTimeout(attemp, delay);
                    }
                });
        }
        attemp();
    });
}
