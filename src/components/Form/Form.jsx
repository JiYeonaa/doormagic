import React, {useContext, useRef, useState} from 'react';
import {Link, useLocation} from "react-router-dom"
import Logo from "../../assets/Logo.svg";
import {useForm} from "react-hook-form";
import InputMask from "react-input-mask"
import {CiMail} from "react-icons/ci"
import {CiUser} from "react-icons/ci"
import {HiUser} from "react-icons/hi"
import {BsPhone} from "react-icons/bs"
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import api from "../../config/api/api";
import {CustomContext} from "../../config/context/context";

const Form = () => {

    const [passwordView, setPasswordView] = useState(false);

    const {registerUser, loginUser} = useContext(CustomContext);

    const password = useRef();

    const location = useLocation();

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset,
        watch
    } = useForm({
        mode: "onBlur"
    });

    password.current = watch("password");



    const submitForm = (data) => {
        let {confirmPwd, ...user} = data;

        if (location.pathname === '/login'){
            loginUser(user)
        } else {
            registerUser(user)
        }
    };

    return (
        <div className="form">
            <div className="form__left">
                <img src={Logo} width={200} alt="" className="form__logo" ref={password}/>
                <form noValidate action="" className="form__content" onSubmit={handleSubmit(submitForm)}>
                    <h2 className="form__content-title">
                        {
                            location.pathname === '/login' ? ' WELCOME BACK!' : ' WELCOME!'
                        }
                    </h2>
                    <p className="form__content-text">
                        {
                            location.pathname === '/login' ? 'Don’t have a account' : 'If you already have an account'
                        }
                        {
                            location.pathname === '/login' ? <Link to='/register' className="form__content-link"> Sign up</Link> : <Link to='/login' className="form__content-link"> Sign in</Link>
                        }
                    </p>

                    <label className="form__label">
                        <span className="form__label-text">Email</span>
                        <div className="form__label-field">
                            <span className="form__label-icon">
                                <CiMail/>
                            </span>
                            <input {...register('email', {
                                required: {
                                    message: "Email обязателен к заполнению",
                                    value: true
                                },
                                minLength: {
                                    message: "Минимум 10 символов",
                                    value: 10
                                },
                                pattern: {
                                    message: "Напишите правильно свой email",
                                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
                                }
                            })} className="form__label-input" type="email" placeholder="Enter your email address"/>
                        </div>

                        <p className="register__label-error">
                            {errors.email && errors.email?.message}
                        </p>
                    </label>
                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text">Name</span>
                            <div className="form__label-field">
                            <span className="form__label-icon">
                                <CiUser/>
                            </span>
                                <input {...register('name', {
                                    required: {
                                        message: "Имя обязательно к заполнению",
                                        value: true
                                    },
                                    minLength: {
                                        message: "Минимум 2 символа",
                                        value: 2
                                    },
                                    pattern: {
                                        message: "Напишите правильно свое имя",
                                        value: /^[а-яА-ЯёЁa-zA-Z]+$/
                                    }
                                })} className="form__label-input" type="text" placeholder="Enter your name"/>
                            </div>

                            <p className="register__label-error">
                                {errors.name && errors.name?.message}
                            </p>
                        </label>
                    }
                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text">Surname</span>
                            <div className="form__label-field">
                            <span className="form__label-icon">
                                <HiUser/>
                            </span>
                                <input {...register('surname', {
                                    required: {
                                        message: "Фамилия обязательно к заполнению",
                                        value: true
                                    },
                                    minLength: {
                                        message: "Минимум 2 символа",
                                        value: 2
                                    },
                                    pattern: {
                                        message: "Напишите правильно свою фамилию",
                                        value: /^[а-яА-ЯёЁa-zA-Z]+$/
                                    }
                                })} className="form__label-input" type="text" placeholder="Enter your surname"/>
                            </div>

                            <p className="register__label-error">
                                {errors.surname && errors.surname?.message}
                            </p>
                        </label>
                    }
                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text">Phone</span>
                            <div className="form__label-field">
                             <span className="form__label-icon">
                                <BsPhone/>
                            </span>
                                <InputMask mask={`+\\9\\96(999)99-99-99`} {...register('phone', {
                                    required: {
                                        message: "Это поле обязательно",
                                        value: true
                                    },
                                    pattern: {
                                        message: "Заполните номер телефона",
                                        value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/
                                    }
                                })} className="form__label-input" type="tel" placeholder="Enter your phone"/>
                            </div>

                            <p className="register__label-error">
                                {errors.phone && errors.phone?.message}
                            </p>
                        </label>
                    }

                    <label className="form__label">
                        <span className="form__label-text">Password</span>
                        <div className="form__label-field">
                                <span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>
                                    {
                                        passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
                                    }
                                </span>
                            <input {...register('password', {
                                required: {
                                    message: "Пароль обязателен к заполнению",
                                    value: true
                                },
                                pattern: {
                                    message: "Пароль должен содержать не менее 8 символов, заглавную букву, число!",
                                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
                                }
                            })} className="form__label-input" type={passwordView ? "text" : "password"} placeholder="Enter your password"/>



                        </div>

                        <p className="register__label-error">
                            {errors.password && errors.password?.message}
                        </p>
                    </label>

                    {
                        location.pathname === '/register' && <label className="form__label">
                            <span className="form__label-text">Confirm password</span>
                            <div className="form__label-field">
                                {/*<span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>*/}
                                {/*    {*/}
                                {/*        passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>*/}
                                {/*    }*/}
                                {/*</span>*/}
                                <input {...register('confirmPwd', {
                                    validate: value =>
                                        value === password.current || "The password do not match"
                                })} className="form__label-input" type={passwordView ? "text" : "password"} placeholder="Enter your password again"/>
                            </div>
                            <p className="register__label-error">
                                {errors. confirmPwd && errors.confirmPwd?.message}
                            </p>
                        </label>
                    }

                        <button className="form__btn" type="submit">Sign In</button>
                </form>
            </div>

            <div className="form__right"></div>
        </div>
    );
};

export default Form;