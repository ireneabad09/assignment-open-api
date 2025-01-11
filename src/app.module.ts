import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OmdbService } from './omdb/omdb.service';
import { OmdbController } from './omdb/omdb.controller';
import { AuthModule } from './auth/auth.module';  
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';  

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),  
    HttpModule,
    AuthModule, 
    MoviesModule,
  ],
  controllers: [OmdbController, AppController],
  providers: [OmdbService, AppService],
})
export class AppModule {}
