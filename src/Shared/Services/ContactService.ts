import HttpClient from './utils/HttpClient';

class ContactService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactById(id: string) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  createContact(contact: models.Contact) {
    return this.httpClient.post('/contacts', {
      body: JSON.stringify(contact),
    });
  }
}

export default new ContactService();
