import { useState, useEffect } from 'react';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import TaskList from './TaskList';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogin, setShowLogin] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
      
        <div>
          
            <Header title="My TaskBoard" />
            {isLoggedIn ? (
                 <>
                    <TaskList />
                    <button onClick={handleLogout}>Logout</button>
                </>
              ) : showLogin ? (
                <>
                  <Login onSuccess={() => setIsLoggedIn(true)} />
                  <p>
                      New user?{' '}
                      <button onClick={() => setShowLogin(false)}>Signup here</button>
                  </p>
                </>
              ) : (
              <>
                  <Signup onSuccess={() => setIsLoggedIn(true)} />
                  <p>
                      Already have an account?{' '}
                      <button onClick={() => setShowLogin(true)}>Login here</button>
                  </p>
              </>
            )}
        </div>
    );
}

export default App;