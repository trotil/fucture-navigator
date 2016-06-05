import { Component, OnInit, Input } from '@angular/core';
import {IFuctureNavigationItem} from "../fucture-models/interfaces/IFuctureNavigationItem";

@Component({
    moduleId: module.id,
    selector: 'fucture-nav-button',
    templateUrl: 'fucture-nav-button.component.html',
    styleUrls: ['fucture-nav-button.component.css']
})
export class FuctureNavButtonComponent implements OnInit {
    @Input() navigationItem: IFuctureNavigationItem;
    
    constructor() { }

    ngOnInit() {
        console.log(this.navigationItem);
     }

}