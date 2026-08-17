import { test, expect } from '../../src/fixtures/fixture';
import { allure } from 'allure-playwright';
import { UserBuilder, ArticleBuilder } from '../../src/builders/index';


test('Пользователь может создать новую статью', async ({app}) => {

    await allure.epic('UI Testing');
    await allure.feature('Articles');
    await allure.story('Create article');
    await allure.severity('critical');

    const user = new UserBuilder().withEmail().withPassword().withUsername().build();
    const article = new ArticleBuilder().withTitle().withDescription().withContent().withTag().build();

    await app.main.goto();
    await app.main.openSignUpPage();
    await app.registration.signup(user.username, user.email, user.password);
    await app.yourfeed.openNewArticle();
    await app.create.createArticle(article.title, article.description, article.content)

    await expect(app.newArticle.newArticle).toHaveText(article.title); 
    await expect(app.newArticle.articleContent).toHaveText(article.content);
});



test('Пользователь может изменить название статьи', async ({app}) => {
    
    await allure.epic('UI Testing');
    await allure.feature('Articles');
    await allure.story('Edit article');
    await allure.severity('critical');

    const user = new UserBuilder().withEmail().withPassword().withUsername().build();   
    const article = new ArticleBuilder().withTitle().withDescription().withContent().withTag().build();
    const updatedTitle = `Updated ${article.title}`;

    await app.main.openSignUpPage();
    await app.registration.signup(user.username, user.email, user.password);
    await app.yourfeed.openNewArticle();
    await app.create.createArticle(article.title, article.description, article.content)
    await app.newArticle.editArticle();    
    await app.create.updateArticleTitle(updatedTitle);

    await expect(app.newArticle.newArticle).toHaveText(updatedTitle);
});



test('Пользователь может удалить статью', async ({app}) => {

    await allure.epic('UI Testing');
    await allure.feature('Articles');
    await allure.story('Delete article');
    await allure.severity('critical');

    const user = new UserBuilder().withEmail().withPassword().withUsername().build();    
    const article = new ArticleBuilder().withTitle().withDescription().withContent().withTag().build();

    await app.main.openSignUpPage();
    await app.registration.signup(user.username, user.email, user.password);
    await app.yourfeed.openNewArticle();
    await app.create.createArticle(article.title, article.description, article.content)
    await app.newArticle.deleteArticle();

    await expect(app.yourfeed.articleNotAvailable).toHaveText('Articles not available.');

});
