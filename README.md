# Voting app frontend

This is a first pass at a front end for a voting app (casting a ballot)

So far the only thing being worked on is the casting of the ballot.

Things todo:
- Form for submitting a ballot
- page for creating elections/sending emails to voters

## Dependencies:
- node
- yarn

## Running the app

The app uses mountebank for stubbing API responses.
In order to run the app, you need to run the stub server first on 3001 by running:
`yarn run mock-server`

Then start up the app on 3000 by running `yarn start`

You can access the stub server console by visiting http://localhost:2525 to see logs and configurations

## JSON schema

The app makes some assumptions (in the stub server) on what the API schemas will look like.
To view the schemas in more detail, look at the json files in the `./templates/schemas` directory.
