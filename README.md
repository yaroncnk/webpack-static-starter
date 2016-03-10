# webpack static starter
A static site starter kit.

## Dependencies
- node v4.2.4 (or later)
- npm 3.5.3 (or later)

## Getting started
- Fork statik
- Find and replace `statik` for your project's name
- Run `npm i`

## Developing
- Run `npm run dev`.
- Open your browser to `localhost:5000` (You can override the port with a `PORT` env)
- Start modified your html, js and styles.
- Watch your browser live reload.

## Where do I add my JS?
Start from `src/assets/js/main.js`.  If you need to require any other files
do it from there

## Where do I put my LESS/SCSS/CSS?
Start from `src/assets/less/main.less` or `src/assets/scss/main.scss` and import whatever you need?

## What if I need jQuery, Bootstrap or anything else like that?
 You can install libraries with `npm i --save library-name` and require them from your js or stylesheets.

## How do I deploy
We haven't figured out if we're using GitHub Pages or Surge, yet.  Until we do, here are instructions on how to deploy to Surge.

1. Write the name of the domain you want to deploy to in the CNAME.
2. Run `npm run deploy`.  This minifies your assets and deploys to Surge using the domain name you specified in the CNAME file.
3. Read [this doc](https://surge.sh/help/adding-a-custom-domain) to point a custom domain to your app

## Known Issues
- Adding a new image does not live reload
