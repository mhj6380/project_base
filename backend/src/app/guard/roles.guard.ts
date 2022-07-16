import {
  Injectable,
  CanActivate,
  ExecutionContext,
  BadRequestException,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // if (!request.headers.pkgname || !request.headers.uid)
    if (!request.headers.uid)
      throw new BadRequestException("헤더에 uid가 없습니다.");

    return true;
  }
}
