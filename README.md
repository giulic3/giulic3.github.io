# Giulia's Dev Blog
## Getting started with the dev env
### Notes - for me mainly

Prerequisites:
* curl (wget)
* git
* yarn

Get nvm (change version according to the latest) and run it with favorite shell (e.g. zsh)
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
Add the following to the shell profile configuration file (as prompted after install)

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Install desired Nodejs version and set it as default, here I'm using the current LTS,
that at the time of writing (2020/05) is the 12.16.3 (including npm 6.14.4).

```
nvm install 12.16.3
nvm use 12.16.3
```

Install the Gatsby CLI and yarn
```
npm install -g gatsby-cli
```

Clone the repo as Gatsby project
```
gatsby new blog https://github.com/giulic3/blog.git
cd blog
gatsby develop
```
Install gh-pages plugin for deployment
```
npm install gh-pages
```

***FIX***: at the time being _moment 2.25_  has some issues and it's necessary to downgrade it to make things work

```
npm install moment@2.24.0
```
Then add in _package.json_ the following:  

In dependencies, replace   
"moment": "^2.24.0",  
with  
"moment": "2.24.0",  

And add the resolutions block:  
"resolutions": {  
    "moment": "2.24.0"  
  }

Bonus: [MDX](https://www.gatsbyjs.org/docs/mdx/getting-started/), a cool plugin to use JSX inside Markdown (use `yarn add` instead of `npm install`).

## Folder Structure

```
└── content
    ├── pages
    └── posts
└── static
    ├── admin
    └── media
└── src
    ├── assets
    │   └── scss
    │       ├── base
    │       └── mixins
    ├── cms
    │   └── preview-templates
    ├── components
    │   ├── Feed
    │   ├── Icon
    │   ├── Layout
    │   ├── Page
    │   ├── Pagination
    │   ├── Post
    │   │   ├── Author
    │   │   ├── Comments
    │   │   ├── Content
    │   │   ├── Meta
    │   │   └── Tags
    │   └── Sidebar
    │       ├── Author
    │       ├── Contacts
    │       ├── Copyright
    │       └── Menu
    ├── constants
    ├── templates
    └── utils

```

## Acknowledgments
Using the awesome [gatsy-lumen-starter](https://github.com/alxshelepenok/gatsby-starter-lumen) from [Alexander Shelepenok](https://github.com/alxshelepenok).
