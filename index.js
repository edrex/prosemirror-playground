import * as prosemirror from 'npm:prosemirror'
import 'npm:prosemirror/dist/menu/menubar'

var editor = new prosemirror.ProseMirror({
  place: document.body,
  menuBar: true
})
