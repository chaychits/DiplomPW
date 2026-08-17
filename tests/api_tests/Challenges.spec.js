import { test } from '../../src/fixtures/fixture.js';
import { expect } from '@playwright/test';

let token
let location


test.beforeAll(async ({ api }) => {
    
    const response = await api.challenger.post();
    token = response.headers['x-challenger']
    location = response.headers['location'];
});


// Тест 3 Получение списка задач в JSON формате с прогрессом /challenges
test('GET /challenges (200) OK @get', async ({ api }) => {
    const response = await api.challenges.get(token);

    expect(response.status).toBe(200);
    expect(response.body.challenges).toBeDefined();
});