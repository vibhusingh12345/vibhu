var products=[
{id:1,productName:'Tv',price:200},
{id:2,productName:'Moniter',price:200},
{id:3,productName:'I pad',price:200},
{id:4,productName:'phone',price:200}
];
console.log(products.some(
    (p)=>{
      return p.price>=1000;
    }
));