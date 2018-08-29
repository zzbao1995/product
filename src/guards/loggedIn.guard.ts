import { CanActivate } from '@angular/router';
import { UserService } from '../app/service/user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor (private userService: UserService) {
    }

    canActivate(): boolean {
        if (!this.userService.isLoggedIn()) {
            alert('No Permission!\nYou have to log in first.');
            return false;
        }
        return true;
    }
}
