// 手写实现Promise
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {
    const that = this;
    that.state = PENDING;
    that.value = null;
    that.resolvedCallbacks = [];
    that.rejectedCallbacks = [];

    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED;
            that.value = value;
            that.resolvedCallbacks.map(cb => {
                cb(value);
            });
        }
    }
    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED;
            that.value = value;
            that.rejectedCallbacks.map(cb => {
                cb(value);
            });
        }
    }

    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
    onRejected =
        typeof onRejected === 'function'
            ? onRejected
            : r => {
                  throw r;
              };
    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled);
        that.rejectedCallbacks.push(onRejected);
    }
    if (that.state === RESOLVED) {
        onFulfilled(that.value);
    }
    if (that.state === REJECTED) {
        onRejected(that.value);
    }
};

// Promise的基本实现
let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ test: 1 });
    }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ test2: 2 });
    }, 1000);
});

// 简单的链式调用
promise
    .then(
        data => {
            console.log('resolve');
            console.log(data);
            return promise2;
        },
        data => {
            console.log('reject');
            console.log(data);
        }
    )
    .then(
        data => {
            console.log('resolve2');
            console.log(data);
        },
        data => {
            console.log('reject2');
            console.log(data);
        }
    );

// 实现Promise.all
Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let index = 0;
        const res = [];
        if (!promises.length) {
            resolve(res);
        } else {
            function processValue(i, data) {
                res[i] = data;
                if (++index === promises.length) {
                    resolve(res);
                }
            }

            for (let i = 0; i < promises.length; i += 1) {
                if (!promises[i] instanceof Promise) {
                    processValue(i, promises[i]);
                } else {
                    promises[i].then(
                        data => {
                            processValue(i, data);
                        },
                        err => {
                            reject(err);
                        }
                    );
                }
            }
        }
    });
};

// 实现Promise.finally
Promise.finally = function (callback) {
    return this.then(
        value => {
            return Promise.resolve(callback()).then(() => {
                return value;
            });
        },
        err => {
            return Promise.resolve(callback()).then(() => {
                throw err;
            });
        }
    );
};

// 实现Promise.race
Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        for (let i = 0; i < promises.length; i += 1) {
            if (!promises[i] instanceof Promise) {
                Promise.resolve(promises[i]).then(resolve, reject);
                return;
            } else {
                promises[i].then(resolve, reject);
                return;
            }
        }
    });
};

// Promise并行限制函数
class Scheduler {
    constructor() {
        this.queue = [];
        this.runCount = 0;
        this.maxCount = 2;
    }

    add(promiseCreator) {
        this.queue.push(promiseCreator);
    }

    taskStart() {
        for (let i = 0; i < this.maxCount; i += 1) {
            this.request();
        }
    }

    request() {
        if (!this.queue || !this.queue.length || this.runCount >= this.maxCount) {
            return;
        }

        this.runCount += 1;

        const cur = this.queue.shift();
        cur().then(() => {
            console.log('执行完成，减少了-----');
            this.runCount -= 1;
            this.request();
        });
    }
}

const timeout = time =>
    new Promise(resolve => {
        setTimeout(() => {
            resolve(time);
        }, time);
    });

const scheduler = new Scheduler();

const addTask = (time, order) => {
    scheduler.add(() =>
        timeout(time).then(value => {
            console.log(order, value);
        })
    );
};

addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');
scheduler.taskStart();

// 使用Promise实现每隔1s输出1、2、3
const arr = [1, 2, 3];

arr.reduce((p, current) => {
    return p.then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(console.log(current));
            }, 1000);
        });
    });
}, Promise.resolve());
