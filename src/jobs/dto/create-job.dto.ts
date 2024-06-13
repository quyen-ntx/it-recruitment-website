import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
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

  @IsNotEmpty()
  logo: string;
}

export class CreateJobDto {
  @IsNotEmpty({
    message: 'Name is not allowed to be blank!',
  })
  name: string;

  @IsNotEmpty({
    message: 'Skills is not allowed to be blank!',
  })
  @IsArray({
    message: 'Skills have Array format.',
  })
  // "each" tells class-validator to run the validation on each item of the array
  @IsString({ each: true, message: 'Skill has String format.' })
  skills: string[];

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;

  @IsNotEmpty({
    message: 'Location is not allowed to be blank!',
  })
  location: string;

  @IsNotEmpty({
    message: 'Salary is not allowed to be blank!',
  })
  salary: number;

  @IsNotEmpty({
    message: 'Quantity is not allowed to be blank!',
  })
  quantity: number;

  @IsNotEmpty({
    message: 'Level is not allowed to be blank!',
  })
  level: string;

  @IsNotEmpty({
    message: 'Description is not allowed to be blank!',
  })
  description: string;

  @IsNotEmpty({
    message: 'startDate is not allowed to be blank!',
  })
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'startDate has Date format.' })
  startDate: Date;

  @IsNotEmpty({
    message: 'endDate is not allowed to be blank!',
  })
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'endDate has Date format.' })
  endDate: Date;

  @IsNotEmpty({
    message: 'isActive is not allowed to be blank!',
  })
  @IsBoolean({ message: 'isActive has Boolean format.' })
  isActive: boolean;
}
