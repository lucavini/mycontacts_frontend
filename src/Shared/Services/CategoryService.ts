import HttpClient from './utils/HttpClient';

class CategoryService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }
}

export default new CategoryService();
