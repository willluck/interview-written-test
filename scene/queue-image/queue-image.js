//  有一个数组：
// const imgs = ['url1', 'url2', 'url3', ...];
// 请实现效果：
// 按照图片数组顺序队列加载图片（注：加载完一张再加载下一张）

// 加载img的异步函数
const loadImg = url => {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.src = url;
        img.onload = () => {
            resolve(img);
        };
        img.onerror = () => {
            reject('error');
        };
    });
};

// 图片处理函数
const dealWithImgs = async imgs => {
    for (let i = 0; i < imgs.length; i += 1) {
        await loadImage(imgs[i]);
    }
};

dealWithImgs(imgs);

const imageUrls = [];

// 或直接使用promise链式
imageUrls.reduce((promise, url) => {
    return promise.then(() =>
        loadImg(url).then(() => {
            console.log(`Loaded: ${url}`);
        })
    );
}, Promise.resolve());
