// 实现事件委托
function delegate(element, eventType, selector, fn) {
    element.addEventListener(
        eventType,
        e => {
            let el = e.target;
            while (!el.matches(selector)) {
                if (element === el) {
                    el = null;
                    break;
                }
                el = el.parentNode;
            }
            el && fn.call(el, e, el);
        },
        false
    );

    return element;
}
