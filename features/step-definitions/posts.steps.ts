import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ApiClient } from '../../src/core/apiClient';
import { PostsService } from '../../src/services/posts.service';

let postsService: PostsService;

Given('the API client is ready', async function () {
  this.api = await ApiClient.create();
  postsService = new PostsService(this.api);
});

When('I request the post with id {string}', async function (postId: string) {
  this.response = await postsService.getPostById(Number(postId));
  this.responseBody = await this.response.json();
});

Then('the response status should be {int}', function (statusCode: number) {
  expect(this.response.status()).toBe(statusCode);
});
