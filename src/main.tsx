import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'smarthr-ui'
import { GlobalStyle, smarthrUITheme, LayoutProvider } from './styles/theme'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={smarthrUITheme}>
      <GlobalStyle />
      <LayoutProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LayoutProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
