import { faker } from '@faker-js/faker';
export class UserBuilder {
    withEmail() {
        this.email = `test_${Date.now()}_${faker.string.alphanumeric(5)}@robot.dev`;
        return this;
    }
    withPassword(length = 10) {
        this.password = faker.internet.password({length: length});
        return this;
    }

    withUsername(name) {
        this.username = name ?? faker.person.fullName();
        return this;
    }
    build() {
        const result = structuredClone(this);
        return result;
    
    }
}
