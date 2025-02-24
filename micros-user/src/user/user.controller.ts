import { Controller, Post, Body } from "@nestjs/common";
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Post('register')
    async register(@Body() body: {username: string; password: string}) {
        return this.userService.createUser(body.username, body.password);
    }
    
}