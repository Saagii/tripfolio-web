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

    open(content: TemplateRef<any>, drawerObject: DrawerObject) {
        console.log('Opening drawer with:', drawerObject);
        console.log('Previous drawer state:', this.drawerState.value);
        const newState: DrawerState = {
            isOpen: true,
            content,
            drawerObject: { ...drawerObject }
        };
        console.log('New drawer state:', newState);
        this.drawerState.next(newState);
        
        console.log('Current drawer state:', this.drawerState.value);
    }

    close() {
        console.log('Closing drawer');
        const newState: DrawerState = {
            isOpen: false,
            drawerObject: this.defaultDrawerObject
        };
        this.drawerState.next(newState);
        this.drawerClosed$.next();
    }
}
