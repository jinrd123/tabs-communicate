食用方式：

~~~
运行index.html
~~~

~~~
打开2.html，观察标签页通信
~~~

实现方案：

* `index.js`中创建公共的`BroadcastChannel`广播对象，

* 实现`sendMsg`方法，即对`channel.postMessage`方法的封装（传参）
* 实现`listenMsg`方法，即给`channel`对象添加`message`事件的回调，返回取消监听的方法

