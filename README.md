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

    - created Redux Store (configureStore)
    - create Slice (userSlice)
    - create Actions (userSlice)
    - add userSlice in Store
    - provide Store in App.js ("provider" is coming from "react-redux")


    - we have to addUser/removeUser (dispatch an action) to store right, (i.e when he signIn/signUp/signOut) instead of doing sameThing again & again, fireBase gives us an utility i.e known as "onAuthStateChanged"

    (firebase doc > (search) firebase Authentication > web > manageUsers > "onAuthStateChanged" API) this API calls whenever a state-change happens (authentication-state changes) (it's kind of like a "Event-listener")

    - implemented Sign-Out functionality
    - update Profile ( api-call )

    - Bug-Fix1 : Sign up user displayName and profile picture update
    - Bug-Fix2 : if the user is not logged in Redirect /broswse to login Page and vice-versa.

    -- Hygiene changes

    - Bug-Fix3 : "unsubscribe" to the onAuthStateChanged listener when the component is unmounted ( to avoid memory-leaks, it's like "Event-listener" that is listening to a specific event, (i.e when the component is unmounted) it should stop listening to that event, so we have to unsubscribe it.)

    - added constant file (added the hard-coded values into it)


    - Fetch movies from TMDB (api)

        - Register TMDB API & create an app & get access token
        - Get Data from TMDB now playing movies-list (api-call in Browse-page)
        - put the data in Redux-Store (in browse-page)
    - Custom hook for Now Playing Movies
    - Create movieSlice
    - Update Store with movies Data
    - Planning for MainContainer & secondary Container
    - Fetch Data for Trailer Video
    - Update Store with Trailer Video Data
    - Embedded the Youtube video and make it autoplay and mute
    - Tailwind Classes to make MainContainer look awesome

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
    - Configure as a single-page app (rewrite all urls to /index.html)? (no)
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
            - firebase deploy      ( by this we can deploy whenever we want to, in hand control)
