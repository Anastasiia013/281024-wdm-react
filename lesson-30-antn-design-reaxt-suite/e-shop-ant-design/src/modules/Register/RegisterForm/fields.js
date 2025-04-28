const fields = {
    username: {
        label: "Username",
        type: "text",
        placeholder: "Username",
        name: "username",
        rules: [{
            required: true,
            message: "Username must be exist"
        }]
    },
    email: {
        label: "Email",
        type: "email",
        placeholder: "Email",
        name: "email",
        rules: [{
            required: true,
            message: "Email must be exist"
        }]
    },
    password: {
        label: "Password",
        type: "password",
        placeholder: "Password",
        name: "password",
        rules: [{
            required: true,
            messagE: "password must be exist",
            minLength: {
                value: 6,
                message: "Password must contain al least 6 symbols"
            }
        }]
    },
};

export default fields;