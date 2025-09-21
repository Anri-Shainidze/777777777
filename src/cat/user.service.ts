import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User, UserDocument } from 'src/schema/cat.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(newUser: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(newUser);
    return createdUser.save();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    await this.userModel.findByIdAndDelete(id).exec();
    return { message: 'User deleted' };
  }
}
