import { test } from '../../src/fixtures/index.js';
import { expect } from '@playwright/test';

let token
let location


test.beforeAll(async ({ api }) => {
    
    const response = await api.challenger.post();
    token = response.headers['x-challenger']
    location = response.headers['location'];
});



// Тест 1 Создание нового сеанса /challenger


test('POST /challenger (201) Created @post', async ({api}) => {
    const response = await api.challenger.post();
    
    expect(response.status).toBe(201);
});
