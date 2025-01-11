import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';  // Assuming UsersService exists
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly configService: ConfigService,  // Inject ConfigService
  ) {}

  async login(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const secretKey = this.configService.get<string>('JWT_SECRET_KEY');
      
      // Log the secret key to verify it's being loaded correctly
      console.log('JWT_SECRET_KEY:', secretKey);

      const payload = { username: user.username, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new Error('Invalid credentials');
  }
}
