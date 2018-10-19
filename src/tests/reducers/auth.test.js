import AuthReducer from '../../reducers/auth';

test("Test Authentication reducer for login", () => {
    const result = AuthReducer(undefined, {
        type: 'LOGIN_USER',
        id: 'abc123'
    });
    expect(result).toEqual({
        user: 'abc123'
    });
});

test("Test Authentication reducer for logout", () => {
    const result = AuthReducer({user: 'abc123'}, {
        type: 'LOGOUT_USER'
    });
    expect(result).toEqual({});
});