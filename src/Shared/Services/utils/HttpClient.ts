import APIError from '../../Errors/APIError';
import delay from '../../utils/delay';

export default class HttpClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async makeRequest(path: string, options?: RequestInit) {
    await delay();

    let body = null;
    const headers = new Headers();

    if (options?.body) {
      headers.append('Content-type', 'application/json');
    }

    if (options?.headers) {
      Object.entries(options.headers).forEach(([key, value]) =>
        headers.append(key, value),
      );
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers,
    });

    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }

  get(path: string, options?: RequestInit) {
    return this.makeRequest(path, {
      method: 'GET',
      headers: options?.headers,
    });
  }

  post(path: string, options?: RequestInit) {
    return this.makeRequest(path, {
      method: 'POST',
      ...options,
    });
  }
}
