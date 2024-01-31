import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {UserLdap} from "../models/user-ldap";
import {MatPaginator} from "@angular/material/paginator";
import {LDAP_USERS} from "../models/ldap-mock-data";

@Component({
  selector: 'app-ldap-list',
  standalone: true,
  imports: [],
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.scss']
})
export class LdapListComponent implements OnInit {
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource : MatTableDataSource<UserLdap > = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | null;

  constructor() {
    this.paginator = null;
  }
  ngOnInit() : void {
    this.dataSource.paginator = this.paginator;
    this.getUsers();
  }
  private getUsers() : void {
    this.dataSource.data = LDAP_USERS
  }
}
