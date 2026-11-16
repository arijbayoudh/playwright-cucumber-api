import { request, APIRequestContext } from '@playwright/test';
import { env } from '../config/env.config';

export class ApiClient {
  static async create(): Promise<APIRequestContext> {
    return await request.newContext({
      baseURL: env.baseUrl,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });
  }
}
