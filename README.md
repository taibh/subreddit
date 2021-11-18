# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn` or `npm i` to install nodemodules


### `yarn start` or `npm start` to runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tech Stacks
- JS framework: ReactJS (using React Hooks).
- UI library: [MUI](https://mui.com/) `5.1.0`.
- SCSS
- Axios
- DayJS

## Features In Project
- Subreddit/Search page:
  - Show list threads with options to sort by hot, new or top.
  - The first load of the list shows only 20 items, when you scoll to the bottom of the current list it loads 20 more items.
  - Loading animations when API hasn't finished
  - Each thread is displayed on a card with the following information:
    - Posted by
    - Time of post
    - Title
    - Content
    - Number of vote
    - Number of comments
  - There is show `upvote`, `downvote`, `share`, and `save` action, but this feature is not yet implemented.
  - Navigate to thread page: you can click anywhere on the thread card except `upvote`, `downvote`, `share`, `save`, and `more action` button.
- Thread page:
  - Only show details of 1 thread, the content is the same as thread card in the list screen.
  - Comment content not implemented.
  - Navigate to the list screen: You can click subreddit name "Dota 2 on Reddit" or using go back feature of browser.

## Preview

![image](https://user-images.githubusercontent.com/33046078/142470111-305c5718-11b8-4406-9a60-69dfcc899e10.png)

![image](https://user-images.githubusercontent.com/33046078/142470270-973e00b5-7aaa-4bd7-9548-46555d5a3572.png)


