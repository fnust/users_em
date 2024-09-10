import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/postgres/entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async resetProblems(): Promise<number> {
    const qb = this.usersRepository.createQueryBuilder('u');
    const result = await qb
      .update()
      .set({ hasProblems: false })
      .where('hasProblems = :currentValue', { currentValue: true })
      .execute();

    return result.affected || 0;
  }
}
