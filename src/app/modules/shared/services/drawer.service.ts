import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface DrawerObject {
    drawerTitle: string;
    drawerSubtitle?: string;
    drawerData: any;
}

export interface DrawerState {
    isOpen: boolean;
    content?: TemplateRef<any>;
    drawerObject: DrawerObject;
}

@Injectable({
    providedIn: 'root'
})
export class DrawerService {
    defaultDrawerObject: DrawerObject = {
        drawerTitle: '',
        drawerSubtitle: '',
        drawerData: {}
    }
    private drawerState = new BehaviorSubject<DrawerState>({ isOpen: false, drawerObject: this.defaultDrawerObject });
    drawerClosed$ = new Subject<void>();
    drawerState$ = this.drawerState.asObservable();

    open(content: TemplateRef<any>, drawerObject: any) {
        this.drawerState.next({ isOpen: true, content, drawerObject: drawerObject });
    }

    close() {
        this.drawerState.next({ isOpen: false, drawerObject: this.defaultDrawerObject });
        this.drawerClosed$.next(); // Notify subscribers that the drawer is closed
    }
}
