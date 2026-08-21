import { test, expect } from '../../src/fixtures/index.js';
import { allure } from 'allure-playwright';
import { UserBuilder } from '../../src/builders/index';


test('Добавленная в избранное статья отображается во вкладке Favorited Articles', async ({app}) => {
    
    await allure.epic('UI Testing');
    await allure.feature('Articles');
    await allure.story('Add article to favorites');
    await allure.severity('critical');

    const user = new UserBuilder().withEmail().withPassword().withUsername().build();

    await app.main.openSignUpPage();
    await app.registration.signup(user.username, user.email, user.password);
    await app.yourfeed.openGlobalFeed();
    await app.yourfeed.openFirstArticle(); 
    await app.newArticle.addToFavorites(); 
    await app.profile.openProfilePage();
    await app.favorite.openFavorites();

    await expect(app.favorite.favoriteArticle).toBeVisible();

});





