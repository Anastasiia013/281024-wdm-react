const fields = {
    username: {
        type: "text",
        placeholder: "Username",
        name: "username",
        rules: {
            required: "Username must be exist"
        }
    },
    email: {
        type: "email",
        placeholder: "Email",
        name: "email",
        rules: {
            required: "Email must be exist"
        }
    },
    password: {
        type: "password",
        placeholder: "Password",
        name: "password",
        rules: {
            required: "password must be exist",
            minLength: {
                value: 6,
                message: "Password must contain al least 6 symbols"
            }
        }
    },
};

export default fields;