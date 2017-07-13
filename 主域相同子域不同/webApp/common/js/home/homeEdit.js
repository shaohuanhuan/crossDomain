/**
 * @author monkeywang
 * Date: 17/4/12
 */
class EditorApi {
  crateEditTag ($tagName, fn) {
    let $editBar = $(`<button class="edit-btn"><i class="glyphicon glyphicon-edit"></i></button>`)
    $tagName.before($editBar)
    console.log($editBar)
    $editBar.on('click', e => {
      console.log(123)
      e.preventDefault()
      e.stopPropagation()
      this._showControl($tagName, fn)
    })
  }

  _showControl ($tagName, fn) {
    let type = $tagName[0].tagName
    let context = ''
    if(type.toLowerCase() === 'img') context = $tagName.attr('src')
    if(type.toLowerCase() === 'a') context = $tagName.html()
    fn(type, context)
  }
}

export default new EditorApi()