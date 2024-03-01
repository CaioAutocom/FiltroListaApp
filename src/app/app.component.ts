import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IFilterOptions } from './interfaces/user/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(()=>{
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    },1)
  }
  title = 'FiltroListaApp';
  userSelected: IUser = {} as IUser;
  showUserDetails: boolean = false;
  usersList: IUser[] = [];
  usersListFiltered: IUser[] = [];

  onUserSelected(user: IUser){
    this.showUserDetails = true;
    this.userSelected = user;
  }
  
  onFilter(filterOptions : IFilterOptions){
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList)
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList = [];
  }
}
