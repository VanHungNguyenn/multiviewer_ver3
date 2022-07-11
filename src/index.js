import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'flag-icons/css/flag-icons.min.css'

import './index.css'
import App from './App'
import { LangProvider } from './context/LangProvider'
import { store } from './redux/store'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'

import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<LangProvider>
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</LangProvider>
	</React.StrictMode>
)
