// LRU实现（Map方案）
class MyLru {
    constructor(max) {
        // 设置最大数据缓存量
        this.max = max;
        // 初始化Map，Map是我们接下来操作的核心数据对象
        this.map = new Map();
    }

    // 实现get方法
    get = key => {
        const value = this.map.get(key);
        if (value === undefined) {
            return -1;
        }

        // 删除当前key值
        this.map.delete(key);
        // 重新设置当前key值，因为LRU的get方法需要调整访问数据的优先缓存，也就是被get的数据，优先往前排
        this.map.set(key, value);

        return value;
    };

    // 实现put方法
    put = (key, value) => {
        // 判断当前key的值是否存在，如果存在，直接删除
        if (this.map.get(key) !== undefined) {
            this.map.delete(key);
        }
        // 对当前key，value做新增操作
        this.map.set(key, value);
        // 获取map的所有keys
        const keys = this.map.keys();

        // 如果当前map的size超长了，需要从底部开始删除对象
        while (this.map.size > this.max) {
            // keys是迭代器，可以用next()方法迭代访问每一个对象
            this.map.delete(keys.next().value);
        }
    };
}
