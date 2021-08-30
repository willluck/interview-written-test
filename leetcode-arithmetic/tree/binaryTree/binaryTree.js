



// 翻转二叉树
const invertTree = root => {
    if (!root) {
        return root;
    }
    let left = invertTree(root.left);
    let right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
};

// 判断二叉搜索树
const isValidBST = root => {
    const dfs = (currentRoot, minValue, maxValue) => {
        if (!currentRoot) {
            return true;
        }
        if (currentRoot.val <= minValue || currentRoot.val >= maxValue) {
            return false;
        }
        return dfs(currentRoot.left, minValue, currentRoot.val) && dfs(currentRoot.right, currentRoot.val, maxValue);
    };
    return dfs(root, -Infinity, Infinity);
};

// 判断平衡二叉树
const isBalanced = root => {
    let flag = true;

    const dfs = currentRoot => {
        if (!currentRoot || !flag) {
            return 0;
        }

        const left = dfs(currentRoot.left);
        const right = dfs(currentRoot.right);

        if (Math.abs(left - right) > 1) {
            flag = false;
            return 0;
        }

        return Math.max(left, right) + 1;
    };

    dfs(root);

    return flag;
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

// 二叉搜索树的基本操作

// 查找数据域为某一值的特定节点

function search(root, n) {
    if (!root) {
        return;
    }

    if (root.val === n) {
        console.log(root);
    } else if (root.val > n) {
        search(root.left, n);
    } else {
        search(root.right, n);
    }
}

// 插入新节点

function insert(root, n) {
    if (!root) {
        root = new TreeNode(n);
        return root;
    }
    if (root.val === n) {
        return;
    } else if (root.val > n) {
        insert(root.left, n);
    } else {
        insert(root.right, n);
    }
}

// 删除节点
function deleteNode(root, n) {
    if (!root) {
        return null;
    }

    if (root.val === n) {
        if (!root.left && !root.right) {
            root = null;
        } else if (root.left) {
            const maxLeft = findMax(root.left);
            // 覆盖操作
            root.val = maxLeft.val;
            // 删除原有maxLeft节点
            deleteNode(root.left, maxLeft.val);
        } else {
            const minRight = findMin(root.right);
            // 覆盖操作
            root.val = minRight.val;
            // 删除原有minRight节点
            deleteNode(root.right, minRight.val);
        }
    } else if (root.val > n) {
        deleteNode(root.left, n);
    } else {
        deleteNode(root.right, n);
    }
}

function findMax(root) {
    while (root.right) {
        root = root.right;
    }
    return root;
}

function findMin(root) {
    while (root.left) {
        root = root.left;
    }
    return root;
}

/** 
   题目描述：将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
   本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
  
   示例: 给定有序数组: [-10,-3,0,5,9],
   一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
  */

function sortedArrayToBST(nums) {
    if (!nums.length) {
        return null;
    }

    // low 和 high是数组索引范围
    function buildBST(low, high) {
        if (low > high) {
            return null;
        }

        const mid = Math.floor(low + (high - low) / 2);
        const cur = new TreeNode(nums[mid]);

        cur.left = buildBST(low, mid - 1);
        cur.right = buildBST(mid + 1, high);

        return cur;
    }

    return buildBST(0, nums.length - 1);
}

// 将二叉搜索树平衡成二叉平衡树
// 思路：先中序遍历出树，然后逐个二分，把中间节点提起来

function blanceAST(root) {
    const nums = [];

    function ins(currentRoot) {
        if (!currentRoot) {
            return;
        }
        ins(currentRoot.left);
        nums.push(currentRoot.val);
        ins(currentRoot.right);
    }

    function buildBST(low, high) {
        if (low > high) {
            return null;
        }

        const mid = Math.floor(low + (high - low) / 2);
        const cur = new TreeNode(nums[mid]);

        cur.left = buildBST(low, mid - 1);
        cur.right = buildBST(mid + 1, high);

        return cur;
    }

    ins(root);
    return buildBST(0, nums.length);
}

// 二叉树的直径
const diameterOfBinaryTree = root => {
    let ans = 1;

    const deep = currentRoot => {
        if (!currentRoot) {
            return 0;
        }

        const left = deep(currentRoot.left);
        const right = deep(currentRoot.right);

        ans = Math.max(ans, left + right + 1);

        return Math.max(left, right) + 1;
    };

    deep(root);

    return ans - 1;
};

// 二叉树的深度
const maxDepth = root => {
    let nth = 0;

    const queue = [root];

    while (queue.length) {
        let len = queue.length;

        while (len > 0) {
            const pop = queue.shift();

            if (pop.left) {
                queue.push(pop.left);
            }

            if (pop.right) {
                queue.push(pop.right);
            }
            len -= 1;
        }

        nth += 1;
    }

    return nth;
};

// 从前序和中序构造二叉树

// 递归
var buildTree = function (preorder, inorder) {
    if (!inorder.length) {
        return null;
    }
    // 根元素
    let tmp = preorder[0];
    // 根元素位置
    let mid = inorder.indexOf(tmp);
    const root = new TreeNode(tmp);
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
};
