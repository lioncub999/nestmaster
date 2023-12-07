import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { UserRepository } from "../user.repository";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {
    super({
      secretOrKey: "Secret1234",
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // async validate(payload) {
  //   const { username } = payload;
  //   const user: User = await this.userRepository.findOne({
  //     where: { username },
  //   });

  //   if (!user) {
  //     throw new UnauthorizedException();
  //   }

  //   return user;
  // }

  async validate(payload) {
    try {
      const { username } = payload;
      const user: User = await this.userRepository.findOne({
        where: { username },
      });

      if (!user) {
        throw new UnauthorizedException();
      }

      return user;
    } catch (error) {
      console.log(payload);
      console.error(error); // 에러 발생 시 로그에 출력
      throw new UnauthorizedException();
    }
  }
}
