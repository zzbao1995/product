import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from '../app/userService.model';

@Injectable()
export class NotLoggedInGuard implements CanActivate {
    constructor(private userService: UserService) {

    }

    canActivate(): boolean {
        if (this.userService.isLoggedIn()) {
            alert('Can\'t sign up.\nYou already log in.');
            return false;
        }
        return true;
    }
}
