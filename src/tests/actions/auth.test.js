import { loginUser, logoutUser } from '../../actions/auth';

test("Test Login user action", () => {
    const result = loginUser('abda313');
    expect(result).toEqual({
        type: 'LOGIN_USER',
        id: 'abda313'
    });
})

test("Test Logout user action", () => {
    const result = logoutUser();
    expect(result).toEqual({
        type: 'LOGOUT_USER'
    });
})