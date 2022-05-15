import React from 'react'
import ReactDOM from 'react-dom/client'
import Profit from './Pages/Profit/Profit.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from './Layout/Layout.jsx'
import MainPage  from './Pages/MainPage/MainPage.jsx'
import { LanguageProvider } from './contexts/LanguageContexts.jsx'

import { ThemeProvider } from 'styled-components'
import theme from './theme/default.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
        <ThemeProvider theme={theme}>
            <Router>
            <Layout>
              <Routes>
                  <Route exact path="/" element={<MainPage />} />
                  <Route exact path="/profit" element={<Profit />} />
              </Routes>
              </Layout>
            </Router>
        </ThemeProvider>
      </LanguageProvider>
  </React.StrictMode>
)