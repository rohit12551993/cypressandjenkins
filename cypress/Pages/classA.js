import { faker } from '@faker-js/faker';

export default class ClassA {
  getUsername() {
    const username = faker.person.firstName();
    return username;
  }
}
