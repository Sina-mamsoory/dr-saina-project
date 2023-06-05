import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import Home from './components/home/Home'
import Layout from './theme/layout/Layout'
import {Helmet} from "react-helmet";
import store from './redux/store';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import EachConsultant from './components/each-consultant/EachConsultant';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Helmet>
            <title>Dr saina</title>
          </Helmet>
          <Layout >
            <Routes>
              <Route path='/consultation' element={<Home />} />
              <Route path='/consultation/:id' element={<EachConsultant />} />
              <Route path='/*'  element={<Navigate to='consultation' />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default App
