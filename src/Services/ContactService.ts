import HttpClient from './utils/HttpClient';

class ContactService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(
      `/contacts/65c412ab-34a5-4075-bb99-1e4e62a41db9?orderBy=${orderBy}`,
    );
  }
}

export default new ContactService();
