import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  host = environment.apiHost;

  constructor(private http: HttpClient) {
  }

  get(url, ...reset) {
    return this.http.get(this.host + url, ...reset);
  }

  post(url, ...reset) {
    return this.http.post(this.host + url, {
      ...reset,
    });
  }

  // 获取用户信息
  getUserInfo() {
    return this.get('/getUserInfo');
  }

  // 获取消息列表
  getChatList() {
    return this.get('/getChatList');
  }

  // 获取消息详情
  getChatDialog() {
    return this.get('/getChatDialog');
  }

  // 获取联系人列表
  getContactList() {
    return this.get('/getContactList');
  }

  // 获取收藏详情
  getFavoriteList() {
    return this.get('/getFavoriteList');
  }
}
