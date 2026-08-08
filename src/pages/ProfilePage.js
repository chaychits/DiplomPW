 import {test, expect} from '@playwright/test';
 
 export class ProfilePage {
    constructor (page) {
        // это браузер
        this.page = page;

        // здесь мы описываем техническую реализацию страницы
        
        // здесь все про элементы
        this.dropDownlist = page.getByText(/.+/).filter({ has: page.locator('img') });
        this.logOutDropDown =  page.getByRole('link', { name: 'Logout' });
        this.profileDropDown = page.getByRole('link', { name: 'Profile' });
        
    }

        // Бизнес-сценарии на страничке

    async toLogOut() { 
        return test.step('Выйти из аккаунта', async() =>{       
    await this.dropDownlist.click();
    await this.logOutDropDown.click();
    })
};


    async openProfilePage() {
        return test.step('Открыть страницу профиля', async() =>{
    await this.dropDownlist.click();
    await this.profileDropDown.click();
    })
};





}

