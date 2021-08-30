// 最大盛水容器

/*
给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
说明：你不能倾斜容器，且 n 的值至少为 2。
*/

var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;

    let max = (j - i) * Math.min(height[i], height[j]);

    while (i < j) {
        if (height[i] < height[j]) {
            i += 1;
            if (height[i] > height[i - 1]) {
                max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
            }
        } else {
            j -= 1;

            if (height[j] > height[j + 1]) {
                max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
            }
        }
    }

    return max;
};
