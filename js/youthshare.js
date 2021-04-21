
const $ = new Env('youthshare');
let md5 = require('md5-node');
let nowTime;
let wxck;
let articles = [
"https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1yVl9x3IRJKWwhYPYkAl4xKXjQqgZBMVdDe&uid=51565484&phone_code=269c61b2e58091e8460caede71f06401&scid=36990680&time=1616207178&app_version=2.0.2&sign=18e4f3bf8552e7461e1ccdce0baa2638",
"https://focus.youth.cn/article/s?signature=Mq8BYdozK36wyv5a2GYzNzUVRJw5UNQNWK51nPDWpxVg2LZmRX&uid=51565484&phone_code=269c61b2e58091e8460caede71f06401&scid=36974434&time=1616207220&app_version=2.0.2&sign=aec393254e354330a598348984dd8c92",
"https://focu.youth.cn/fourhot/20210311?sid=36751315&uid=51565484&timestamp=1615553751&signature=8W62Rvorl9xBbN3dqEaxVvx2Qu2YoPq4pjVLXQDk0GeygYZOJ5&share_id=51565484367513151615553755248&scene_id=fire_share&time=1615553755&phone_code=269c61b2e58091e8460caede71f06401&app_version=2.0.2.1&sign=67752b63d9ce806e3a030dbae30e7414",
"https://focu.youth.cn/fourhot/20210310?sid=36743257&uid=51565484&timestamp=1615553751&signature=l3Q0RNe9oPxVZ6pJMA7E96GvMTVqWRD7L2XGkOKdvDynjYb5Wz&share_id=51565484367432571615553793655&scene_id=fire_share&time=1615553794&phone_code=269c61b2e58091e8460caede71f06401&app_version=2.0.2.1&sign=4db10bb15ce314aaba8479ced2d70a66",
"https://focu.youth.cn/fourhot/20210319?sid=36976926&uid=51565484&timestamp=1616206820&signature=qEkWRmZyvzPO2bBdGX782NGXnH5AVql1l36xneA0QpKgM9NYL8&share_id=51565484369769261616206828874&scene_id=fire_share&time=1616206829&phone_code=269c61b2e58091e8460caede71f06401&app_version=2.0.2.1&sign=c78a9bf785fc39d2e6aaca39c6b40886",
"https://focu.youth.cn/fourhot/20210318?sid=36956332&uid=51565484&timestamp=1616206989&signature=jE9mdZzRG3lxVgkq8na3VddDwH69bG07yJ6vBKw0oObepWDXrM&share_id=51565484369563321616206994428&scene_id=fire_share&time=1616206994&phone_code=269c61b2e58091e8460caede71f06401&app_version=2.0.2.1&sign=b9b03ee5f83ea7b9d89da9dd4fb8efb1",
"https://focu.youth.cn/fourhot/20210320?sid=36989113&uid=51565484&timestamp=1616206989&signature=l3Q0RNe9oPxVZ6pJMA7E9m9O5hVqWRD7L2XGkOKdvDynjYb5Wz&share_id=51565484369891131616207056167&scene_id=fire_share&time=1616207056&phone_code=269c61b2e58091e8460caede71f06401&app_version=2.0.2.1&sign=c6d6652d38a92fac5f0f27356970d306",
"https://focu.youth.cn/fourhot/20210318?sid=36933811&uid=51565484&timestamp=1616206989&signature=bNLQGOPvkzKWxBE3gD1MnYdKoTpmM6L4yM2eV8nrowqJXmZjY5&share_id=51565484369338111616207135307&scene_id=fire_share&time=1616207135&phone_code=269c61b2e58091e8460caede71f06401&app_version=2.0.2.1&sign=4873bf8c7e2db5d9a610db8e4b432ff6",
"https://focus.youth.cn/article/s?signature=gENjGxJw2L6opAMamBOlZBTypxoWHOYW5yO1nX3kY58KdmBzRO&uid=51565484&phone_code=269c61b2e58091e8460caede71f06401&scid=37127209&time=1616749227&app_version=2.0.2&sign=4c03bde618888fde0c0ac12dfb422b41",
"https://focus.youth.cn/article/s?signature=DX6wEBvPbxy02WLarvlKE0CRDBlehN0DWGxagRQY9OZjA5eJpl&uid=51565484&phone_code=269c61b2e58091e8460caede71f06401&scid=37110399&time=1616749743&app_version=2.0.2&sign=59d24fb3de7f9c9e5ae900698140d0b2",
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dBmvyYsA8GnEteqmEVm75okQ0dyYRDBzxL&uid=51565484&phone_code=269c61b2e58091e8460caede71f06401&scid=37071729&time=1616749835&app_version=2.0.2&sign=25dd2f6022f3acd15cd6905d40d05a32",
"https://focus.youth.cn/article/s?signature=ZRpgeBYKPdGlvj24GoPBlrIDGveKTq9kZlQ4X96VqmbxkDwr0n&uid=51565484&phone_code=269c61b2e58091e8460caede71f06401&scid=37121483&time=1616749909&app_version=2.0.2&sign=f627e6b31d66dff1e053392e105e6cdf",
"https://focus.youth.cn/article/s?signature=2E96MJNGrnvW8pX1dBmxB6FA8GnEteqmEYA75okQ0dyYRDBzxL&uid=51565484&phone_code=269c61b2e58091e8460caede71f06401&scid=37127101&time=1616750039&app_version=2.0.2&sign=5b360b86880b316aa4548a150aa8739c",
"https://focu.youth.cn/fourhot/20210326?sid=37127065&uid=51565484&timestamp=1616750331&signature=EgVbkQOLMqvWm9RrG0a2GKjy5sVRJw513xy6doZeXBJzln85PD&share_id=51565484371270651616750337416&scene_id=fire_share&time=1616750337&phone_code=269c61b2e58091e8460caede71f06401&app_version=2.0.2.1&sign=d75efedf3c0eab03adcf0a9cfefa6c77",
];
let articles1 = [
    "https://focu.youth.cn/fivehot/20210326?sid=37119190&uid=51584645&timestamp=1616765110&signature=b8ne3myXKLv0lpjr2RaBjx8RdhVqgvVaxP5OAdZD6NYMBgwzVQ&share_id=51584645371191901616765128971&scene_id=fire_share&time=1616765129&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=94344d2be9c3fe801bf4a799322e2d6f",
    "https://focu.youth.cn/fivehot/20210326?sid=37121895&uid=51584645&timestamp=1616765110&signature=8ebgqKwdz5B3lN0vmO4GoPB0wHDGE8D4EZXnGLQox9rJAkWR2Y&share_id=51584645371218951616765173233&scene_id=fire_share&time=1616765173&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=b175450561bd13c918a8003049f36b2d",
    "https://focu.youth.cn/fivehot/20210326?sid=37127209&uid=51584645&timestamp=1616765110&signature=NRxPz8j0mdBYbOGDW91lqkDZqtvBGwv4yAXV56qwogJEpkLK2e&share_id=51584645371272091616765182509&scene_id=fire_share&time=1616765183&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=d18036e27524dde6231014fbcf66d488",
    "https://focu.youth.cn/fivehot/20210325?sid=37098967&uid=51584645&timestamp=1616765110&signature=G6vDYbegoP2Owr90x84KmlEyLHrn8OrajVBXQnmqNLEMRyzZ3l&share_id=51584645370989671616765189634&scene_id=fire_share&time=1616765190&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=8999e8aab9a9f8285019bddd8c9c2b18",
    "https://focu.youth.cn/fivehot/20210324?sid=37068089&uid=51584645&timestamp=1616765110&signature=5NPeoJjl0pEAqLZYQM4q8DLyjCQ0l3Q1692Vrk3gBdwXDyWK8b&share_id=51584645370680891616765197577&scene_id=fire_share&time=1616765198&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=0b48c9eca3b58528e465efe57e654b54",
    "https://focu.youth.cn/fivehot/20210324?sid=37068224&uid=51584645&timestamp=1616765110&signature=bDm0KxOyWQGgYNjrBV4jLqQYVhBRY6BaoLpzq253Av968kJPEM&share_id=51584645370682241616765211637&scene_id=fire_share&time=1616765212&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=b37a7df333aaeaab3cd855c849ba8133",
    "https://focu.youth.cn/fivehot/20210326?sid=37132964&uid=51584645&timestamp=1616765223&signature=zLbNjJ5wr0YegkWEG37o92xkVsMJRDM1DP6vqOn8lB2py9XRQx&share_id=51584645371329641616765225402&scene_id=fire_share&time=1616765225&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=bb390fc5088c85f3a14772310b010540",
    "https://focu.youth.cn/fivehot/20210326?sid=37134519&uid=51584645&timestamp=1616765223&signature=NlWqkrwJYXnOvx5DKb1RBy3A2sMmpjM108g2GjM9RLeV3EPymQ&share_id=51584645371345191616765233029&scene_id=fire_share&time=1616765233&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=92ff174fe61a6632e7f11ba2d675df11",
    "https://focu.youth.cn/fivehot/20210326?sid=37132556&uid=51584645&timestamp=1616765223&signature=dvG9ReJyYL36goEAWV46P0KxbUWNewWaMQD0OPmnkw5jBl2X8Z&share_id=51584645371325561616765240688&scene_id=fire_share&time=1616765241&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=724f6147a8aa4ee2ec97a3ec92ea866d",
    "https://focu.youth.cn/fivehot/20210326?sid=37133953&uid=51584645&timestamp=1616765223&signature=NRxPz8j0mdBYbOGDW91lqknoVUvBGwv4yAXV56qwogJEpkLK2e&share_id=51584645371339531616765247106&scene_id=fire_share&time=1616765247&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=48749805b2e93892e6ed17131243a3f6",
    "https://focu.youth.cn/fivehot/20210326?sid=37132532&uid=51584645&timestamp=1616765223&signature=JnXBk5Pw0ALYDjZx8G4ZejRAmtzBX5z1olKN2Q3yzm6VREOr9p&share_id=51584645371325321616765259056&scene_id=fire_share&time=1616765259&phone_code=d3de213d951800fe5a8c82550b690958&app_version=1.7.9.9&sign=745c41f7d14f7522f5b5831c40a0fefa",
];
let encodearticles;


