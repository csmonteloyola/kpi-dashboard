/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const { gql, GraphQLClient }  = require('graphql-request')
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

/**
 * @type {import('aws-lambda').APIGatewayProxyHandler}
 */

 const params = {
    TableName : 'tblGithubPR',
    /* Item properties will depend on your application concerns */
    Item: {
            id: "MDExOlB1bGxSZXF1ZXN0MTA1MTQ4Mg==",
            url: "https://github.concur.com/cie/CloudInfraServices/pull/887",
            title: "Cam 1693 : login concur_sdbms for Expense and Reporting Servers",
            state: "MERGED",
            repoName: "CloudInfraServices"
        }
}

async function createItem(){
    try {
        await docClient.put(params).promise();
    } catch (err) {
        return err;
    }
}

exports.handler = async (event) => {
  
    const endpoint = 'https://github.concur.com/api/graphql'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: 'Bearer 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',
      },
    })
  
    const query = gql`
        {
            search(query: "repo:cie/CloudInfraServices is:pr created:>2022-06-01", type: ISSUE, last: 100) {
                edges {
                node {
                    ... on PullRequest {
                        id
                        url
                        title
                        createdAt
                        state
                        repository {
                            name
                        }
                    }
                }
                }
            }
        }
    `
  
    const data = await graphQLClient.request(query)
    console.log(JSON.stringify(data, undefined, 2))

    try {
        await createItem()
        return { body: 'Successfully created item!', params }
    } catch (err) {
        return { error: err }
    }
    
};
