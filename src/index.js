var http = require('http');
const BotService = require('./lib/BotService.js');
const Helper = require('./lib/Helper');
const helper = new Helper();
console.log("---Start---")
const server = http.createServer(async(req, res) => {
    let body = null;

    if (req.method === 'POST') {
        body = await getPostData(req);
    }

    await handler(req, res).then(function(output) {
        //console.log(output)
        body = output
        return body;
        console.log("---End success---")
    }).catch(function(error){
        body = error;
        return body
        console.log("---End error---")
    })

    res.writeHead(res.statusCode, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(body));
    res.end();
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});

// function getRequestJson(body) {
//    // console.log(body);
//     return 'asd'
//     if (body == null || body == undefined) {
//         return {};
//     }
//
//     body = body.trim();
//     if (body == "") {
//         return {};
//     }
//     const bodyLength = body.length;
//     if (bodyLength > 2) {
//         if (body.substring(bodyLength - 2, bodyLength) == ",}") {
//             body = body.substring(0, bodyLength - 2) + "}";
//         } else if (body.substring(bodyLength - 3, bodyLength) == ", }") {
//             body = body.substring(0, bodyLength - 3) + "}";
//         }
//     }
//
//     let reqJson = null;
//     try {
//         reqJson = JSON.parse(body);
//     } catch (e) {
//         console.error("Invalid parse Request Body to json:  ", body);
//         console.error("Error connected request body parsing: ", e);
//     }
//     return reqJson;
// }
//
function getPostData(req) {
    return new Promise((resolve, reject) => {
       try {
           let body = '';
           req.on('data', chunk => {
               body += chunk.toString(); // convert Buffer to string
           });

           req.on('end', () => {
               //resolve(parse(body));
               resolve(body);
           });
       }
       catch (e) {
           reject(e);
       }
    });
}


const handler = async function(req, res) {
    try {
        let result = null, getCoins, checkTransfers;
        console.log('arrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')

        switch (req.url) {
            case '/validate':
                const botService = new BotService();
                //const l1 = botService.login(client);
                const clientDriver = await botService.login();
               // console.log(clientDriver)
                // if(!clientDriver){ // || !buyertDriver
                //     //throw { "message": "Some user can't login" };
                //     result = "Some user can't login";
                //     //return helper.response(res, "Some user can't login", null, 400);
                //     //return response;
                // }
                console.log('barev')
                // console.log('our driver')
                //console.log(clientDriver)
                //await clientDriver.close();
                console.log('barev2')
               // await clientDriver.quit();
                //await buyertDriver.close();
               // console.log('both logins')
               // result = { coins: getCoins, check: checkTransfers }
                break;
            default:
                //return helper.response(res, "Welcome...", null);
                result = "Welcome...";
               // return response(result);
        }

        // console.log('barev bareeeeeeeeeeeev')
        // console.log('my account')
        // console.log(clientDriver)
        // const l2 = botService.login(buyer);
        //const drivers = await Promise.all([l1]);
        // console.log(drivers)
        // const clientDriver = drivers[0];
        // console.log(clientDriver)
        // console.log('--client driver--')
        // const buyertDriver = drivers[1];

        // const response = await contextDone({
        //     "status": "ok",
        //     "result": result
        // });
       // return res;
        //console.log(response)

        const response = await contextDone({
            "status": "ok",
            "result": result
        });
        return response;
        //return helper.response(res, "Success Data", { coins: getCoins, check: checkTransfers });
    }catch (err) {
        const response = await contextDone({
            "status": "nok",
            "error": err
        });
        return response;
    }

    async function contextDone(result) {
        return result;
    }

}