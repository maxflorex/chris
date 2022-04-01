import { FormRegistration } from './forms/FormRegistration';
import React from 'react';
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import Form from './forms/Form';

export const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});
    const [openRegForm, setOpenRegForm] = useState(false);

    // PREVENTS USER TO AUTOMATICALLY LOGOUT
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    //   REGISTER FUNCTION
    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        } catch (error) {
            console.log(error.message);
            alert('Wrong Credentials!');
        }
        setRegisterEmail('');
        setRegisterPassword('');
    };

    //   LOGIN FUNCTION
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
        } catch (error) {
            console.log(error.message);
            alert('Wrong Credentials!');
        }
    };

    //   LOGOUT FUNCTION
    const logout = async () => {
        await signOut(auth);
        setLoginEmail('');
        setLoginPassword('');
    };

    // HANDLE REGISTRATION

    const registerAccount = () => {
        register();
        setOpenRegForm(!openRegForm);
    };

    const items = 'hover:bg-slate-300 rounded-md py-4 cursor-pointer font-bold';

    return (
        <>
            <section className="bg-slate-200 p-8">
                {/* REGISTER FORM */}

               <FormRegistration  openRegForm={openRegForm} setRegisterEmail={setRegisterEmail} setRegisterPassword={setRegisterPassword} registerAccount={registerAccount} setOpenRegForm={setOpenRegForm}  />

                {/* LOGIN FORM */}

                {user === null && openRegForm === false ? (
                    <form
                        action=""
                        className="flex flex-col gap-4 items-center my-16"
                    >
                        <h1 className="text-2xl text-slate-900 text-center mb-2">
                            Login
                        </h1>
                        <input
                            type="email"
                            placeholder="Email..."
                            onChange={(event) => {
                                setLoginEmail(event.target.value);
                            }}
                            className="input w-full max-w-xs"
                        />
                        <input
                            type="password"
                            placeholder="Password..."
                            onChange={(event) => {
                                setLoginPassword(event.target.value);
                            }}
                            className="input w-full max-w-xs"
                        />
                        <div className="flex flex-row gap-4 mx-auto">
                            <span className="btn btn-active" onClick={login}>
                                Login
                            </span>
                            <span
                                className="btn btn-active btn-accent"
                                onClick={() => setOpenRegForm(!openRegForm)}
                            >
                                Need an account?
                            </span>
                        </div>
                    </form>
                ) : (
                    ''
                )}

                {/* WELCOME & LOGOUT */}

                {user && (
                    <>
                        <div className="grid grid-cols-1 mb-8 text-slate-900">
                            <div className="bg-slate-300 rounded-xl p-8 flex justify-between align-middle content-center">
                                <div>
                                    <p>Welcome!</p>
                                    <h1 className="text-xl">{user?.email}</h1>
                                </div>
                                <button
                                    className="btn ml-auto"
                                    onClick={logout}
                                >
                                    LOG OUT
                                </button>
                            </div>
                        </div>
                        <div className="flex text-slate-900 justify-between">
                            {/* PANEL */}

                            <div className="p-8 rounded-xl md:w-[25vw] w-{40vw} min-h-[60vh] bg-slate-100 flex flex-col gap-4 text-center">
                                <h1 className={items}>Add ArtWork</h1>
                                <h1 className={items}>Add Collection</h1>
                                <h1 className={items}>Collections</h1>
                            </div>

                            {/* PANEL ENDS */}
                            {/* CONTENT */}

                            <div className="p-8 rounded-xl md:w-[75vw] w-{60vw}">
                                <Form />
                            </div>

                            {/* CONTENT ENDS */}
                        </div>
                    </>
                )}
            </section>
        </>
    );
};
