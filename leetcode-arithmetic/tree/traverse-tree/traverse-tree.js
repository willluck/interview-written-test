// 二叉树遍历
// 先序
// 中序
// 后序
// 迭代遍历
// DFS 深度优先遍历，就是先序遍历的思想
const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        right: {
            val: 'F'
        }
    }
};

// 先序
function preorder(root) {
    if (!root) {
        return;
    }
    console.log('当前节点的值：', root.val);
    preorder(root.left);
    preorder(root.right);
}

// 中序
function preorder(root) {
    if (!root) {
        return;
    }
    preorder(root.left);
    console.log('当前节点的值：', root.val);
    preorder(root.right);
}

// 后序
function preorder(root) {
    if (!root) {
        return;
    }
    preorder(root.left);
    preorder(root.right);
    console.log('当前节点的值：', root.val);
}

// 层序遍历，BFS实现
const BFS = root => {
    const queue = [];
    queue.push(root);

    while (queue.length) {
        const first = queue.shift();
        console.log(first.val);
        if (first.left) {
            queue.push(first.left);
        }
        if (first.right) {
            queue.push(first.right);
        }
    }
};

// 迭代实现先序遍历二叉树
const preorderTraversal = root => {
    const res = [];

    if (!root) {
        return;
    }

    const stack = [];
    stack.push(root);

    while (stack.length) {
        const pop = stack.pop();
        res.push(pop.val);
        if (pop.right) {
            stack.push(pop.right);
        }
        if (pop.left) {
            stack.push(pop.left);
        }
    }

    return res;
};

// 后序遍历的迭代实现
const preorderTraversal = root => {
    const res = [];

    if (!root) {
        return;
    }

    const stack = [];
    stack.push(root);

    while (stack.length) {
        const pop = stack.pop();
        res.unshift(pop.val);

        if (pop.left) {
            stack.push(pop.left);
        }

        if (pop.right) {
            stack.push(pop.right);
        }
    }

    return res;
};

// 中序遍历的迭代实现
const preorderTraversal = root => {
    const res = [];
    const stack = [];
    let cur = root;

    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        res.push(cur.val);
        cur = cur.right;
    }

    return res;
};

// 层序遍历，返回层序遍历结果
/** 
 * 返回其层次遍历结果：
[
 [3],
 [9,20],
 [15,7]
]
*/

const levelOrder = root => {
    const res = [];

    if (!root) {
        return res;
    }

    const queue = [];

    queue.push(root);

    while (queue.length) {
        const cur = [];
        const len = queue.length;
        for (let i = 0; i < len; i += 1) {
            const top = queue.shift();
            cur.push(top.val);
            if (top.left) {
                queue.push(top.left);
            }
            if (top.right) {
                queue.push(top.right);
            }
        }
        res.push(cur);
    }

    return res;
};
