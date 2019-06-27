import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {
  chatList = [];

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getChatList()
      .subscribe((res: any) => {
        this.chatList = res.data;
      });
  }

}
