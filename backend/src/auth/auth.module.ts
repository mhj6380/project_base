import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { User } from "./entities/auth.entity";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./local.strategy";
import { JwtStrategy } from "./jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { ConfigModule, ConfigService } from "@nestjs/config";
// import { Membership } from "src/app/entities/membership.entity";
import { Splash } from "src/app/entities/splash.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Splash]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // secret: configService.get("JWT_SECRET"),
        secret: process.env.JWT_SECRET,
      }),
    }),
    PassportModule.register({ defaultStrategy: "jwt" }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
@Module({})
export class AuthModule {}
