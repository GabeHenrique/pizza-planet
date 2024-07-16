export interface CreateUserRequest {
  name: string,
  email: string,
  password: string
}


export class CreateUserService {

  async execute(userDto: CreateUserRequest): Promise<CreateUserRequest> {
    return userDto;
  }
}