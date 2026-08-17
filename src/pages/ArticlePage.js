export class ArticlePage {
    constructor (page) {
        // это браузер
        this.page = page;
        // здесь мы описываем техническую реализацию страницы
        
        // здесь все про элементы
        this.newArticle = page.getByRole('heading', { level: 1 });
        this.articleDescription = page.locator('.subtitle');
        this.articleContent = page.locator('.article-content p');

        this.deleteArticleButton = page.getByRole('button', {name: ' Delete Article'}).first();
        this.updateArticleButton = page.getByRole('link', { name: 'Edit Article' }).first();
        this.buttonFavoriteArticle = page.locator('button').filter({hasText: /Favorite/});
    }

        // Бизнес-сценарии на страничке
        async deleteArticle(){
            
            this.page.once('dialog', async dialog => {
            await dialog.accept();
        });

        await this.deleteArticleButton.click();
        
    }

        async editArticle() {
            await this.updateArticleButton.click();
    }

        async addToFavorites() {
        await this.buttonFavoriteArticle.first().click();
    }
    
};