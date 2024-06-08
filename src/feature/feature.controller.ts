import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUserDto } from 'src/auth/current-user.dto';
import { CurrentUser } from 'src/auth/current-user.decorator';


@Controller('feature')
export class FeatureController {
  @Get('public')
  getPublicFeature() {
    return 'This is a public feature';
  }

  @Get('private')
  @UseGuards(JwtAuthGuard)
  getPrivateFeature(@CurrentUser() user: CurrentUserDto) {
    return `This is a private feature for user ${user.username}`;
  }
}
