import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import * as bcrypt from "bcryptjs";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}
  async findByUsername(username: string) {
    return this.userRepo.findOne({ where: { username }});
  }
  async createUser(username: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdDate = await new Date();
    const user = this.userRepo.create({username, password: hashedPassword, created_date: createdDate});
    return this.userRepo.save(user);
  }
}