import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import RouteGuard from './components/router/RouteGuard';
import MockMainPage from './components/MockMainPage';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <MockMainPage />
              ) : (
                <Login setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />

          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            element={
              <RouteGuard isLoggedIn={isLoggedIn}>
                <Outlet />
              </RouteGuard>
            }
          >
            <Route path="/main-page" element={<MockMainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
