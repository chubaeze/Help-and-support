import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo.Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Eleifend mi innulla posuere sollicitudin aliquam ultrices sagittis. Necfeugiat in fermentum posuere urna nec tincidunt praesent semper. Nulla at volutpat diam ut venenatis tellus. Id cursus metus aliquam eleifend mi in nulla. Tempor orci dapibus ultrices iniaculis nunc sed. Pellentesque adipiscing commodo elit at. Estultricies integer quis auctor elit sed vulputate mi. Ultrices iniaculis nunc sed augue. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Eros in cursus turpis massa tincidunt duiut ornare. Nibh venenatis cras sed felis eget velit aliquet sagittis. Mauris ultrices eros in cursus turpis massa tincidunt. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Volutpat odio facilisis mauris sit amet massa.</p>',
  })

  return <EditorContent editor={editor} />
}

export default Tiptap
