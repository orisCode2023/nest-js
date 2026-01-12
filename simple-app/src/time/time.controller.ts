import { Controller , Get} from '@nestjs/common';

@Controller('time')
export class TimeController {
    @Get()
    getTime(): string {
        const now = new Date()
        return now.toLocaleDateString()
    }
}
