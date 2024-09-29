import HttpClient from './utils/HttpClient';
import config from './config.json';

class ContactService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(config.baseURL);
  }

  listContacts(orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orderBy=${orderBy}`);
  }

  getContactById(id: string) {
    return this.httpClient.get(`/contacts/${id}`);
  }

  updateContact(id: string, contact: models.Contact) {
    return this.httpClient.put(`/contacts/${id}`, {
      body: JSON.stringify(contact),
    });
  }

  createContact(contact: models.Contact) {
    return this.httpClient.post('/contacts', {
      body: JSON.stringify(contact),
    });
  }

  deleteContact(id: string) {
    return this.httpClient.delete(`/contacts/${id}`);
  }
}

export default new ContactService();
