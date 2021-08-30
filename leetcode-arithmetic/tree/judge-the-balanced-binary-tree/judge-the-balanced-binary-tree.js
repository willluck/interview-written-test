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
