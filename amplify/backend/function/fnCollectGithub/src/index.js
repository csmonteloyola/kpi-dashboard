
const { gql, GraphQLClient }  = require('graphql-request')


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  
    const endpoint = 'https://github.concur.com/api/graphql'

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: 'Bearer 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',
      },
    })
  
    const query = gql`
        {
            search(query: "repo:cie/CloudInfraServices is:pr created:>2019-04-01", type: ISSUE, last: 100) {
                edges {
                node {
                    ... on PullRequest {
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


};
