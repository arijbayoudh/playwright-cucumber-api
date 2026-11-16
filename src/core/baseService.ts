import { APIRequestContext, APIResponse } from '@playwright/test';

export abstract class BaseService {
  constructor(protected readonly api: APIRequestContext) {}

  protected async get(url: string): Promise<APIResponse> {
    return this.api.get(url);
  }

  protected async post(url: string, body: object): Promise<APIResponse> {
    return this.api.post(url, { data: body });
  }

  protected async put(url: string, body: object): Promise<APIResponse> {
    return this.api.put(url, { data: body });
  }

  protected async delete(url: string): Promise<APIResponse> {
    return this.api.delete(url);
  }
}
