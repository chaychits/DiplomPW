import {test, expect} from '@playwright/test';

export class MainPage {
    constructor (page) {
        // это браузер
        this.page = page;
        // здесь мы описываем техническую реализацию страницы
        
        // здесь все про элементы
        this.signupButton = page.getByRole('link', { name: 'Sign up' });
    }

        // Бизнес-сценарии на страничке
        async openSignUpPage() {
            return test.step('Нажать на кнопку Sign up', async() => {
        await this.signupButton.click();
    })
}

        async goto ()
        {
            return test.step('Открыть главную страницу', async() =>{
        await this.page.goto(`/`)})
    }
}