// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { JwtStrategy as PassportJwtStrategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';  // Correct the import
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersService: UsersService,  // Directly inject UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key',
    });
  }

  async validate(payload: any) {
    const user = await this.usersService.findOne(payload.sub);
    return user;  // Return the user or throw an exception if not found
  }
}
