import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import { User } from '../user/user.entity';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService, private userService: UserService) {}

    async validateUser(username: string, password: string) {
        const user = await this.userService.findByUsername(username);
        if(user && (await bcrypt.compare(password, user.password))) {
            return user;
        } else {
            throw new BadRequestException('invalid credentials');
        }
    }

    async login(user: User) {
        const payload = {username:user.username, sub: user.user_id};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}