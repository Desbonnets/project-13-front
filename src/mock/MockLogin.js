/**
 * Retourne le mock du login
 * @param {Object} userCredentials {email: 'test@test.com', password: 'test'}
 * @returns {Object}
 */
export const MockDataLogin = (userCredentials) => {
    let mocked;
    if(userCredentials.email === 'tony@stark.com' && userCredentials.password === 'password123'){
        mocked = {
            status: 200,
            message: "User successfully logged in",
            body: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTU2NjliYmI2NTdkMzkzYzk3ZTBmMCIsImlhdCI6MTcwNDk4MzQ2NiwiZXhwIjoxNzA1MDY5ODY2fQ.6N6HUbtuMFuWMyXrMZ6yCLwJ5cV5MHDwZyCQjGIk1Gc"
            }
        };
    }else if(userCredentials.email === 'steve@rogers.com' && userCredentials.password === 'password456'){
        mocked = {
            status: 200,
            message: "User successfully logged in",
            body: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTU2NjliYmI2NTdkMzkzYzk3ZTBlZiIsImlhdCI6MTcwNDk4MzY3OSwiZXhwIjoxNzA1MDcwMDc5fQ.1OWIsuf9X2I7xH6tr-mKMnNwBKEp4Hcbki-4jkPXQFM"
            }
        };
    }else{
        return false;
    }
    return mocked;
};
