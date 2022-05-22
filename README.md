# Shopify Frontend Fall 2022 Internship Challenge

## App Description

This app allows a user to enter any long prompt, select a GPT-3 engine and summarize it in 2-4 points

## Built With
React - Sassy CSS - Material UI

## Getting Started
```
yarn install
```
After cloning the repo, run the above to install all required dependencies

### Getting your API key

1. Start by making an account at [https://beta.openai.com/signup](https://beta.openai.com/signup)
2. After making an account, get your API key by going to [https://beta.openai.com/account/api-keys]( https://beta.openai.com/account/api-keys)
3. Make a `.env` file at your root directory and add your API key 
  ```
   REACT_APP_OPENAI_API_SECRET={OPEN_AI_API_KEY}
   ```
4. Run in development:
   ```
   yarn start
   ```
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Roadmap
- [x] Add engine selection
- [x] Add point selection
- [x] Add error boolean and messaging
- [x] Create component for response cards

