import { faker } from '@faker-js/faker';

export class TodoBuilder {
    constructor() {
        this.title = faker.lorem.sentence();
        this.doneStatus = undefined
        this.description = undefined
    }

    withTitle(title) {
        this.title = title ?? faker.string.alpha();
        return this;
    }

    withDoneStatus(doneStatus) {
        this.doneStatus = doneStatus;
        return this;
    }

    withDescription(description) {
        this.description = description;
        return this;
    }

    build() {
        if (this.title === undefined || this.title === null) {
            throw new Error('Title is required');
        }

        const todo = {
            title: this.title
        };

        if (this.doneStatus !== undefined) {
            todo.doneStatus = this.doneStatus;
        }

        if (this.description !== undefined) {
            todo.description = this.description;
        }
    return structuredClone(todo);
}
}