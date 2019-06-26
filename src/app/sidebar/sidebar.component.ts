import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';

interface UserInfo {
  account: string;
  name: string;
  avatar: string;
  address: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userInfo: UserInfo;
  showInfo = false;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.getUserInfo()
      .subscribe((res: any) => {
        console.log(res);
        this.userInfo = res.data;
      });
  }

  toggleShowInfo() {
    this.showInfo = !this.showInfo;
  }
}
