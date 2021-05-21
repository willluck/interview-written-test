# description

实现一个函数缓存方案

```js
const add = function (a, b) {
    return a + b;
};

const adder = memorize(add);

adder(2, 6);
// 直接取得缓存
adder(2, 6);
```

# thinking
这个是利用闭包的持久缓存原理实现