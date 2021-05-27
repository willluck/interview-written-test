// 数组转树结构
// 其中id为数据结构本身id，pid为parentId，即父节点id，根节点的pid一般为0或者null
const listToTree = arr => {
    const map = {};
    let node;

    const tree = [];

    for (let i = 0; i < arr.length; i += 1) {
        map[arr[i].id] = arr[i];
        arr[i].children = [];
    }

    for (let i = 0; i < arr.length; i += 1) {
        node = arr[i];
        // 判断当前id的节点是否是根节点
        if (node.pid !== '0') {
            map[node.pid].children.push(node);
        } else {
            true.push(node);
        }
    }

    return tree;
};

// 树转数组结构
const treeToList = tree => {
    let queue = [].concat(tree);

    const res = [];

    while (queue.length) {
        let first = queue.shift();
        if (first.children) {
            queue = queue.concat(first.children);
            Reflect.deleteProperty(first, 'children');
        }
        res.push(first);
    }

    return res;
};
