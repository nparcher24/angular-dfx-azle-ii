# Angular Motoko and Azle

Welcome to the Angular Motoko and Azle Github repo! 
This repository is made to be a plug-and-play solution for using Angular16 as an ICP smart contract canister front-end with Motoko as the canister back-end. <br />
This project uses Angular version 17.1 and dfx 0.15.3.

## Quickstart
run git clone 'https://github.com/JupiterM/Angular16Motoko'. <br />
cd angular-2. <br />
run 'npm install -y'. <br />
run 'npm run deploy:local'. 

## Deploy on IC Network
Just change values in 'canister_ids.json' to your own. <br />
run 'npm run deploy:ic'

## Development server
Angular is meant to be run as a front-end canister, so 'ng serve' is not preferred. <br />
Use 'npm run deploy:local' instead.

## Code scaffolding
Components and services can be created the same. <br />
When creating a new component or service: <br />
{ MotokoService } must be imported and instantiated prior to being used. <br />
After updating Motoko smart contract 'main.mo' <br />
run "npm run generate:motoko" to generate new candid files <br />
The motoko services file 'motoko.service.ts' must also be updated.  


## Building Angular Application

Instead of using `ng build` to build the project, <br />
use either: <br />
'npm run build:dev' for a development build or <br />
'npm run build:prod' for a production build

## Running unit and end-to-end tests

No additional testing has been created yet. There is only a ZoneAwarePromise which returns the value from a 'greet' function in the console to verify connectivity.

## Further Help
Check out the Dfinity forums for further help...if you dare!! 