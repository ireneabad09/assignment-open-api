import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  // Make sure this is present
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const secretKey = configService.get<string>('JWT_SECRET_KEY');
        console.log('JWT_SECRET_KEY:', secretKey);  // Log the key to check
        return {
          secret: secretKey,  // Fetch secret from .env
          signOptions: { expiresIn: '60s' },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
