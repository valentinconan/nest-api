import {Controller, Get, HttpCode, HttpException, HttpStatus} from "@nestjs/common";
import {HealthService} from "../service/health.service";

@Controller("/health")
export class HealthController{

    constructor(private readonly healthService: HealthService) {
    }

    @Get()
    health(): string{
        return "ok"
    }

    @Get("/liveness")
    @HttpCode(200)
    liveness(){
        if(!this.healthService.live()){
            throw new HttpException('Not alive', HttpStatus.BAD_REQUEST);
        }
    }

    @Get("/readiness")
    @HttpCode(200)
    readiness(){
        if(!this.healthService.ready()){
            throw new HttpException('Not ready', HttpStatus.BAD_REQUEST);
        }
    }
    @Get("/probeness")
    @HttpCode(200)
    probeness(){
        if(!this.healthService.probe()){
            throw new HttpException('Not probe', HttpStatus.BAD_REQUEST);
        }
    }
}