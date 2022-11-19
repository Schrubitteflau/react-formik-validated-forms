import { Route, Routes } from "react-router";

import "./App.css";

import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";

// TODO : garder ?
// TODO : import react ?
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      sx?: any//SxProps<Theme>;
  }
}

function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
    );
}

export default App;
