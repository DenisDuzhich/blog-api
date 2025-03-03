import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UsersService } from "../users/users.service";

//Didn't quite figure out getting jwtSecret from .env yet
const jwtSecret = <string>process.env.JWT_SECRET;

@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy, 'jwtStrat'){
    constructor(private usersService: UsersService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: jwtSecret,
        });
    }

    async validate(payload:{userId:string}) {
        const user = await this.usersService.findOne(payload.userId);
        if(!user){
        throw new UnauthorizedException();
        }

        return user;
    }
    
}