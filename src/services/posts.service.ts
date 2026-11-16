import { BaseService } from '../core/baseService';
import { Endpoints } from '../config/endpoints';
import { Logger } from '../utils/logger';

export class PostsService extends BaseService {
  getAllPosts() {
    return this.get(Endpoints.posts);
  }

  getPostById(id: number) {
  Logger.step(`Calling GET /posts/${id}`);
  return this.get(`${Endpoints.posts}/${id}`);
}

  createPost(payload: object) {
    return this.post(Endpoints.posts, payload);
  }
}
