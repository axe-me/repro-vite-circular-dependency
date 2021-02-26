# Reproduce of vite ssr load module stuck on circular dependency 
--------

## Steps
1. `npm install`
2. `npm run dev` -- you will see the console output stucked
3. go to `./src/app-meta.entity.ts`, remove the `app` field and its coresponding imports
4. re-run `npm run dev` you will see the server get booted up

## Potential reason causing it
`app.entity.ts` and `app-meta.entity.ts` importing each other to build many-to-many relationship (which is really common in typeorm or in any kinds of ORM), Vite SSR load module function seems cant figure out how to build the modGraph in this case. 

## Solution?
I have no idea how to solve it :C
