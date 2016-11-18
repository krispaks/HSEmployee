import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'contact', component: ContactComponent}
    ])]
})

export class ContactRoutingModule {}