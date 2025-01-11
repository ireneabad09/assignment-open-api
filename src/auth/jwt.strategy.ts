import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';  // Your UsersService to fetch user data

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your-secret-key',  // Make sure this matches the key you used in JwtModule.register
    });
  }

  async validate(payload: any) {
    // Use the `sub` (user ID) from the payload to find the user
    const user = await this.usersService.findOneById(payload.sub);
    return user;  // Return the user to be added to the request object
  }
}
