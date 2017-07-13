/**
 * @author monkeywang
 * Date: 17/3/27
 */
import axios from 'axios'
class Utils {
  get(url, params) {
    return new Promise(function (resolve, reject) {
      axios.get(url, {
        params: params
      }).then((response) => {
        resolve(response)
      }).catch((error) => {
        resolve(error)
      })
    })
  }

  post(url, params) {
    return new Promise(function (resolve, reject) {
      axios.post(url, params).then((response) => {
        resolve(response)
      }).catch((error) => {
        resolve(error)
      })
    })
  }

  getUrlParams(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    let r = window.location.search.substr(1).match(reg)
    if (r != null)return unescape(r[2])
    return null
  }
}
export default new Utils()
