
# Fake NFT Marketplace

## Tecnologies:
- Express
- MongoDB

## Requirements:
- Install `docker`
- Install `docker-compose`

## How to run it locally?
1. Add `127.0.0.1 mongo nft_service` in the `/etc/hosts` file.
2. Start docker compompose: `npm run docker:start`
3. Attach to the `nft_service` container : `npm run docker:bash`
4. Install NPM Packages: `npm install`
5. Start Development or Production Server: `npm run dev` or `npm start`
6. When you are done stop the docker-compose: `npm run docker:stop`
