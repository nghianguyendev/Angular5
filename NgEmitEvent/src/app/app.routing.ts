import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ParentComponent } from './parent/parent.component';

export const AppRoutes: Routes = [
    { path: '', component: ParentComponent },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);