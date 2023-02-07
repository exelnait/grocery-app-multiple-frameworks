import React, {useCallback, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../providers/AuthProvider";

export function LoginPage() {
    const [formState, setFormState] = useState({
        email: "",
        emailError: "",
        password: "",
        passwordError: ""
    });

    const validate = useCallback(() => {
        let isError = false;
        const emailRegex = /\S+@\S+\.\S+/;
        if (!formState.email) {
            isError = true;
            setFormState((prevState) =>
                ({...prevState, emailError: "Email is required"}));
        } else if (!emailRegex.test(formState.email)) {
            isError = true;
            setFormState((prevState) =>
                ({...prevState, emailError: "Email is invalid"}));
        }
        if (!formState.password) {
            isError = true;
            setFormState((prevState) =>
                ({...prevState, passwordError: "Password is required"}));
        }
        return isError;
    }, [formState]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        console.log(name, value);
        setFormState((prevProps) => ({
            ...prevProps,
            [name]: value,
            emailError: "",
            passwordError: ""
        }));
    }
    let navigate = useNavigate();
    let auth = useAuth();

    const onSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const err = validate();
        if (!err) {
            auth.signIn(formState.email, formState.password).then(() => {
                navigate("/");
            });
        }
    }, [formState, auth, validate]);
    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form className="space-y-4 md:space-y-6" onSubmit={onSubmit} noValidate>
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900">Your
                                    email</label>
                                <input type="email" onChange={onChange} name="email" id="email"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       placeholder="name@company.com" required/>
                                {formState.emailError && <p className="text-xs text-red-500">{formState.emailError}</p>}
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" onChange={onChange} name="password" id="password"
                                       placeholder="••••••••"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                       required/>
                                {formState.passwordError &&
                                    <p className="text-xs text-red-500">{formState.passwordError}</p>}
                            </div>
                            <button type="submit"
                                    className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign
                                in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LoginPage;