export interface AccountMain{
    id: number;
    fname:string;
    lname:string;
    email:string;
    mobile:string;
    gender:string;
    marital:string;
    dateofbirth:string;
    SSS:string;
    tin:string;
    imgPath: string;
    add:{
        street:string | null;
        apt:string | null;
        barangay:string | null;
        city:string | null;
        province:string | null; 
    }
}



