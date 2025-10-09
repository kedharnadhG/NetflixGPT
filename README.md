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
    - Build SecondaryContainer Component
    - Build MovieList Component
    - TMDB Image CDN URL
    - Made the Browse page amazing with Tailwind CSS
    - usePopularMovies, useTopRatedMovies, useUpComingMovies hooks

## Using GPT as a Movie-Recommendation System ( GEMINI API's )

    - GPT Search Feature
    - GPT Search Page (done)
    - GPT Search Bar
    - (**) Multi-Language Support feature
    - Get GEMINI API Key
    - GenAI SDK
    - GenAI API-Call
    - fetched GptMovieSuggestions from TMDB
    - created gptSlice & added it to store
    - Reused MovieList Component to make movieSuggestions look awesome
    - Memoization
    - maintained .env file
    - added .gitignore
    - made the Website Responsive
    - reInitialize the store to initialState after SignOut


    - finally deployed to Vercel

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

---

---

# GEN_AI Notes

---

# 🧠 Google GenAI & Gemini 2.5 Flash — In-Depth Notes

## 1. Terminology & Ecosystem

### **Gemini**

- **Gemini** is Google’s family of Large Language Models (LLMs) — the successor to PaLM/LaMDA.
- Built by **Google DeepMind**, it supports **multimodal input** (text, image, video, code, etc.).
- Common variants include:

  - `gemini-2.5-pro` → high accuracy, complex reasoning
  - `gemini-2.5-flash` → balanced performance & latency
  - `gemini-2.5-flash-lite` → fastest, cost-efficient

