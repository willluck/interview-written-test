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
