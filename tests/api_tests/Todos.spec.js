import { test } from '../../src/fixtures/fixture.js';
import { expect } from '@playwright/test';
import { TodoBuilder } from '../../src/builders/todo.js';

const urlApi = 'https://apichallenges.eviltester.com';

let token
let location

const EXISTING_ID = 1;


test.beforeAll(async ({ api }) => {
    
    const response = await api.challenger.post();
    token = response.headers['x-challenger']
    location = response.headers['location'];

    console.log(`${urlApi}${location}`)
});

// Тест 4 Получение списка задач в JSON /todos

test('Get/todos (200) OK @get', async ({api}) => {
    const response = await api.todos.getTodos(token);

    expect(response.status).toBe(200);
    expect(response.body.todos).toBeDefined();
    expect(Array.isArray(response.body.todos)).toBeTruthy();
});

// Тест 6 Существующая задача /todos

test('Get/todos/1 (200) @get', async ({api}) => {
    const response = await api.todos.getTodosById(token, EXISTING_ID);

    const [todo] = response.body.todos;

    expect(response.status).toBe(200);
    expect(todo.id).toBe(1);
    expect(todo.title).toBeDefined();
    
});

// Тест 8 Создание задачи /todos

test('POST /todos (201) @post', async ({ api }) => {
    const todo = new TodoBuilder()
        .withTitle('A title')
        .withDoneStatus(true)
        .withDescription('my description')
        .build();

    const response = await api.todos.createTodo(token, todo);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe(todo.title);
    expect(response.body.doneStatus).toBe(todo.doneStatus);
    expect(response.body.description).toBe(todo.description);
});

// Тест 10 Неверный doneStatus /todos

test('POST /todos (422) invalid doneStatus @post', async ({ api }) => {
    const todo = new TodoBuilder()
        .withTitle('A title')
        .withDoneStatus(55)
        .withDescription('my description')
        .build();

    const response = await api.todos.createTodo(token, todo);

    expect(response.status).toBe(422);

});
// Тест 20 Обновление существующей задачи put /todos

test('PUT /todos/{id} full (200) @put', async ({ api }) => {
    
    const getResponse = await api.todos.getTodosById(token, EXISTING_ID);

expect(getResponse.status).toBe(200);

    
    const updatedTodo = new TodoBuilder()
    .withTitle('Updated title put')
    .withDoneStatus(false)
    .withDescription('something new')
    .build();

    const updateResponse = await api.todos.updateTodo(token, EXISTING_ID, updatedTodo);

    expect(updateResponse.status).toBe(200);
    expect(updateResponse.body.title).toBe('Updated title put');
    
});

// Тест 24 удаление таски /todos

test('DELETE /todos/{id} (200) @delete', async ({ api }) => {
    const todo = new TodoBuilder()
        .withTitle('A title')
        .withDoneStatus(true)
        .withDescription('my description')
        .build();

    const response = await api.todos.createTodo(token, todo);

    let taskDelete = response.body.id
    

    const deleteTodo = await api.todos.deleteTodo(token, taskDelete);

    const getResponse = await api.todos.getTodosById(token, taskDelete);

    expect(getResponse.status).toBe(404);
    expect(deleteTodo.status).toBe(204);

});