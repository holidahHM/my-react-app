export default class errorCodes {
    static getErrorMessageFromCode(errorCode) {
        switch (errorCode) {
            case 400:
                return 'Nothing to display, Data Not Found';
            case 401:
                return 'Invalid email or Password';
            case 500:
                return 'Unexpected error occurred. Check your network connection';
            case 404:
                return 'There was an error Page not found';
            default:
                return 'Unexpected error occurred. Please try again';
        }
    }
}