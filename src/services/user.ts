import { Collection, ObjectId } from 'mongodb';
import { BaseService } from './base';
import { User } from '../interfaces/user';

export class UserService extends BaseService {
  private collection: Collection;
  constructor() {
    super();
    this.collection = this.db.collection('users');
  }

  async findBy(email?: string) {
    return await this.collection.findOne<User>({
      email,
    });
  }
}
