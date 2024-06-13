import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateSubscriberDto {
  @IsNotEmpty({
    message: 'email should not be blank!',
  })
  @IsEmail({}, { message: 'email is incorrect to format!' })
  email: string;

  @IsNotEmpty({
    message: 'name should not be blank!',
  })
  name: string;

  @IsNotEmpty({
    message: 'isActive should not be blank!',
  })
  @IsArray({ message: 'skills have array format.' })
  // "each" tells class-validator to run the validation on each item of the array
  @IsString({ each: true, message: 'skill has string format.' })
  skills: string[];
}
