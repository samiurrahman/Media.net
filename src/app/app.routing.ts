import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'user/:username', loadChildren: './user/user.module#UserModule'},
    { path: 'policy', component: PolicyComponent },
    { path: 'qrcode/:username', component: QrcodeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/notfound' }
];

export const routing = RouterModule.forRoot(appRoutes);

