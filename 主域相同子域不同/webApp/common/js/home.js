/**
 * @author monkeywang
 * Date: 17/4/7
 */
import utils from './serveice'

class HomeApi {
  getList (parmas) {
    return utils.get('/users/key', parmas)
  }
}

export default new HomeApi()
