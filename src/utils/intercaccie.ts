export interface ServerData{
    _embedded: Emplyees;
    _links: Links;
    page: Page;
}

export interface Emplyees  {
    id: number;
    firstname: string;
    lastname:  string;
    birthDate: string;
    hireDate:  string;
    gender:    string;
}

export interface Links {
    first:  Link;
    last:   Link;
    self:   Link;
    next:   Link;
    prev:   Link;
}

export interface Link {
    href: string;
}

export interface Page {
    size:  number;
    totalEmployers:   number;
    totalpage:   number;
    number:   number;
}