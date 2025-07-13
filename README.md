# Netflix GPT

    - Netflix GPT is a Netflix clone built with OpenAI's GPT-3.5.

    - npm create vite@latest netflix-gpt -- --template react

    - configure tailwindcss (add 'import-statement' in App.css)
    - Header
    - Routing of App
    - Login Form
    - SignUp Form
    - Form Validations
    - useRef Hook
    - Firebase Setup
    - Deploying our app to production

    - Create SignUp User Account
    - (for every-firebase-API) we can see "const auth = getAuth();" so we can do it in a central-place (let utils>firebase.js)
    - SignUp & SignIn functionality implementation
    - (After authentication) store userInfo in Redux-Store (install dependencies) ("npm i -D @reduxjs/toolkit" & "npm i react-redux")

    - create Store (configureStore)
    - create Slice (userSlice)
    - create Actions (userSlice)
    - add userSlice in Store
    - provide Store in App.js ("provider" is coming from "react-redux")


    - we have to addUser/removeUser (dispatch an action) to store right, (i.e when he signIn/signUp/signOut) instead of doing sameThing again & again, fireBase gives us an utility i.e known as "onAuthStateChanged"

    (firebase doc > (search) firebase Authentication > web > manageUsers > onAuthStateChanged API) this API calls whenever a state-change happens

---

# Features

    - Login/Signup
        - Sign In / Sign Up Form
        - redirect to Browse page

    - Browse (page /(route))  (after authentication)
        -Header
        -Main Movie
            - Trailer in Background
            - Title & Description
            - MovieSuggestions
                -MovieLists * N

    - NetflixGPT
        - Search Bar
        - Movie Suggestions

---

# Notes

    - (If you have lot of i/p-fields in a form)
        - go ahead & use "FORMIK" - library (for handling forms like validations, etc)

    - "useRef" Hook  (that let's you reference a value that's not needed for rendering)

    - 2 ways to get data
        - using State-Variables
        - using "useRef" Hook   (now using this)

---

### Authentication using firebase

    - create a project in firebase
    - (goto web & do things)
    - copy paste the config file
    - npm install firebase
    - npm install -g firebase-tools
    - in Authentication enable (email & password)

#### firebase Deployment

    - firebase login
    - firebase init
    - firebase deploy  (by this we can deploy whenever we want to)   (or you can set-up gitHub-action so as soon as you commit your code to main-branch it will deploy)  (let's now do from local machine)
    - select (Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys)
    - use an existing project
    - select the project
    - What do you want to use as your public directory?  (dist)  (since vite)
    - Configure as a single-page app (rewrite all urls to /index.html)? (yes)
    -

    - (Before deploying)

    - npm run build
    - firebase deploy

    -  link :-> https://netflixgpt-24466.web.app/

    - Conc:
        - Steps for Deployment
            - npm install -g firebase-tools
            - firebase login
            - firebase init  (then selecting Hosting)
            - firebase deploy
