import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'

import App from './App'
import store from './app/store'
import 'antd/dist/reset.css'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
)
