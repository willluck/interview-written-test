function ListNode(value) {
    this.var = value;
    this.next = null;
}

// 反转链表的指定区间m-n
const reverseBetween = (head, m, n) => {
    const dummy = new ListNode();
    dummy.next = head;

    let p = dummy;
    let leftHead;
    for (let i = 0; i < m - 1; i += 1) {
        p = p.next;
    }
    leftHead = p;
    // 开始位置
    let start = leftHead.next;
    // 当前位置
    let cur = start.next;

    let pre = leftHead.next;

    for (let i = m; i < n; i += 1) {
        // 存入当前节点的下一个节点
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    leftHead.next = pre;
    start.next = cur;

    return dummy.next;
};

// 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
const deleteList = head => {
    let cur = head;

    while (cur !== null && cur.next !== null) {
        if (cur.value === cur.next.value) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

// 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
const deleteListAll = head => {
    if (!head || !head.next) {
        return head;
    }

    let dummy = new ListNode();
    dummy.next = head;

    // 当前移动指针
    let cur = dummy;

    while (cur.next && cur.next.next) {
        if (cur.next.value === cur.next.next.value) {
            // 记下这个值
            let val = cur.next.value;
            while (cur.next && cur.next.value === val) {
                cur.next = cur.next.next;
            }
        } else {
            cur = cur.next;
        }
    }
    return dummy.next;
};

// 快慢指针找到环形链表环的头部位置
const fastSlowCycle = head => {
    let slow = head;
    let fast = head;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            let cur = head;
            while (cur !== slow) {
                cur = cur.next;
                slow = slow.next;
            }
            return cur;
        }
    }

    return null;
};
