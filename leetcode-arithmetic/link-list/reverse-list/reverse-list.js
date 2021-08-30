// 反转一个单链表

// 常规方法
const reverseList = head => {
    let pre = null;
    let cur = head;
    let next = head.next;

    while (cur) {
        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    return pre;
};

// 递归
const reverseList2 = head => {
    if (!head || !head.next) {
        return head;
    }

    let next = head.next;
    let reverseHead = reverseList2(next);
    head.next = null;
    next.next = head;

    return reverseHead;
};
