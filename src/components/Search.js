import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cocktail from './Cocktail';
import Alert from './Alert';
import './Search.css';
// import img from '../assets/img.png';


const Search = () => {
    const [query, setQuery] = useState('');
    const [cocktails, setCocktails] = useState([]);
    const [alert, setAlert] = useState('');
    const [word, setWord] = useState('');
    let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

    useEffect(() => {
        url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
        getData();
    }, []);

    const getData = async () => {
        const result = await Axios.get(url);

        if (result.data.drinks == null) {
            setAlert(`* No Cocktail with such name : ${word}`);
            setQuery('');
            setCocktails([]);
        } else {
            setCocktails(result.data.drinks);
            setQuery('');
            setAlert('');
        }

    }

    const onChange = (e) => {
        setQuery(e.target.value);
        setWord(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }
    return (
        <div className='container'>
            <div className='content'>
                <div className='leftSide'></div>
                <div className='cocktailSearch'>
                    <div className='formSearch'>
                        <h1>Cocktail Search App</h1>
                        <form onSubmit={onSubmit}>
                            <input
                                type='text'
                                name='query'
                                placeholder='e.g. Mojito, Martini, Margarita'
                                value={query}
                                onChange={onChange}
                                autoComplete='off'
                            />
                            <input className='btnSubmit' type='submit' value='Search' />
                            {alert !== '' && <Alert alert={alert} />}
                        </form>
                    </div>
                    <div>
                        {cocktails !== [] && cocktails.map((cocktail, index) =>
                            <Cocktail key={index} cocktail={cocktail} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;