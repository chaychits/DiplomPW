import { test as base } from '@playwright/test';
export { expect } from '@playwright/test';
import { App } from '../pages/app.js';
import { Api } from '../services/api.js';


export const test = base.extend({

app: async ({ page }, use) => {
    const app = new App(page);
    await app.main.goto();
    await use(app);
},
api: async ({ request }, use) => {
        const api = new Api(request);
        await use(api);
    },
});




