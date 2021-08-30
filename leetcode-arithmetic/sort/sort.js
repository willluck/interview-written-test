// 冒泡排序
const bubbleSort = nums => {
    const len = nums.length;
    for (let i = len - 1; i > 0; i -= 1) {
        // 标志位，优化处理，可以避免冗余排序操作
        let flag = false;
        for (let j = 0; j < i; j += 1) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                // 只要发生了交换，就标识为true
                flag = true;
            }
        }
        if (!flag) {
            return nums;
        }
    }

    return nums;
};

// 选择排序
const selectSort = nums => {
    const len = nums.length;
    let minIndex;

    for (let i = 0; i < len - 1; i += 1) {
        // 初始化minIndex为第一个下标
        minIndex = i;

        // 遍历找到当前区间最小值下标
        for (let j = i; i < len; j += 1) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        // 判断当前最小值小标是否是当前值，不是则进行交换，是则不需要交换操作
        if (minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
    }

    return nums;
};

// 插入排序
const insertSort = nums => {
    const len = nums.length;

    let temp;

    for (let i = 1; i < len; i += 1) {
        let j = i;
        temp = nums[i];

        while (j > 0 && nums[j - 1] > temp) {
            nums[j] = nums[j - 1];
            j -= 1;
        }

        nums[j] = temp;
    }

    return nums;
};

// 快速排序

// 快速排序入口
function quickSort(arr, left = 0, right = arr.length - 1) {
    // 定义递归边界，若数组只有一个元素，则没有排序必要
    if (arr.length > 1) {
        // lineIndex表示下一次划分左右子数组的索引位
        const lineIndex = partition(arr, left, right);
        // 如果左边子数组的长度不小于1，则递归快排这个子数组
        if (left < lineIndex - 1) {
            // 左子数组以 lineIndex-1 为右边界
            quickSort(arr, left, lineIndex - 1);
        }
        // 如果右边子数组的长度不小于1，则递归快排这个子数组
        if (lineIndex < right) {
            // 右子数组以 lineIndex 为左边界
            quickSort(arr, lineIndex, right);
        }
    }
    return arr;
}
// 以基准值为轴心，划分左右子数组的过程
function partition(arr, left, right) {
    // 基准值默认取中间位置的元素
    let pivotValue = arr[Math.floor(left + (right - left) / 2)];
    // 初始化左右指针
    let i = left;
    let j = right;
    // 当左右指针不越界时，循环执行以下逻辑
    while (i <= j) {
        // 左指针所指元素若小于基准值，则右移左指针
        while (arr[i] < pivotValue) {
            i++;
        }
        // 右指针所指元素大于基准值，则左移右指针
        while (arr[j] > pivotValue) {
            j--;
        }

        // 若i<=j，则意味着基准值左边存在较大元素或右边存在较小元素，交换两个元素确保左右两侧有序
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    // 返回左指针索引作为下一次划分左右子数组的依据
    return i;
}

// 快速排序中使用 swap 的地方比较多，我们提取成一个独立的函数
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// 归并排序

function mergeSort(arr) {
    const len = arr.length;
    // 处理边界情况
    if (len <= 1) {
        return arr;
    }
    // 计算分割点
    const mid = Math.floor(len / 2);
    // 递归分割左子数组，然后合并为有序数组
    const leftArr = mergeSort(arr.slice(0, mid));
    // 递归分割右子数组，然后合并为有序数组
    const rightArr = mergeSort(arr.slice(mid, len));
    // 合并左右两个有序数组
    arr = mergeArr(leftArr, rightArr);
    // 返回合并后的结果
    return arr;
}

function mergeArr(arr1, arr2) {
    // 初始化两个指针，分别指向 arr1 和 arr2
    let i = 0,
        j = 0;
    // 初始化结果数组
    const res = [];
    // 缓存arr1的长度
    const len1 = arr1.length;
    // 缓存arr2的长度
    const len2 = arr2.length;
    // 合并两个子数组
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i]);
            i++;
        } else {
            res.push(arr2[j]);
            j++;
        }
    }
    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    if (i < len1) {
        return res.concat(arr1.slice(i));
    } else {
        return res.concat(arr2.slice(j));
    }
}