📘 **Docs**: [ai.google.dev/gemini-api/docs](https://ai.google.dev/gemini-api/docs)

---

### **GenAI (SDK / API Client)**

- npm-package : https://www.npmjs.com/package/@google/genai

* **GenAI** = Google’s **official client library / SDK** for interacting with Gemini models.
* It abstracts HTTP requests, authentication, and response parsing.
* You install it using `npm install @google/generative-ai` (or similar).
* Your **API key** is the **Gemini API key**, generated from Google AI Studio.

🧩 So:

> - **Model** → Gemini (e.g. `gemini-2.5-flash`)
> - **Library** → GenAI SDK
> - **Auth** → Gemini API key (from Google AI Studio)

---

## 2. Why “gemini-2.5-flash”?

### ⚙️ Trade-off Factors

| Factor   | Flash          | Pro             | Flash-Lite     |
| -------- | -------------- | --------------- | -------------- |
| Speed    | ⚡ Very Fast   | ⏳ Slower       | 🚀 Fastest     |
| Quality  | ✅ High        | 🔥 Highest      | ⚖️ Medium      |
| Cost     | 💰 Moderate    | 💸 Higher       | 🪙 Cheapest    |
| Use-case | Real-time apps | Heavy reasoning | Cost-sensitive |

### ✅ Best for Your Use-case

For a **movie recommendation UI**, users expect quick yet sensible replies.
`gemini-2.5-flash` is the **sweet spot** — it balances:

- Reasonable accuracy
- Low latency
- Cost-effectiveness

---

## 3. How the `generateContent()` Call Works

```js
const genAIresponse = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  generationConfig: {
    maxOutputTokens: 100,
    temperature: 0.7,
    topK: 40,
    topP: 0.95,
  },
  contents: [
    {
      role: "user",
      parts: [{ text: gptQuery }],
    },
  ],
});
```

### ⚙️ Under the Hood

1. **SDK constructs HTTP request**

   - Adds model name, generation config, contents.
   - Attaches API key in headers.

2. **Gemini backend executes inference**

   - Loads the `gemini-2.5-flash` model.
   - Processes your input with tokenization + decoding.
   - Applies your generation settings.

3. **Response returned**

   - SDK parses and returns JSON.
   - You extract text like:

     ```js
     const result = genAIresponse.response.candidates[0].content.parts[0].text;
     ```

---

## 4. Why Not Use Other Models (e.g., GPT-4, Claude, etc.)

| Category        | Gemini (2.5 Flash)            | GPT-4-Turbo           | Claude 3.5 Sonnet      |
| --------------- | ----------------------------- | --------------------- | ---------------------- |
| Ecosystem       | Google (AI Studio)            | OpenAI                | Anthropic              |
| Latency         | ⚡ Fast                       | ⚖️ Medium             | ⚖️ Medium              |
| Cost            | 💰 Moderate                   | 💸 Slightly higher    | 💰 Moderate            |
| Strengths       | Multimodal, tool integrations | Strong code reasoning | Natural writing style  |
| SDK Integration | Easy with GenAI               | Needs OpenAI SDK      | Requires Anthropic SDK |

### 🤝 Why Stick With Gemini

- Seamless integration with **Google services** & **AI Studio**.
- **Multimodal input** support (text, image, video).
- **“Thinking”** feature improves multi-step reasoning.
- Better latency and token pricing for UI-heavy apps.

---

## 5. Key Properties of **Gemini 2.5 Flash**

| Feature               | Description                                           |
| --------------------- | ----------------------------------------------------- |
| 🚀 **Speed**          | Optimized for fast responses & interactivity          |
| 🧩 **Reasoning**      | Supports internal “thinking” steps for better answers |
| 🧠 **Architecture**   | Hybrid reasoning + transformer-based model            |
| 💬 **Multimodal**     | Handles text, image, and code inputs                  |
| 💸 **Cost**           | Lower than `Pro`, ideal for production-scale apps     |
| 🔄 **Context Window** | Large enough for long prompts or conversation memory  |

---

## 💡 TL;DR Summary

> You’re using **Google Gemini 2.5 Flash**, accessed via the **GenAI SDK** using your **Gemini API key**.
> It’s chosen because it’s **fast, cost-efficient, and accurate enough** for real-time use-cases like movie recommendation systems.
> “2.5 Flash” stands for **Gemini version 2.5**, optimized for **speed and balanced reasoning**.
> You could switch to “Pro” for deeper reasoning or “Lite” for ultra-low latency — depending on your app’s goals.

---

---

---

# Model Comparison: Gemini & LLM Alternatives

## 🧠 Model Comparison Table & Notes

Below is a comparison across key dimensions. After the table, I give deeper notes explaining each row.

| Model / Variant                          | Strengths / Use Cases                                          | Latency / Speed                           | Reasoning / Depth                                                                       | Context & Tokens                                                    | Cost / Efficiency                                                              | Limitations / Trade-offs                                        |
| ---------------------------------------- | -------------------------------------------------------------- | ----------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| **Gemini 2.5 Flash**                     | Balanced model for real-time apps, chatbots, general tasks     | Low latency, optimized for responsiveness | Good — “thinking” enabled by default (hybrid reasoning) ([Google AI for Developers][1]) | 1 million tokens (future expansion) ([Google Developers Blog][2])   | More cost-efficient than Pro — designed for high throughput ([blog.google][3]) | Slight drop in accuracy vs Pro on very deep or technical tasks  |
| **Gemini 2.5 Pro**                       | Use for heavy reasoning, code generation, deep tasks           | Moderate latency (slower than Flash)      | Highest reasoning, depth, advanced capability                                           | Similar or slightly higher context window roadmap ([DocsBot AI][4]) | More expensive per token ([MuneebDev][5])                                      | Slower, heavier; overkill for simple tasks                      |
| **Gemini 2.5 Flash-Lite**                | Cost- and latency-sensitive tasks, classification, translation | Ultra low latency                         | Moderate reasoning (thinning of “thinking” by default) ([Google Developers Blog][2])    | 1 million token support, like Flash ([Google Developers Blog][2])   | Very cost-efficient; lowest cost among 2.5 models ([blog.google][3])           | Not as strong in deep reasoning or complex generative tasks     |
| **GPT-4 / GPT-4 Turbo**                  | Versatile across many domains (code, conversation, reasoning)  | Good latency for many tasks               | Very strong reasoning, wide adoption                                                    | Large context windows (in newer versions)                           | Moderate to high cost                                                          | Slightly slower than Flash in simple tasks; cost can scale high |
| **Claude (e.g. Claude 3, Sonnet, Opus)** | Natural language, long-form, safe & consistent output          | Varies — often competitive                | Strong with large inputs, text tasks                                                    | Often excels in very long texts / context                           | Competitive pricing in many use cases                                          | Less tooling for multimodal or code execution in some versions  |

---

### 🔍 Expanded Notes (for your reference)

#### **Gemini 2.5 Flash**

- Google positions it as the “performance / latency optimized” variant of Gemini 2.5 family. ([Google AI for Developers][1])
- Default “thinking” (internal reasoning) is enabled, giving it more nuance than older “flash-only” models. ([Google AI for Developers][1])
- Architecture strives for a balance: good reasoning + speed. ([blog.google][3])

#### **Gemini 2.5 Pro**

- Engineered for more demanding, high-precision tasks: code, math, long documents. ([Google DeepMind][6])
- Higher cost, more compute per request. ([Vapi][7])
- Slower in simpler prompts because of deeper reasoning overhead.
- Ideal when correctness, depth, or tool integrations matter over pure speed.

#### **Gemini 2.5 Flash-Lite**

- Announced in the Gemini 2.5 expansion as the most cost-efficient and fastest of the 2.5 family. ([blog.google][3])
- “Thinking” is off by default, meaning it doesn’t apply deep reasoning in every query to save latency / cost. ([Google Developers Blog][2])
- Good choice when you need many rapid, smaller tasks (e.g. classification, translation) rather than heavy generation.

#### **GPT-4 / GPT-4 Turbo**

- Strong general-purpose model used widely for code, reasoning, conversation.
- Its latency is often good for many use-cases, though in heavy tasks or high load it can slow down.
- Has strong ecosystem, tooling, existing integrations.
- For very large contexts, newer versions push the boundaries further.

#### **Claude (Sonnet, Opus etc.)**

- Often praised for consistency, writing style, handling long texts.
- Might be more conservative in hallucinations or safer output in some cases.
- Some versions emphasize text over multimodal / code features depending on edition.
- Strong contender especially when context length, stability, and language fluency matter more than raw speed.

---

[1]: https://ai.google.dev/gemini-api/docs/models?utm_source=chatgpt.com "Gemini models | Gemini API | Google AI for Developers"
[2]: https://developers.googleblog.com/en/gemini-2-5-thinking-model-updates/?utm_source=chatgpt.com "Gemini 2.5: Updates to our family of thinking models"
[3]: https://blog.google/products/gemini/gemini-2-5-model-family-expands/?utm_source=chatgpt.com "We're expanding our Gemini 2.5 family of models"
[4]: https://docsbot.ai/models/compare/gemini-2-5-pro/gemini-2-5-flash?utm_source=chatgpt.com "Gemini 2.5 Pro vs Gemini 2.5 Flash - DocsBot AI"
[5]: https://muneebdev.com/gemini-2-5-pro-vs-flash/?utm_source=chatgpt.com "Gemini 2.5 Pro vs Flash: Features, API, Pricing & Benchmark ..."
[6]: https://deepmind.google/models/gemini/pro/?utm_source=chatgpt.com "Gemini 2.5 Pro - Google DeepMind"
[7]: https://vapi.ai/blog/gemini-flash-vs-pro?utm_source=chatgpt.com "Gemini Flash vs Pro: Understanding the Differences Between ... - Vapi"
