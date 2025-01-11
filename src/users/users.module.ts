// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],  // Provide the UsersService here
  exports: [UsersService],    // Make the UsersService available for other modules
})
export class UsersModule {}
