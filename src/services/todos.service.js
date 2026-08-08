import { test } from '@playwright/test';

// todo
const urlApi = 'https://apichallenges.eviltester.com';

export class TodosService {
    constructor (request) {
        this.request = request;
    }
        // вспомогательные методы
    async parseJson(response) {
        return {
            body: await response.json(),
            headers: response.headers(),
            status: response.status()
    };
}

    async parseText(response) {
        return {
            body: await response.text(),
            headers: response.headers(),
            status: response.status()
        };
    }


    // Бизнес-сценарии для эндпоинта
    async getTodos(token){
        return test.step('get /todos', async () => {
            const response = await this.request.get(`${urlApi}/todos`, {
            headers: {
                'x-challenger': token
        }
    });
        return this.parseJson(response)    
        });
    }



async getTodosById(token, id) {
    return test.step(`GET /todos/${id}`, async () => {
    const response = await this.request.get(`${urlApi}/todos/${id}`,{
        headers: {
            'x-challenger': token
        }
    });

        return this.parseJson(response);

})
}

async 	createTodo(token, todo){
        return test.step('post /todos', async () => {
            const response = await this.request.post(`${urlApi}/todos`, {
            headers: {
                'x-challenger': token
        },
        data: todo 
    });
        
        return this.parseJson(response);
        });
    }

async updateTodo(token, id, todo) {
    return test.step('put/todos{id}', async () => {
        const response = await this.request.put(`${urlApi}/todos/${id}`, {
            headers: {
                'x-challenger': token
            },
            data: todo
        });

        return this.parseJson(response);
        });
}    


async deleteTodo(token, id) {
    return test.step('post/todos{id}', async () => {
        const response = await this.request.delete(`${urlApi}/todos/${id}`, {
            headers: {
                'x-challenger': token
            }
        });

        const headers = response.headers();
        const status = response.status();  
        
        const body = null;
        

        return { body, headers, status };
    })
};
}








