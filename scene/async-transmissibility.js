// 消除前端异步传染性

function run(func) {
    const oldFetch = window.fetch;
    const cache = {
        status: 'pending',
        value: null
    };

    const newFetch = function (...args) {
        if (cache.status === 'fulfilled') {
            return cache.value;
        } else if (cache.status === 'rejected') {
            throw cache.value;
        }

        // const p = oldFetch(...args)
        //     .then(res => res.json())
        //     .then(data => {
        //         cache.status = 'fulfilled';
        //         cache.value = data;
        //     })
        //     .catch(err => {
        //         cache.status = 'rejected';
        //         cache.value = err;
        //     });

        const p = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('myUser');
            }, 5000);
        })
            .then(data => {
                cache.status = 'fulfilled';
                cache.value = data;
            })
            .catch(err => {
                cache.status = 'rejected';
                cache.value = err;
            });

        throw p;
    };

    try {
        window.fetch = newFetch;
        func();
    } catch (e) {
        if (e instanceof Promise) {
            e.finally(() => {
                window.fetch = newFetch;
                func();
                window.fetch = oldFetch;
            });
        }
    }

    window.fetch = oldFetch;
}

function getUser() {
    return fetch();
}

function main() {
    console.log('main');
    const user = getUser();
    console.log('user', user);
}

run(main);
