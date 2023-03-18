import HttpClient from './utils/HttpClient';

class ContactService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?prderBy=${orderBy}`);
  }
}

export default new ContactService();
