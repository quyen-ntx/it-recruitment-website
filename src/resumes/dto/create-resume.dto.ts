import { IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

// Default
export class CreateResumeDto {
  @IsNotEmpty({
    message: 'Email should not be blank!',
  })
  email: string;

  @IsNotEmpty({
    message: 'userId should not be blank!',
  })
  userId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({
    message: 'Url should not be blank!',
  })
  url: string;

  @IsNotEmpty({
    message: 'Status should not be blank!',
  })
  status: string;

  @IsNotEmpty({
    message: 'companyId should not be blank!',
  })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({
    message: 'jobId should not be blank!',
  })
  jobId: mongoose.Schema.Types.ObjectId;
}

// Upload CV
export class CreateUserCvDto {
  @IsNotEmpty({
    message: 'Url should not be blank!',
  })
  url: string;

  @IsNotEmpty({
    message: 'companyId should not be blank!',
  })
  @IsMongoId({ message: 'companyId is a mongo id' })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({
    message: 'jobId should not be blank!',
  })
  @IsMongoId({ message: 'jobId is a mongo id' })
  jobId: mongoose.Schema.Types.ObjectId;
}
