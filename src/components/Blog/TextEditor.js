import SunEditor, { buttonList } from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

const TextEditor = ({ content, setContent }) => {
	return (
		<SunEditor
			placeholder='Please type here...'
			height='20rem'
			width='100%'
			setOptions={{
				// buttonList: all buttons
				buttonList: buttonList.complex,
			}}
			setContents={content}
			onChange={(e) => setContent(e)}
		/>
	)
}

export default TextEditor