let headers = {
    "Accept-Encoding": "gzip, deflate, br",
    "Accept": "*/*",
    "Connection": "keep-alive",
    "Referer": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN",
    "Accept-Language": "zh-cn"
};

!(async() => {
    let array = articles.concat(articles1);
    for (let i = 0; i < array.length; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(array[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        await storage();
        await $.wait(3000);

        await visit();
        await $.wait(3000);

        await openpage();
        await $.wait(3000);

        await callback();
        await $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

function storage() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function visit() {

    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function openpage() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        const request = {
            url: url,
            headers: headers,

        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function callback() {
    return new Promise((resolve, reject) => {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        const request = {
            url: url,
            headers: headers,
        };

        $.get(request, function (error, response, data) {
            try {
                $.log(data);
            } catch (e) {
                $.log(e)
            }
            resolve();
        })
    })
}

function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            }
             : t;
            let s = this.get;
            return "POST" === e && (s = this.post),
            new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t,
            this.http = new s(this),
            this.data = null,
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i)
                try {
                    s = JSON.parse(this.getdata(t))
                } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.timeout : r;
                const[o, h] = i.split("@"),
                a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode())
                return {}; {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                if (!s && !i)
                    return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"),
                this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                if (r)
                    try {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    } catch (t) {
                        e = ""
                    }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } else
                s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    try {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    } catch (t) {
                        this.logErr(t)
                    }
                }).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        "X-Surge-Skip-Scripting": !1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            else if (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        hints: !1
                    })), $task.fetch(t).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let s in e)
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
            return t
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t)
                    return t;
                if ("string" == typeof t)
                    return this.isLoon() ? t : this.isQuanX() ? {
                        "open-url": t
                    }
                 : this.isSurge() ? {
                    url: t
                }
                 : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                        s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                        s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f! \u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
