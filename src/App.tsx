import { Reset as ResetCss } from 'styled-reset';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import MenuListPage from '@/pages/MenuListPage';
import GlobalStyle from '@/styles/GlobalStyle';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ResetCss />
        <GlobalStyle />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MenuListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
