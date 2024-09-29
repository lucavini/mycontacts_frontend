import HttpClient from './utils/HttpClient';
import config from './config.json';

class CategoryService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient(config.baseURL);
  }

  listCategories() {
    return this.httpClient.get('/categories');
  }

  createCategory(data: models.Category) {
    return this.httpClient.post('/categories', {
      body: JSON.stringify(data),
    });
  }
}

export default new CategoryService();
