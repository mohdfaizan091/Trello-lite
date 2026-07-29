import { useState } from 'react';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, password })
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token);
            console.log('signup successful', data);
        });
    };

    return (
  <>
        <style>{`
            form {
                max-width: 320px;
                margin: 40px auto;
                padding: 24px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background: #fff;
                font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
            }

            input {
                width: 100%;
                padding: 10px 12px;
                margin-bottom: 14px;
                border: 1px solid #ccc;
                border-radius: 6px;
                font-size: 14px;
                box-sizing: border-box;
            }

            input:focus {
                outline: none;
                border-color: #4f46e5;
                box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2);
            }

            button {
                width: 100%;
                padding: 10px;
                background: #4f46e5;
                color: #fff;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
            }

            button:hover {
                background: #4338ca;
            }
            `}
        </style>

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Signup</button>
    </form>
  </>
)

}

export default Signup;