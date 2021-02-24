/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:20 GMT-0400 (Bolivia Time)
 * Time: 2:42:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:20 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:20
 *
 * Caution: es-sections will be replaced by script execution
 */

import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient,HttpErrorResponse} from "@angular/common/http";
import '../../helpers/utils';
import {BehaviorSubject} from "rxjs";

//<es-section>
import {ContactsUsers} from "../models/contactsUsers";
//</es-section>

@Injectable({
  providedIn: 'root'
})
export class ContactUserService {

  //<es-section>
  basePath: string = `${environment.backend.server.webpath}/api-pilatsrl/contacts-users`;
  dataChange: BehaviorSubject<ContactsUsers[]> = new BehaviorSubject<ContactsUsers[]>([]);
  contactUserData: ContactsUsers = new ContactsUsers();
  //</es-section>

  constructor(private http: HttpClient) { }

  get data(): ContactsUsers[] {
    return this.dataChange.value;
  }

  getDataContactsUsers(): void {
    this.getAllContactsUsers().subscribe(async (res) => {
      let response = res as {status: string, message:string, data:ContactsUsers[]};
      this.dataChange.next(response.data);
    },(error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
    });
  }

  //<es-section>
  
  getAllContactsUsers(select = [], where = {}, order = [], limit:number = null, offset:number = null) {
    let attributes = '';
    if(select.length) {
        attributes += 'select=' + select.toString() + '&';
    }
    if(Object.keys(where).length) {
        attributes += 'where=' + JSON.stringify(where) + '&';
    }
    if(order.length) {
        attributes += 'order=' + JSON.stringify(order) + '&';
    }
    if(limit) {
        attributes += 'limit=' + limit + '&';
    }
    if(offset) {
        attributes += 'offset=' + offset + '&';
    }
    return this.http.get(this.basePath + '?' + attributes);
  }
  createContactUser(contactUser:ContactsUsers) {
    return this.http.post(this.basePath, contactUser);
  }
  getContactUser(id:any) {
    return this.http.get(this.basePath + '/' + id);
  }
  updateContactUser(id:any, contactUser:ContactsUsers) {
    return this.http.put(this.basePath + '/' + id, contactUser);
  }
  deleteContactUser(id:any) {
    return this.http.delete(this.basePath + '/' + id);
  }

  
  
  findOneById(id:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneById/' + id + '?' + attributes);
  }
  
  findOneByDeleted(deleted:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDeleted/' + deleted + '?' + attributes);
  }
  
  findOneByContactId(contactId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByContactId/' + contactId + '?' + attributes);
  }
  
  findOneByUserId(userId:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByUserId/' + userId + '?' + attributes);
  }
  
  findOneByDateModified(dateModified:any, select = []) {
      let attributes = '';
      if(select.length) {
          attributes += 'select=' + select.toString();
      }
      return this.http.get(this.basePath + '/findOneByDateModified/' + dateModified + '?' + attributes);
  }
  
  
  updateContactUserById(id:any, contactUser:ContactsUsers) {
      return this.http.post(this.basePath + '/updateContactUserById?id=' + id, contactUser);
  }
  
  updateContactUserByDeleted(deleted:any, contactUser:ContactsUsers) {
      return this.http.post(this.basePath + '/updateContactUserByDeleted?deleted=' + deleted, contactUser);
  }
  
  updateContactUserByContactId(contactId:any, contactUser:ContactsUsers) {
      return this.http.post(this.basePath + '/updateContactUserByContactId?contactId=' + contactId, contactUser);
  }
  
  updateContactUserByUserId(userId:any, contactUser:ContactsUsers) {
      return this.http.post(this.basePath + '/updateContactUserByUserId?userId=' + userId, contactUser);
  }
  
  updateContactUserByDateModified(dateModified:any, contactUser:ContactsUsers) {
      return this.http.post(this.basePath + '/updateContactUserByDateModified?dateModified=' + dateModified, contactUser);
  }
  
  
  
  //</es-section>
}
