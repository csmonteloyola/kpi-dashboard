export type AmplifyDependentResourcesAttributes = {
    "function": {
        "fnGithub": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "fnCollectGithub": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "fnCollectGithubCommits": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "apiGithub": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}