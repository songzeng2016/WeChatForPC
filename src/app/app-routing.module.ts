import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'chats',
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule),
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
  },
  {
    path: 'favorites',
    loadChildren: () => import('./favorites/favorites.module').then(m => m.FavoritesModule),
  },
  {
    path: '',
    redirectTo: 'chats',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
