/**
 * @author monkeywang
 * Date: 17/3/27
 */
import utils from '../../../common/js/serveice'

class Hello {
  say () {
    utils.get('/users/key', {}).then(res => {
      console.log(res)
    })
  }
  post () {
    utils.post('/users/login', {loginAccount: 'wangwei', password: '123'}).then(res => {
      console.log(res)
    })
  }
}
let hello = new Hello()
hello.post()
