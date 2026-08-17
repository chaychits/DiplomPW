import { test, expect } from '../../src/fixtures/fixture';
import { allure } from 'allure-playwright';
import { UserBuilder } from '../../src/builders/index';


test('Пользователь может зарегистрироваться используя email и пароль', async ({app}) => {
    await allure.epic('UI Testing');
    await allure.feature('Authorization');
    await allure.story('Registration');
    await allure.severity('blocker');


    const user = new UserBuilder().withEmail().withPassword().withUsername().build();

    await app.main.openSignUpPage();
    await app.registration.signup(user.username, user.email, user.password);

    await expect(app.yourfeed.getProfileName()).toContainText(user.username);
});



test('Авторизованный пользователь может выйти из аккаунта', async ({app}) => {
    await allure.epic('UI Testing');
    await allure.feature('Authorization');
    await allure.story('Logout');
    await allure.severity('critical');

    const user = new UserBuilder().withEmail().withPassword().withUsername().build();

    await app.main.openSignUpPage();
    await app.registration.signup(user.username, user.email, user.password);
    await app.profile.toLogOut();
    
    await expect(await app.yourfeed.getProfileName()).toContainText('Login');
});

