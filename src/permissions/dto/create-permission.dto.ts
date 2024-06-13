import { IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreatePermissionDto {
  @IsNotEmpty({
    message: 'name should not be blank!',
  })
  name: string;

  @IsNotEmpty({
    message: 'apiPath should not be blank!',
  })
  apiPath: string;

  @IsNotEmpty({
    message: 'method should not be blank!',
  })
  method: string;

  @IsNotEmpty({
    message: 'module should not be blank!',
  })
  module: string;
}
