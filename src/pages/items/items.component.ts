import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ItemService, Item } from '../../services/item.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-item-list',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule, AsyncPipe],
    templateUrl: './items.component.html'
})
export class ItemsComponent {
    public filter = '';
    public items$ = this.itemService.getItems();

    constructor(private itemService: ItemService) {}
}
