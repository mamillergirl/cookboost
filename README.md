# Overview
In my day to day life, I find that I often have food in my fridge or pantry that I have no use for. Often this food rots because I do not what to do with it. I decided to make a web app that helps me find recipes with the ingredients that I have. Cookboost is a React Web App that takes ingredient input from 
a user and returns recipe cards that the user can save. The saved cards will still be there for the next time that the user uses the app.

This app pulls Recipe Data from the Edamam Recipe Search API and takes input on what ingredient the user wants to search. It also allows users to save recipes and uses Local Storage.

# Video Demonstration

[Software Demo Video](https://youtu.be/BImkbps-Lg8)

# Web Pages
The first screen automatically searches for recipes using chicken. The page dynamically changes the recipes that are displayed based on the input that the user gives it.

 The second section is Saved. If a User clicks a bookmark on a recipe, it will go to the Saved section and be put into localstorage. 

# Development Environment
## Tools
 - Visual Studio Code 
 - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
 - [Edamam API](https://www.edamam.com/)
 ## Languages
 - Javascript
 - HTML
 - CSS

 # Useful Websites
- [API Website](https://www.edamam.com/)
- [React Tutorial](https://reactjs.org/)

# Future Work
- Make seperate spaces for the Saved Recipes and the Suggested Recipes.
- Add Profile page that allows users to mark their nutrition goals to personalize UX.
- Allow users to remove saved recipes.
