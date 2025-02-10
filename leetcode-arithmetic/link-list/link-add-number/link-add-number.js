/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

来源：力扣2
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let currentValue = null;

    let currentPoint = 0;

    const dummy = new ListNode();

    let cur = dummy;

    const check = value => {
        const currentNode = new ListNode(value % 10);
        cur.next = currentNode;

        if (value >= 10) {
            currentPoint = 1;
        } else {
            currentPoint = 0;
        }
    };

    while (l1 && l2) {
        currentValue = l1.val + l2.val + currentPoint;
        check(currentValue);
        l1 = l1.next;
        l2 = l2.next;
        cur = cur.next;
    }

    while (l1) {
        currentValue = l1.val + currentPoint;
        check(currentValue);
        l1 = l1.next;
        cur = cur.next;
    }

    while (l2) {
        currentValue = l2.val + currentPoint;
        check(currentValue);
        l2 = l2.next;
        cur = cur.next;
    }

    if (!l1 && !l2 && currentPoint === 1) {
        cur.next = new ListNode(1);
    }

    return dummy.next;
};
