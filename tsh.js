const cookieName = '泰生活app'
const cookieKey = 'mz_cookie_taishenghuo'
const machelle = init()
const cookieVal = '8d7b1b116ce04e9ba89ea03f04856ebc'

sign()

function sign() {
  let url = { url: `https://tlife.taikang.com/actapi/sign/v1/userSign/sign`, headers: {} }
  url.headers['Authorization'] = `${cookieVal}`
  url.headers['Accept-Encoding'] = `gzip, deflate`
  url.headers['Origin'] = `https://scrm.taikang.com`
  url.headers['Connection'] = `keep-alive`
  url.headers['Accept'] = `application/json, text/plain, */*`
  url.headers['Referer'] = `https://scrm.taikang.com/activity/dailySignIn/?useNativeNavigation=0&webViewDisplayType=2`
  url.headers['Host'] = `tlife.taikang.com`
  url.headers['User-Agent'] = `Mozilla/5.0 (Linux; Android 9; Redmi Note 7 Build/PKQ1.180904.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/77.0.3865.92 Mobile Safari/537.36/TSH-Android`
  url.headers['Accept-Language'] = `zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7`

  machelle.get(url, (error, response, data) => {
    machelle.log(`${cookieName}, error: ${error}, result: ${response}, data: ${data}`)
    let result = JSON.parse(data)
    const title = `${cookieName}`
    let subTitle = '签到结果: ' + result.message + '\n'
    machelle.msg(title, subTitle)
  })
  machelle.done()
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, {}, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}