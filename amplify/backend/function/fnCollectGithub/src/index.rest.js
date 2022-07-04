const https = require('https');


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const response = await new Promise((resolve, reject) => {

    const options = {
      hostname: "github.concur.com",
      path: "/api/v3/orgs/cie/repos",
      port: 443,
      method: 'GET',
      headers: {
        'Authorization': 'token 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',
        'Accept': 'application/vnd.github.v3+json'
      }
    };  


    const req = https.get(options, (res) => {
      res.on('data', (data) => {
          resolve({
              statusCode: 200,
              body: JSON.parse(data)
          });
        });
      });
      
      /* req.on('error', (e) => {
        reject({
            statusCode: 500,
            body: 'Something went wrong!', e
        });
      }); */
  });

  console.log("AAAAA", response)
  return response;
};
