import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import Home from './components/home/Home'
import Layout from './theme/layout/Layout'
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet>
          <title>Dr saina</title>
        </Helmet>
         <Layout >
            <Home />
         </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
