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
