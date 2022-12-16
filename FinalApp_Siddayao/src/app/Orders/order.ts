export interface OrderMain{
    id: number;
    item:{
        name:string | null;
        description:string | null;
        unit_price:number | null;
        qty:number | null;
    }
    cname:string;
    imgPath: string;
    ccontact:{
        email:string | null;
        phone:string | null;
    }
    shipadd: {
        street:string | null;
        barangay:string | null;
        city:string | null;
        province:string | null; 
    }
}



