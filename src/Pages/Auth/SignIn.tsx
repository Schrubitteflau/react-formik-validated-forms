import { Button, Checkbox, FormControlLabel, Grid, Link } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import * as Yup from "yup";
import { FormikHelpers } from "formik";

import AuthLayout from "./AuthLayout";
import TextField from "~/FormsUI/TextField";

const INITIAL_FORM_STATE = {
    username: "test1",
    password: "test12",
};

type FormType = typeof INITIAL_FORM_STATE;

const FORM_VALIDATION_SCHEMA = Yup.object().shape({
    username: Yup.string()
        .required("Required"),
    password: Yup.string()
        .required("Required")
        .min(6)
});

function SignInFooter(): JSX.Element {
    return (
        <>
            <Grid item xs>
                <Link href="#" variant="body2" onClick={() => alert("Not available yet")}>
                    Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <RouterLink to="/signup">
                    <Link href="#" variant="body2">
                        Don't have an account? Sign Up
                    </Link>
                </RouterLink>
            </Grid>
        </>
    );
}

function SignInForm(): JSX.Element {
    return (
        <>
            <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Sign In
            </Button>
        </>
    );
}

export default function SignIn(): JSX.Element {
    const navigate = useNavigate();

    function handleSubmit(values: FormType, actions: FormikHelpers<FormType>): void {
        alert(`${values.username}, ${values.password}`);

        navigate("/welcome", {
            replace: true
        });
    }

    return (
        <AuthLayout
            title="Sign In"
            footer={<SignInFooter />}
            form={<SignInForm />}
            initialValues={INITIAL_FORM_STATE}
            validationSchema={FORM_VALIDATION_SCHEMA}
            onSubmit={handleSubmit}
        />
    );
}
