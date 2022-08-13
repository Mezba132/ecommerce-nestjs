import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.gaurd';
import { LocalAuthGuard } from './local-auth.gaurd';
import { UserDto } from './user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService){}

    @Post('register')
    async createUser(@Body() newUser : UserDto) {
        return await this.authService.createUser(newUser)
    }

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
        return await this.authService.login(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Get('users')
    async getAllUsers(@Request() req) {
        return await this.authService.allUsers()
    }
}
