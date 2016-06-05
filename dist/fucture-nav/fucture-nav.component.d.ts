import { OnInit } from '@angular/core';
import { FuctureNavigation } from "../fucture-models/FuctureNavigation";
export declare class FuctureNavComponent implements OnInit {
    navigationItems: FuctureNavigation;
    socialItems: FuctureNavigation;
    logoUrl: string;
    altLogoText: string;
    constructor();
    ngOnInit(): void;
}
