import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({
    message: 'Email should not be blank!',
  })
  name: string;

  @IsNotEmpty({
    message: 'Password should not be blank!',
  })
  address: string;

  @IsNotEmpty({
    message: 'Description should not be blank!',
  })
  description: string;

  @IsNotEmpty({
    message: 'Logo should not be blank!',
  })
  logo: string;
}
