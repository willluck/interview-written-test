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
