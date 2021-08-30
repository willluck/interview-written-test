// 求两链表相交节点

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
