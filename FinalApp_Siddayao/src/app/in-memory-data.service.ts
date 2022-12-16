import { Injectable } from '@angular/core';
import {InMemoryDbService} from'angular-in-memory-web-api';
import{AccountMain} from"./Accounts/account";
import{OrderMain} from"./Orders/order";
@Injectable({
    providedIn:'root'
})
export class InMemoryDataService implements InMemoryDbService{
createDb(){
    const accounts=[{
        id: 1,
        fname:'Eren',
        lname:'Yeager',
        email:'ErenYeager@gmail.com',
        mobile:'09163127482',
        gender:'Male',
        marital:'Single',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001 ',
        imgPath: 'assets/account_image/rinrin.webp',
        add:{
            street:'Panadero',
            apt:'12',
            barangay:'Ambiong',
            city:'Baguio City',
            province:'Benguet',  
        } 
    },
    {
        id: 2,
        fname:'Light',
        lname:'Yagami',
        email:'LightYagami@gmail.com',
        mobile:'09163127482',
        gender:'Male',
        marital:'Single',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/Light.webp',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 3,
        fname:'Itachi',
        lname:'Uchiha',
        email:'ItachiUchiha@gmail.com',
        mobile:'09163127482',
        gender:'Male',
        marital:'Single',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/1234.webp',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 4,
        fname:'Historia',
        lname:'Reiss',
        email:'HistoriaReiss@gmail.com',
        mobile:'09163127482',
        gender:'Female',
        marital:'Married',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/Historia.webp',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 5,
        fname:'Mikasa',
        lname:'Ackerman',
        email:'MikasaAckerman@gmail.com',
        mobile:'09163127482',
        gender:'Female',
        marital:'Married',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/Mikasa.jpg',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 6,
        fname:'Annie',
        lname:'Leonhart',
        email:'AnniLeonhart@gmail.com',
        mobile:'09163127482',
        gender:'Female',
        marital:'single',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/Annie.webp',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 7,
        fname:'Armin',
        lname:'Arlert',
        email:'ArminArlert@gmail.com',
        mobile:'09163127482',
        gender:'Male',
        marital:'Single',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/Armin.webp',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 8,
        fname:'Erwin',
        lname:'Smith',
        email:'ErwinSmith@gmail.com',
        mobile:'09163127482',
        gender:'male',
        marital:'Single',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/Erwin.webp',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 9,
        fname:'Zeke',
        lname:'Yeager',
        email:'ZekeYeager@gmail.com',
        mobile:'09163127482',
        gender:'male',
        marital:'Married',
        dateofbirth:'06/12/2022',
        SSS:'1800 10 225 5777',
        tin:'000-123-456-001',
        imgPath: 'assets/account_image/Zeke.webp',
        add:{
            street:'Ambiong',
            apt:'12',
            barangay:'Panadero',
            city:'Baguio City',
            province:'Benguet', 
        } 
    },
    {
        id: 10,
        fname:'Levi',
        lname:'Ackerman',
        email:'LeviAckerman@gmail.com',
        mobile:'094631878316',
        gender:'male',
        marital:'Single',
        dateofbirth:'06/12/2022',
        SSS:'0028-261420-5',
        tin:'000-003-139-000',
        imgPath: 'assets/account_image/lebi.webp',
        add:{
            street:'Happy Hollow',
            apt:'21',
            barangay:'Gibraltar',
            city:'Baguio City',
            province:'Benguet', 
    

}

},];

const orders=[{
    id: 1,
    item:{
        name:'Art Series Guayasamin ',
        description:'is known for having the most expensive chocolates in the world, with some of their single bars costing up to $450! Why? The cacao is grown in Manabi, Ecuador, which is to cacao what Burgundy is to wine. Beans come from the rarest variety, pure 100% Nacional, which is over 5,300 years old. Toak also promotes sustainability and conservation. Barefoot is proud to offer these one-of-a-kind chocolates.', 
        unit_price:50,
        qty:2,
    },
    cname:'Eren Yeager',
    imgPath: 'assets/account_image/b8.jpg',
    ccontact:{
        email:'ErenYeager@gmail.com',
        phone:'09163127482',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},
{
    id: 2,
    item:{
        name:'La Madeline au Truffe ',
        description:'Knipschildts La Madeline au Truffe was recognized by Forbes Magazine as the most expensive chocolate in the world. La Madeline au Truffle starts with a decadent 70% Valrhona dark chocolate, heavy cream, sugar, truffle oil and vanilla as the base for the rich decadent ganache.',
        unit_price:50,
        qty:2,
    },
    cname:'Light',
    imgPath: 'assets/account_image/b9.png',
    ccontact:{
        email:'LightYagami@gmail.com',
        phone:'09661572763',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},
{
    id: 3,
    item:{
        name:'Gold chocolate box with antique Swiss gold coin',
        description:'Swiss Vreneli 10 Francs is a gold coin from the years 1910 to 1922 2 Swiss chocolate adorned with edible gold and a Swiss antique gold coin in a gift box. ',
        unit_price:50,
        qty:2,
    },
    cname:'Itachi',
    imgPath: 'assets/account_image/b10.jpg',
    ccontact:{
        email:'ItachiUchiha@gmail.com',
        phone:'09163127482',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},    {
    id: 4,
    item:{
        name:'Le Livre',
        description:'Thirty-five chocolates (a mix of ganaches and pralines) are arranged in a gold-embossed leather box that resembles a handsome book, more like an encyclopedia.',
        unit_price:50,
        qty:2,
    },
    cname:'Historia',
    imgPath: 'assets/account_image/b11.jpg',
    ccontact:{
        email:'HistoriaReiss@gmail.com',
        phone:'09163127482',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},
{
    id: 5,
    item:{
        name:'Ganache Cien Blue Box',
        description:'Beautifully showcasing our iconic year-round designs directly on our Signature Ganache, this elegant box opens to reveal 100 signature Mariebelle New York Chocolate Ganaches, each made with the finest single-origin chocolate and eclectic ingredients. Wrapped in an elegant Mariebelle blue box, its an edible work of art – beautiful as it is delicious.',
        unit_price:50,
        qty:2,
    },
    cname:'Mikasa',
    imgPath: 'assets/account_image/b12.jpg',
    ccontact:{
        email:'MikasaAckerman@gmail.com',
        phone:'09682641542',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},    {
    id: 6,
    item:{
        name:'Vosges Haut Chocolat',
        description:'At Vosges Haut-Chocolat, our chocolate bars are more than a piece of candy. We have carefully formulated a number of unique flavor blends using milk chocolate, dark chocolate, and white chocolate to create premium chocolate bars that are unlike any other.',
        unit_price:50,
        qty:2,
    },
    cname:'Annie',
    imgPath: 'assets/account_image/b13.jpg',
    ccontact:{
        email:'AnnieLeonhart@gmail.com',
        phone:'09163127482',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},    {
    id: 7,
    item:{
        name:'Amedei Porcelana by Amedei',
        description:'The Porcelana - 70% Dark Chocolate Bar by Amedei Tuscany is a 70% dark chocolate bar named Porcelana, or porcelain, as it is made exclusively with the white, delicate, and precious, Criollo cacao beans, which are produced in limited quantities every year.',
        unit_price:50,
        qty:2,
    },
    cname:'Armin',
    imgPath: 'assets/account_image/b14.webp',
    ccontact:{
        email:'ArminArlert@gmail.com',
        phone:'09682641542',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},    {
    id: 8,
    item:{
        name:'Grand Cru by Pierre Marcolini',
        description:'Grand Cru beans are characterised by their exclusivity, the specific region, their intensity on the palate, and the depth of their aromas. Consequently, the companys aim is to capture the uniqueness of each bean so that its unrivalled essence can be appreciated in each bar, representing the art of creating chocolate.',
        unit_price:50,
        qty:2,
    },
    cname:'Erwin',
    imgPath: 'assets/account_image/b15.jpg',
    ccontact:{
        email:'ErwinSmith@gmail.com',
        phone:'09163127482',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},
{
    id: 9,
    item:{
        name:'Richart',
        description:'RICHART produces authentic French gourmet chocolates using only the finest ingredients from around the world. Chocolate is in the DNA of the RICHART family, with a wide variety of mouth-watering delicacies – including signature chocolate squares, macarons and French fruit spreads.',
        unit_price:50,
        qty:2,
    },
    cname:'Yeager',
    imgPath: 'assets/account_image/b17.jpg',
    ccontact:{
        email:'ZekeYeager@gmail.com',
        phone:'09163127482',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},
{
    id: 10,
    item:{
        name:'The Aficionados Collection by The House of Grauer',
        description:'The company offers 14 flavors of uniquely tasting chocolates, which can be purchased at $210, a steep price indeed for a box of chocolates.',
        unit_price:50,
        qty:2,
    },
    cname:'Levi',
    imgPath: 'assets/account_image/b16.webp',
    ccontact:{
        email:'LeviAckerman@gmail.com',
        phone:'09163127482',
    },
    shipadd: {
        street:'Ambiong',
        barangay:'Panadero',
        city:'Baguio City',
        province:'Benguet',
    }
},];
    return{accounts,orders}
  }
  
  generateId(accounts:AccountMain[]):number{
    return accounts.length >0? Math.max(...accounts.map(account=>account.id)) + 1 :101;
  }
  generateId1(orders:OrderMain[]):number{
    return orders.length >0? Math.max(...orders.map(order=>order.id)) + 1 :101;
  }
}