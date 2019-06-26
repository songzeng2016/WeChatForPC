import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsRoutingModule } from './chats-routing.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';
import { ChatsComponent } from './chats/chats.component';

@NgModule({
  declarations: [ChatListComponent, ChatDialogComponent, ChatsComponent],
  imports: [
    CommonModule,
    ChatsRoutingModule
  ]
})
export class ChatsModule { }
