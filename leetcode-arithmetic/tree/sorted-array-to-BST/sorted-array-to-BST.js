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
