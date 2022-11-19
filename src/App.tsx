import { Route, Routes, BrowserRouter, Link } from "react-router-dom";

import "./App.css";

import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";

function Welcome(): JSX.Element {
    return (
        <>
            <h1>Welcome</h1>
            <Link to="/sign-in" replace>Sign in</Link>
            <Link to="/sign-up" replace>Sign up</Link>
        </>
    )
}

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
