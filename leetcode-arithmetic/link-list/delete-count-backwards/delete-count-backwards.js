/*
力扣：19
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 快慢指针  解决删除倒数第二个节点这类问题
const removeNthFromEnd = (head, n) => {
    let dummy = new ListNode();
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    while (n !== 0) {
        fast = fast.next;
        n -= 1;
    }

    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};
