import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import Home from './components/home/Home'
import Layout from './theme/layout/Layout'
import {Helmet} from "react-helmet";
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Helmet>
            <title>Dr saina</title>
          </Helmet>
          <Layout >
              <Home />
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
