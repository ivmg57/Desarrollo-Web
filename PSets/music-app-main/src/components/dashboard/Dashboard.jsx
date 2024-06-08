import React, { useState } from 'react';
import { fetchSpotifyApi } from '../../api/spotifyAPI';

const Dashboard = () => {

    const types = ["album", "artist", "playlist", "track", "show", "episode", "audiobook"];

    const [form , setForm] = React.useState({
        artist: '',
        search : '',
    });

    const [option, setOption] = useState('');

    const handleSearch = async () => {
        const params = new URLSearchParams();
        params.append("q", encodeURIComponent(`remasterer track:${form.search} artist:${form.artist}`));
        params.append("type", option);
        const queryString = params.toString();
        const url = "https://api.spotify.com/v1/search";
        const updateUrl = `${url}?${queryString}`;
        const token = `Bearer ${localStorage.getItem("token")}`;

        const response = await fetchSpotifyApi(
            updateUrl,
            "GET",
            null,
            "application/json",
            token
        );
        console.log(response);
    };

    const handleChange = (event) => {
        const newValues = {
            ...form,
            [event.target.name]: event.target.value
        };
        console.log(newValues);
        setForm(newValues);
    }

    const handleSelectChanges = (event) => {
            console.log(event.target.value);
            setOption(event.target.value);
    }

    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="p-8 bg-black shadow-xl rounded-2xl max-w-4xl w-full">
                <div>
                    <h1 className="text-center text-xl font-bold mb-6 text-white">
                        Dashboard
                    </h1>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full p-2 border border-gray-600 rounded-full text-white bg-black"
                            name="search"
                            value={form.search}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <select
                            name="types" onChange={handleSelectChanges}>
                            <option value="valor1">Valor 1</option>
                            {types.map(item => (
                                <option key={item} value={option}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <input
                            placeholder='Artist'
                            type="text"
                            name="artist"
                            value={form.artist}
                            className="w-full p-2 border border-gray-600 rounded-full text-white bg-black"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <button
                            className="w-full bg-green-500 p-2 rounded-full text-white"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;


















//<button
//className="mb-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//onClick={getToken}
//>
//Get Token
//</button>