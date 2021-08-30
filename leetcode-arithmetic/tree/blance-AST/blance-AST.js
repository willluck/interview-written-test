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
