import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ItemService, Item } from '../../services/item.service';
import { Observable, switchMap } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-item-detail',
    standalone: true,
    imports: [CommonModule, RouterLink, AsyncPipe],
    templateUrl: './item-detail.component.html'
})
export class ItemDetailComponent {
    item$!: Observable<Item | undefined>;

    constructor(private route: ActivatedRoute, private itemService: ItemService) {
        this.item$ = this.route.paramMap.pipe(
            switchMap(params => this.itemService.getItemById(Number(params.get('id'))))
        );
    }
}
