import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider,useSelector } from 'react-redux';
import store from './redux/store';
import Login from './components/Auth/Login';
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
//import PrivateRoute from './components/Auth/PrivateRoute';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={
                <PrivateRoute>
                  <Feed />
                </PrivateRoute>
              } />
              <Route path="/profile/:username" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;