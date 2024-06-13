import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

// data transfer object
// class = object {}
class Company {
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty()
  name: string;
}

export class CreateUserDto {
  @IsNotEmpty({
    message: 'Name is not allowed to be blank!',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: 'Email is invalid format!',
    },
  )
  @IsNotEmpty({
    message: 'Email  is not allowed to be blank!',
  })
  email: string;

  @IsNotEmpty({
    message: 'Password is not allowed to be blank!',
  })
  password: string;

  @IsNotEmpty({
    message: 'Age is not allowed to be blank!',
  })
  age: number;

  @IsNotEmpty({
    message: 'Gender is not allowed to be blank!',
  })
  gender: string;

  @IsNotEmpty({
    message: 'Address is not allowed to be blank!',
  })
  address: string;

  @IsNotEmpty({
    message: 'role is not allowed to be blank!',
  })
  @IsMongoId({ message: 'role is a mongo id' })
  role: mongoose.Schema.Types.ObjectId;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}

export class RegisterUserDto {
  @IsNotEmpty({
    message: 'Name is not allowed to be blank!',
  })
  name: string;

  @IsEmail(
    {},
    {
      message: 'Email is invalid format!',
    },
  )
  @IsNotEmpty({
    message: 'Email  is not allowed to be blank!',
  })
  email: string;

  @IsNotEmpty({
    message: 'Password is not allowed to be blank!',
  })
  password: string;

  @IsNotEmpty({
    message: 'Age is not allowed to be blank!',
  })
  age: number;

  @IsNotEmpty({
    message: 'Gender is not allowed to be blank!',
  })
  gender: string;

  @IsNotEmpty({
    message: 'Address not allowed to be blank!',
  })
  address: string;
}

export class UserLoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'xuanquyen', description: 'username' })
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '123456',
    description: 'password',
  })
  readonly password: string;
}
