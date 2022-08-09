let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"]
};

let is_shop_open = true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log("Shop is closed"))
        }
    });
}


async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} was selected as a flavour`);

        await time(0000);
        console.log("Start the production");
        
        await time(2000);
        console.log("Cut the fruit");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        await time(1000);
        console.log("Start the machine")

        await time(1000);
        console.log(`Ice cream placed on ${stocks.holder[0]}`)
        
        await time(3000);
        console.log(`${stocks.toppings[0]} was selected`)

        await time(2000);
        console.log("Served Ice cream")

    }
    catch(error){
        console.log("Customer Left", error)
    }
    finally{
        console.log("Day ended, shop is closed")
    }
}

kitchen();


// // Await example

// let toppings_choice = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//                 resolve(
//                 console.log("Which topping would you like")
//                 );
//             }, 3000);
//     });
// };

// async function kitchen(){
//     console.log(" A ")
//     console.log(" B ")
//     console.log(" C ")

//     await  toppings_choice()
    
//     console.log(" D ")
//     console.log(" E ")
// }

// kitchen();

// console.log("Doing the dishes")
// console.log("Cleaning the tables")
// console.log("Taking other orders")


// let order = ()=>{
//     return new Promise((resolve,reject)=>{
//         if(true){
//             resolve()
//         }
//         else{
//             reject()
//         }
//     })
// }

// .order()
// .then()
// .then()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc does not exist",error)
//     }
//     finally{
//         console.log("Runs code anyways")
//     }

// }

// order()
// .then(()=>{
//     console.log("Some random text")
// })








// // Promise callbacks

// let is_shop_open = true;

// let order = (time,work) => {

//     return new Promise( (resolve,reject) => {

//         if(is_shop_open){
//             setTimeout(() => {
//                 resolve( work() )
//             }, time);
//         }
//         else{
//             reject(console.log("Our shop is closed\n"))
//         }

//     } );

// };

// order(2000,() =>console.log(`${stocks.Fruits[0]} was selected\n`))


// .then(()=>{

//     return order(0000,()=>console.log("Production has started\n"))
// })


// .then(()=>{
//     return order(2000,()=>console.log("The fruit was chopped\n"))
// })


// .then(()=>{
//     return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected\n`))
// })

// .then(()=>{
//     return order(1000,()=>console.log("Start the machine\n"))
// })

// .then(()=>{
//     return order(2000,()=>console.log(`Ice cream placed on ${stocks.holder[0]}\n`))
// })

// .then(()=>{
//     return order(3000,()=>console.log(`${stocks.toppings[0]} was selected\n`))
// })

// .then(()=>{
//     return order(1000,()=>console.log("Ice cream was served\n"))
// })

// .catch( ()=>{
//     console.log("Customer left\n");
// })

// .finally(() => {
//     console.log("Day ended, shop is closed\n")
// })
// console.log(stocks.holder[0]);


// // Callback Hell

// let order = (Fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected\n`)
//         call_production()
//     }, 2000);
// };
// let production = () => {
//     setTimeout(() => {
//         console.log("Production has started\n");
//         setTimeout(() => {
//             console.log("The fruit has been chopped\n");
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added\n`);
//                 setTimeout(() => {
//                     console.log("The Machine was been started\n");
//                     setTimeout(() => {
//                         console.log(`Ice cream was placed on ${stocks.holder[0]}\n`);
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was added as topping\n`);
//                             setTimeout(() => {
//                                 console.log("Served Ice cream\n");
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0000);
// };

// order(0, production);

// // Callback function

// function one(call_two){
// console.log("Step One completed. Please call step two\n");
// call_two()
// }
// function two(){
// console.log("Step Two\n");
// }

// one(two);


// // Asynchronous call with timeout function

// console.log("first line printed\n");

// console.log("second line printed\n");

// setTimeout(() => {
//     console.log("third line printed\n");
// }, 2000);


// console.log("fourth line printed\n");

// console.log("fifth line printed\n");

