import { Component, OnInit, Input } from '@angular/core';
import { FuctureNavButtonComponent } from '../fucture-nav-button/fucture-nav-button.component';
import {IFuctureNavigation} from "../fucture-models/interfaces/IFuctureNavigation";
import {FuctureNavigation} from "../fucture-models/FuctureNavigation";

@Component({
  moduleId: module.id,
  selector: 'fucture-nav',
  templateUrl: 'fucture-nav.component.html',
  styleUrls: ['fucture-nav.component.css'],
  directives: [FuctureNavButtonComponent]
})
export class FuctureNavComponent implements OnInit {
  @Input() navigationItems: FuctureNavigation;
  @Input() socialItems: FuctureNavigation;
  @Input() logoUrl: string;
  @Input() altLogoText: string;
  
  constructor() {
    this.altLogoText = "Logo";
  }

  ngOnInit() {

  }

}
