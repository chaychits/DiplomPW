import { test } from '@playwright/test';

export class ChallengesService {
    constructor (request) {
        this.request = request;
    }

    // Бизнес-сценарии для эндпоинта
    async get(token){
        return test.step('get /challenges', async () => {
            let response = await this.request.get(`${process.env.API_URL}/challenges`, {
            headers: {
                'x-challenger': token
        }
    });
        
        const headers = await response.headers();
        const body = await response.json();  
        const status = await response.status();  
        
        return {body, headers, status};
        });
    }

}