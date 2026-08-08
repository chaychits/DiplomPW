import {MainPage, RegistrationPage, YourfeedPage, ArticlePage, EditArticlePage, ProfilePage, ProfileFavoritesPage } from '../pages/index';

// Фасад

export class App {
    constructor(page)
    {
        this.main = new MainPage(page);
        this.registration = new RegistrationPage(page);
        this.yourfeed = new YourfeedPage(page);
        this.newArticle = new ArticlePage(page);
        this.create = new EditArticlePage(page);
        this.profile = new ProfilePage(page);
        this.favorite = new ProfileFavoritesPage(page); 
    }
}