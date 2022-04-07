import { FormRegistration } from './forms/FormRegistration';
import { useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { auth } from '../firebase/config';
import Form from './forms/Form';
import EditCollections from './EditCollections';
import EditSlider from './EditSlider';
import EditFeaturedArtwork from './EditFeaturedArtwork';
import Graph from './Graph';
export const Login = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});
    const [openRegForm, setOpenRegForm] = useState(false);
    const [route, setRoute] = useState('');

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

    const items =
        'hover:bg-slate-400 rounded-md py-4 cursor-pointer font-bold active:bg-slate-600 uppercase px-4 md:px-0 text-sm';

    return (
        <div className="bg-slate-200 p-8">
            <section className="container mx-auto min-h-[70vh]">
                {/* LOGIN FORM */}
                {user === null && (
                    <form className="flex flex-col gap-4 items-center my-16">
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
                        </div>
                    </form>
                )}

                {/* WELCOME & LOGOUT */}

                {user && (
                    <>
                        <div className="grid grid-cols-1 mb-8 text-slate-900">
                            <div className="bg-slate-300 rounded-xl p-8 flex justify-between align-middle content-center font-semibold ">
                                <div>
                                    <p>Welcome!</p>
                                    <h1 className="text-lg md:text-xl">
                                        {user?.email}
                                    </h1>
                                </div>
                                <button
                                    className="btn ml-auto"
                                    onClick={logout}
                                >
                                    LOG OUT
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row text-slate-900 justify-between">
                            {/* PANEL */}

                            <div className="p-8 rounded-xl w-full md:max-w-[25vw] xl:max-w-[20vw] bg-slate-100  gap-4 text-center flex md:flex-col justify-evenly md:justify-start flex-wrap">
                                <button
                                    onClick={() => setRoute(1)}
                                    className={`${items} + ${
                                        route === 1 && 'bg-slate-300'
                                    }`}
                                >
                                    Add ArtWork
                                </button>
                                <button
                                    onClick={() => setRoute(2)}
                                    className={`${items} + ${
                                        route === 2 && 'bg-slate-300'
                                    }`}
                                >
                                    Edit Collections
                                </button>
                                <button
                                    onClick={() => setRoute(3)}
                                    className={`${items} + ${
                                        route === 3 && 'bg-slate-300'
                                    }`}
                                >
                                    Main Slider
                                </button>
                                <button
                                    onClick={() => setRoute(4)}
                                    className={`${items} + ${
                                        route === 4 && 'bg-slate-300'
                                    }`}
                                >
                                    Featured Artworks
                                </button>
                                <button
                                    onClick={() => setRoute(5)}
                                    className={`${items} + ${
                                        route === 5 && 'bg-slate-300'
                                    }`}
                                >
                                    Statistics
                                </button>
                            </div>

                            {/* PANEL ENDS */}
                            {/* CONTENT */}

                            <div className="p-0 rounded-xl xl:w-[80vw]  md:w-[75vw] w-full md:p-8 ">
                                {route === 1 ? (
                                    <Form />
                                ) : route === 2 ? (
                                    <EditCollections />
                                ) : route === 3 ? (
                                    <EditSlider />
                                ) : route === 4 ? (
                                    <EditFeaturedArtwork />
                                ) : route === 5 ? (
                                    <Graph />
                                ) : (
                                    <div className="flex flex-col p-8 justify-center items-center mt-16 gap-8">
                                        <img
                                            src="/undraw_skateboard_d6or.svg"
                                            alt="Welcome"
                                            className="md:w-1/2"
                                        />
                                        <h1 className="font-bold">
                                            Artwork Time!
                                        </h1>
                                    </div>
                                )}
                            </div>

                            {/* CONTENT ENDS */}
                        </div>
                    </>
                )}
            </section>
        </div>
    );
};
