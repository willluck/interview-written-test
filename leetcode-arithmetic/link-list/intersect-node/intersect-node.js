/**
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 null 。
 * 力扣：160
 */

var getIntersectionNode = function (headA, headB) {
    let pa = headA;
    let pb = headB;

    while (pa || pb) {
        if (pa === pb) {
            return pa;
        }

        pa = pa === null ? headB : pa.next;
        pb = pb === null ? headA : pb.next;
    }

    return null;
};
