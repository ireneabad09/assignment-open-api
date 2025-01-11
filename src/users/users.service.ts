import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { id: 1, username: 'youdomainuser', password: 'password123' },  // Sample user data
  ];

  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  // Add this method to find a user by ID
  async findOneById(id: number) {
    return this.users.find(user => user.id === id);
  }
}
