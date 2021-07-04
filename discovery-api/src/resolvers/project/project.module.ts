import { PrismaModule } from '../../prisma/prisma.module';
import { ProjectResolver } from './project.resolver';
import { HttpModule, Module } from '@nestjs/common';
import { EverestService } from '../../services/everest.service';
import { ProjectRepository } from './project.repository';
import { UniswapV2Service } from '../../services/uniswap-v2.service';
import { BrandfetchService } from '../../services/brandfetch.service';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [ProjectResolver, EverestService, UniswapV2Service, BrandfetchService, ProjectRepository],
})
export class ProjectModule {}
