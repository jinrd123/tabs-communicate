const channel = new BroadcastChannel('center'); // 名字随意

export function sendMsg(data) {
    channel.postMessage(data);
}

export function listenMsg(callback) {
    function callbackWithE(e) {
        callback && callback(e.data);
    }
    channel.addEventListener('message', callbackWithE);
    return () => {
        channel.removeEventListener('message', callbackWithE);
    }
}