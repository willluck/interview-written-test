// 封装一个JSONP
function jsonp(url, callback) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.type = 'text/javascript';
        document.body.appendChild(script);
        window[callback] = data => {
            resolve(data);
            document.removeChild(script);
        };
    });
}
