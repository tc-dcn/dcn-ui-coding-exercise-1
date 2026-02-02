import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Item {
    id: number;
    name: string;
    category: string;
    price: number;
    description: string;
    inStock: boolean;
}

@Injectable({ providedIn: 'root' })
export class ItemService {
    private readonly url = 'assets/items.json';

    constructor(private http: HttpClient) {}

    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(this.url);
    }

    getItemById(id: number): Observable<Item | undefined> {
        return this.getItems().pipe(map(items => items.find(item => item.id === id)));
    }
}
