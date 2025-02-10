/**
 * 依次执行一系列任务
 * 所有任务全部完成后，可以得到每个任务的执行结果
 * 需要返回两个方法，start用于启动任务，pause用于暂停任务
 * 每个任务都具有原子性，即不可中断，只能在两个任务中间中断
 */

function processTasks(tasks) {
    let isRunning = false;
    const result = [];
    let i = 0;
    return {
        start() {
            return new Promise(async resolve => {
                if (isRunning) {
                    return;
                }
                isRunning = true;
                // 执行任务

                while (i < tasks.length) {
                    const task = tasks[i];
                    console.log('执行任务', i);
                    const r = await task();
                    result.push(r);
                    i += 1;
                    if (!isRunning) {
                        return;
                    }
                }

                isRunning = false;
                resolve(result);
            });
        },
        pause() {
            isRunning = false;
        }
    };
}

const taskDemo = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(1);
        }, 1000);
    });
};

const taskDemo1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, 2000);
    });
};

const taskDemo2 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(3);
        }, 3000);
    });
};

const tasks = [taskDemo, taskDemo1, taskDemo2];

processTasks(tasks)
    .start()
    .then(data => {
        console.log('任务执行完成', data);
    });
