import HttpClient from './utils/HttpClient';

class ContactService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  async createContact(contact: models.Contact) {
    return this.httpClient.post('/contacts', {
      body: JSON.stringify(contact),
    });
  }
}

export default new ContactService();
