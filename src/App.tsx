import { BrowserRouter } from 'react-router-dom'
import { SearchPage } from './pages/searchPage'
import { Provider } from 'react-redux'
import { store } from './utils/store/store'

export const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SearchPage />
      </Provider>
    </BrowserRouter>  
  )
}

