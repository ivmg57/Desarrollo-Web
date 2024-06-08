import React, { useState } from 'react';
import { fetchSpotifyApi } from '../../api/spotifyAPI';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const handleOnChange = (e) => {
        const newValues = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(newValues);
    };
    const handleLogin = async() => {
        const client_id = '266226c199e841f49c445b6a39910343';
        const client_secret = '370f09db26374e35aafe332864a472f4';
        const body = 'grant_type=client_credentials';
        const token = 'Basic ' + btoa(client_id + ':' + client_secret);
        const response = await fetchSpotifyApi('https://accounts.spotify.com/api/token', 'POST', body, 'application/x-www-form-urlencoded', token);
        navigate('/dashboard');

        localStorage.setItem('token', response.access_token);
        console.log(response);
    };
    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="p-8 bg-black shadow-xl rounded-2xl max-w-lg w-full">
                <h1 className="text-center text-xl font-bold mb-6 text-white">
                    Log in to Spotify
                </h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-600 text-white bg-black"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={form.password}
                            onChange={handleOnChange}
                            className="w-full p-2 border border-gray-600 text-white bg-black"
                            required
                        />
                    </div>
                    <div>
                        <button
                            onClick={handleLogin}
                            type="submit"
                            className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-2 rounded-full transition duration-150"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default Register;
