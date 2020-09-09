var slaveMarket = [
    {
        name: "Vasiliy",
        height: 168,
        age: 31,
        productivity: 10.3,
        isForSale: true,
        price: 1000
    },
    {
        name: "Ivan",
        height: 181,
        age: 25,
        productivity: 25.9,
        isForSale: false,
        price: 2000
    },
    {
        name: "Petr",
        height: 176,
        age: 44,
        productivity: 5.6,
        isForSale: true,
        price: 800
    }
];

var avgProd = 0;
for (let i = 0; i < slaveMarket.length; i++)
{
    avgProd += slaveMarket[i].productivity;
}

avgProd /= slaveMarket.length;

console.log("Average production rate for slaves on market is " + avgProd);
