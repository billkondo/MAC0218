# MAC0218

### Development instructions

- clone repo
- run bundle:install to install ruby gems
- you must have [yarn](https://yarnpkg.com/en/), a javascript package manager, installed
- to start server, run rails s
- run ./bin/webpack-dev-server in another terminal window in order to start client server. It will allow you to have hot reload (the browser will be refreshed when javascript code is changed)

### Implementation details

#### React

- This repo users React to develop the front-end part of the application
- To integrate this library with Ruby on Rails, the gem
  [webpacker](https://github.com/rails/webpacker) is used
- This gem generate the directory /app/javascript/ where the React code will live
- Inside this directory, there is the folder /packs. The files from this folder can be imported by Rails views using <% javascript_pack_tag file_name>
