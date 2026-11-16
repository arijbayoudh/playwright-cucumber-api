import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { APIRequestContext } from '@playwright/test';

export class CustomWorld extends World {
  api!: APIRequestContext;
  response: any;
}

setWorldConstructor(CustomWorld);
