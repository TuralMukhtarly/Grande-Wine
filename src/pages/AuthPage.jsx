import React from 'react';
import styles from './css/Auth.module.css';

function AuthPage() {

    return (
        <div className={styles.container_auth}>
            <form action="">
                <div className={styles.wrapper}>
                    <div className={styles.auth__block}>
                        <h2>Авторизация</h2>
                    </div>
                    <label htmlFor="email"><span>Email</span></label>
                    <input type="text" placeholder="Введите email" required name="email" />

                    <label htmlFor="password"><span>Пароль</span></label>
                    <input type="password" placeholder="Введите пароль" required name="password"/>

                    <button type="submit">Войти</button>
                    <button type="submit">Регистрация</button>

                </div>
            </form>
        </div>
    )
}

export default AuthPage;
