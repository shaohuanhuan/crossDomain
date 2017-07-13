/**
 * @author monkeywang
 * Date: 17/3/27
 */
import homeApi from '../../../common/js/home'
import listT from '../../views/components/list.jade'
// import $ from 'jquery'
import utils from '../../../common/js/serveice'
import editApi from '../../../common/js/home/homeEdit'
/**
 * 循环列表并渲染到html中
 */
let name = 'monkey'
let arr = [{name: name}, {name: '111'}, {name: '222'}]
let container = $('#list-box')
for (let i = 0, len = arr.length; i < len; i++) {
  let $list = $(listT({name: arr[i].name}))
  $list.data(name)
  container.append($list)
}
// $list.data(name)
// $('.containers').append($list)
// console.log($list)

/**
 * banner轮播
 */
$('#carousel-banner').carousel({
  interval: 1000
})
// $('a').on('click', function () {
//   window.parent.fun()
// })
window.say = function (src) {
  $('.logo-img').attr('src', src)
}
window.set = function (editTag, text) {
  console.log(123)
  $(editTag).text(text)
}
let controlBar = ['.logo-img', '.nav-a']
{
  console.log(utils.getUrlParams('type'))
  if(utils.getUrlParams('type') == '1'){
    for(let control of controlBar){
      for(let con of $(control)){
        editApi.crateEditTag($(con), (type, context) => {
          console.log(type)
          // 触发test中的方法
          window.parent.previwControl(type, context, $(con))
        })
      }

    }
  }
}
homeApi.getList().then(res => {
  console.log(res)
})
