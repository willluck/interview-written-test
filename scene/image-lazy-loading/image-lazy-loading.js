// 图片懒加载 通过getBoundingClientRect实现  可能会存在性能问题
let imgList = [...document.querySelectorAll('img')];
let num = imgList.length;

let lazyLoad = (function () {
    let count = 0;
    return function () {
        let deleteIndexList = [];
        imgList.forEach((img, index) => {
            let rect = img.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                img.src = img.dataset.src;
                deleteIndexList.push(index);
                count++;
                if (count === num) {
                    document.removeEventListener('scroll', lazyLoad);
                }
            }
        });
        imgList = imgList.filter((_, index) => !deleteIndexList.includes(index));
    };
})();

// 需要一个节流函数
let throttle = function () {};

lazyLoad = throttle(lazyLoad, 100);

document.addEventListener('scroll', lazyLoad);

// 手动加载一次，不然首屏不触发滚动无法加载
lazyLoad();

// 通过IntersectionObserver实现，这个api是专门用于观察元素是否可见的
let imgList2 = [...document.querySelectorAll('img')];

let lazyLoad2 = function () {
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.src = entry.target.dataset.src;
                observer.unobserve(entry.target);
            }
        });
    });
    imgList2.forEach(img => {
        observer.observe(img);
    });
};
