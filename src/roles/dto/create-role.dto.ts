import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({
    message: 'name should not be blank!',
  })
  name: string;

  @IsNotEmpty({
    message: 'description should not be blank!',
  })
  description: string;

  @IsNotEmpty({
    message: 'isActive should not be blank!',
  })
  @IsBoolean({ message: 'isActive has boolean value.' })
  isActive: boolean;

  @IsNotEmpty({
    message: 'permissions should not be blank!',
  })
  @IsMongoId({ each: true, message: 'each permission is mongo object id' })
  @IsArray({ message: 'permissions have array format.' })
  permissions: mongoose.Schema.Types.ObjectId[];
}
