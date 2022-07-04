
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
            repository(owner: "cie", name: "CloudInfraServices") {
                defaultBranchRef {
                    target {
                        ... on Commit {
                            history {
                                edges {
                                    node {
                                    deletions
                                    message
                                    additions
                                    changedFiles
                                    committedDate
                                    commitUrl
                                    }
                                }
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
