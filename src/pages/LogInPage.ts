import BasePage from './BasePage';

class LoginPage extends BasePage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login > button');
    }

    get flash() {
        return $('#flash').getText();
    }

    get flashElement() {
        return $('#flash');
    }

    get open() {
        return browser.url('/login');
    }

    loginWithCredentials(username, password) {
        this.username.setValue(username);
        this.password.setValue(password);
        this.submit.click();
    }
}

export default new LoginPage();
