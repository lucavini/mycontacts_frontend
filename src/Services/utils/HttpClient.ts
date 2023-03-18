import delay from '../../utils/delay';

export default class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`);

    await delay(500);
    return response.json();
  }
}
