import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor() {}


    setItem(key: string, data: string): void {
        localStorage.setItem(key, data);
    }

    getItem(key: string): string {
        return localStorage.getItem(key);
    }

    removeItem(key: string): void {
        localStorage.removeItem(key);
    }
}