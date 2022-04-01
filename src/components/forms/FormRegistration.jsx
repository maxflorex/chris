export function FormRegistration({
    openRegForm,
    setRegisterEmail,
    setRegisterPassword,
    registerAccount,
    setOpenRegForm,
}) {
    return (
        <div>
            {openRegForm === true && (
                <form
                    action=""
                    className="flex flex-col gap-4 items-center my-16"
                >
                    <h1 className="text-2xl text-slate-900 text-center mb-2">
                        Create Account
                    </h1>
                    <input
                        className="input w-full max-w-xs"
                        type="email"
                        required
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                    />
                    <input
                        className="input w-full max-w-xs"
                        type="password"
                        required
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                    />
                    <div className="flex flex-row gap-4 mx-auto">
                        <span
                            className="btn btn-active btn-accent"
                            onClick={registerAccount}
                        >
                            Sign Up
                        </span>
                        <span
                            className="btn btn-active"
                            onClick={() => setOpenRegForm(!openRegForm)}
                        >
                            Registered already?
                        </span>
                    </div>
                </form>
            )}
        </div>
    );
}
