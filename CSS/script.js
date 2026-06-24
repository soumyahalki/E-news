     function message() {
    document.writeln("<h1>Welcome to JS</h1>")
    console.log("Thank You - script.js:3")
        }


document.write("Hello");
document.write("<br>")
document.writeln("HELLO");
document.write("<br>");
document.write(3 + 3);
document.write("<br>")
document.writeln("<h6>Thank you </h6>");
document.write("<br>");
document.writeln("3" + "3");
document.write(3 + 3);


//promises.js//

const p = new Promise((resolve, reject) => {
    let app ="BMS";
    if(app === "BMS"){
        resolve();

    } else {
        reject(new Error("BMS is not found"));
    }
});
p.then(() => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Open Book my show - script.js:33");
            resolve();
        }, 2000)
    });
})
.then()







p.then(() => {
    return new Promise((resolve) => {
        setTimeout(()) => {
            console.log("Select seats - script.js:49");//""//
                resolve();
            }, 8000)
        });
    })


    p.then(() => {

    return new Promise((resolve) => {
        setTimeout(()) => {
            console.log("Select seats - script.js:60");//""//
                resolve();
            }, 5000)
        });
    })



p.then(() => {
    return new Promise((resolve) => {
        setTimeout(()) => {
            console.log("Select seats - script.js:71");//""//
                resolve();
            }, 8000)
        });
    })

    p.then(() => {
    return new Promise((resolve) => {
        setTimeout(()) => {
            console.log("Select seats - script.js:80");//""//
                resolve();
            }, 1000)
        });
    })


.catch((e) => {
    console.log("Error: , e .message);// - script.js:88"""//
        })


        .finally(() => {
            console.log("Close Phone );
             })'"  //
        })





        //async&await.js//
function wait() {
    return new Promise((resolve) => setTimeout(resolve.ms));
}
        async function Bookticket() {
            wait(8000);
           
            console.assert;ongamepadconnected("1. Open BookMyShow");
            wait(3000);
            console.assert;ongamepadconnected("2. Search Movie");
            wait(5000);
            console.assert;ongamepadconnected("3. Select Seats");
            wait(1000);
            console.assert;ongamepadconnected("4. Make payment");
            wait(2000);
            console.assert;ongamepadconnected("5. Ticket Booked");
        }
  }