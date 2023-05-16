import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { ThemeProvider } from '@emotion/react'
import { theme } from './components/breakpoints'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Layout from './components/Layout'


function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
         <Layout >
            <Home />
         </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
