import { Routes } from '@angular/router';
import { WishComponent } from './wish/wish.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GenieDetailsComponent } from './genie/genie-details/genie-details.component';
import { GenieComponent } from './genie/genie.component';

export const routes: Routes = [
    { path: '', component: WishComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'genies', component: GenieComponent },
    { path: 'genies/:id', component: GenieDetailsComponent },
    { path: '**', component: NotFoundComponent }
];
