import {createContext, useEffect, useState} from "react";
import api from "../api/api";
import {useNavigate} from "react-router-dom"

export const CustomContext = createContext();

export const Context = (props) => {

    const [user, setUser] = useState({email: ''});

    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, []);

    const registerUser = (user) => {
        api.post('register', {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                ...user,
                point: 0,
                orders: [],
                carts: [],
                city: '',
                home: '',
                street: ''
            }
        }).json().then((res) => {
            setUser(res.user);
            navigate('/');
            localStorage.setItem('user', JSON.stringify(res.user))
        })
    };

    const loginUser = (user) => {
        api.post('login', {
            headers: {
                'content-type': 'application/json'
            },
            json: {
                ...user
            }
        }).json().then((res) => {
            setUser(res.user);
            navigate('/');
            localStorage.setItem('user', JSON.stringify(res.user))
        })
    };

    const logOutUser = () => {
        setUser({email: ''});
        localStorage.removeItem('user');
        navigate('/')
    };

    let value = {
        user, setUser, registerUser, loginUser, logOutUser
    };

    return <CustomContext.Provider value={value}>
        {
            props.children
        }
    </CustomContext.Provider>
};



