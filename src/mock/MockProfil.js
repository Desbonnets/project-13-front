/**
 * Retourne le mock du profil
 * @param {Object} userCredentials {email: 'test@test.com', password: 'test'}
 * @returns {Object}
 */
export const MockDataProfil = (userEmail) => {
    let mocked;
    if(userEmail === 'tony@stark.com'){
        mocked = {
            status: 200,
            message: "Successfully got user profile data",
            body: {
                email: "tony@stark.com",
                firstName: "Tony",
                lastName: "Stark",
                createdAt: "2024-01-03T13:52:27.651Z",
                updatedAt: "2024-01-03T13:52:27.651Z",
                id: "6595669bbb657d393c97e0f0"
            }
        };
    }else if(userEmail === 'steve@rogers.com'){
        mocked = {
            status: 200,
            message: "User profil successfully",
            body: {
                firstName:	'Steve',
                lastName:	'Rogers'
            }
        };
    }else{
        return false;
    }
    return mocked;
};
