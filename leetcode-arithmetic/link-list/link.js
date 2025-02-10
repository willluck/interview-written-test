// 排序链表
const sortList = head => {
    let cur = head;
    const list = [];

    while (cur) {
        list.push(cur);
        cur = cur.next;
    }

    const sortList = list.sort((a, b) => a.val - b.val);

    let dummy = new ListNode();
    cur = dummy;

    for (let i = 0; i < sortList.length; i += 1) {
        cur.next = sortList[i];
        cur = cur.next;
    }

    return dummy.next;
}