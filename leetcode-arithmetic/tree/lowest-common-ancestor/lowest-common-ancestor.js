/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let ans = null;

    const dfs = (cRoot, cP, cQ) => {
        if (cRoot === null) {
            return false;
        }

        const fleft = dfs(cRoot.left, cP, cQ);
        const fright = dfs(cRoot.right, cP, cQ);

        if ((fleft && fright) || ((cRoot.val === cP.val || cRoot.val === cQ.val) && (fleft || fright))) {
            ans = cRoot;
        }

        return fleft || fright || cRoot.val === cP.val || cRoot.val === cQ.val;
    };

    dfs(root, p, q);

    return ans;
};
