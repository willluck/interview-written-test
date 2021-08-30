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
