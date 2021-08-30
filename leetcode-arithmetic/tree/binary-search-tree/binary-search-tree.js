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
