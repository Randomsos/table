import { Links, Page } from "src/utils/intercaccie";

export interface Employee {
  id: number;
  birthDate: string;
  firstName: string;
  gedner: string;
  hireDate: string;
  lastName: string;
}

export interface Employees {
  employees: Employee;
}

export interface ServerData {
  _embedded: Employees;
  _links: EmployLinks;
  page: Page;
}

export interface Link{
  href:string;
}

export interface EmployLinks {
  self: Link;
  prev: Link;
  next: Link;
  last: Link;
  first: Link;
}

export interface page {
  size:number;
  totalElements:number;
  totalPages:number;
  numberPage:number;

}






