import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
import { SearchPage } from './pages/searchPage';
import { Provider } from 'react-redux';
import { store } from './utils/store/store';
export const App = () => {
    return (_jsx(BrowserRouter, { children: _jsx(Provider, { store: store, children: _jsx(SearchPage, {}) }) }));
};
