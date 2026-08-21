import { faker } from '@faker-js/faker';
export class ArticleBuilder {
    withTitle() {
        this.title = faker.lorem.sentence();
        return this;
    }
    withDescription() {
        this.description = faker.lorem.paragraph();
        return this;
    }

    withContent() {
        this.content = faker.lorem.paragraphs(2);
        return this;
    }

    build() {
        const result = structuredClone(this);
        return result;
    }
}

