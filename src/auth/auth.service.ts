import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcryptjs');
const moment = require('moment');

@Injectable()
export class AuthService {

    constructor( 
        @InjectRepository(User) private userRepository : Repository<User>,
        private jwtService : JwtService
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        try {
            let existUser = await this.findOne(email)
            if (existUser) {
              let checkPassword = bcrypt.compareSync(pass, existUser.password)
              if(checkPassword) {
                return existUser;
              }
            }
            return null;
        }
        catch {
            throw new UnauthorizedException('Login Failed')
        }
    }

    async createUser(newUser : UserDto) {
        try {
            let { name, email, password, phone } = newUser
            let existUser = await this.userRepository.findOne({ where : {email : email} })
            
            if(!existUser) {
                let salt = bcrypt.genSaltSync(10);
                password = bcrypt.hashSync(password, salt)

                const data = {
                    name,
                    email,
                    password,
                    phone,
                    created_at : moment().format(),
                    updated_at : moment().format()
                }         

                const user =  this.userRepository.create(data);
                return await this.userRepository.save(user);
            }
        }
        catch {
            throw new UnauthorizedException('Register Failed')
        }
    }

    async login(user : any) {
        let data = { name : user.name, email : user.email, phone : user.phone }
        return {
            status : 200,
            message : 'success',
            data : {
                accessToken : this.jwtService.sign(data),
                refreshToken : bcrypt.genSaltSync(5),
                result : data
            }
        }
    }

    async allUsers() {
        return await this.userRepository.find()
    }

    async findOne(email : string) {
        let existUser = await this.userRepository.findOne({ where : {email : email} })
        return existUser;
    }
}
