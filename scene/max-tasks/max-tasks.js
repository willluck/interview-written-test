// 设计一个限制最大运行数量的函数

function maxTask(tasks, n) {
    return new Promise((resolve, reject) => {
        let start = 0;
        let index = 0;
        let finish = 0;
        const res = [];

        function processValue(index, value) {
            start -= 1;
            finish += 1;
            res[index] = value;
            runTask();
        }

        function runTask() {
            if (finish === n) {
                resolve(res);
                return;
            }

            while (start < n && index < tasks.length) {
                start += 1;
                let cur = index;
                Promise.resolve(tasks[cur]())
                    .then(value => {
                        processValue(cur, value);
                    })
                    .catch(err => {
                        processValue(cur, err);
                    });
            }
        }

        runTask();
    });
}
