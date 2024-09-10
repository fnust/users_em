import { Controller, Put } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Put('reset-problems')
  async resetProblems() {
    const count = await this.usersService.resetProblems();
    return {
      message: `У ${count} users были проблемы, теперь для них установлено значение true`,
    };
  }
}
