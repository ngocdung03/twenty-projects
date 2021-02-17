##### VScode tips
- HTML5 boilerplate on VScode 
    - First type <, choose suggestion
    - Type 'doc' then choose Emmet abbreviation
- Wrap long line: Alt+Z
- Font awesome template: 
    - cdnjs.com/libraries/font-awesome  //May pick the first link
    - https://fontawesome.com/icons
- Favicons: 
    - css-tricks.com/favicons-next-to-external-links
    ```
    link rel="icon" type="image/png" href="https://www.google.com/s2/favicons?domain=css-tricks.com"  //Alter css-tricks.com by your personal website - 'ngocdung03' ?
    ```

- Open Network tab in Development tool: 
    - Refresh the page then see the list of files logging in 
- Application tab in Development tool:
    
##### Setting Git page
- Create new repo on GitHub
- Go to VSCode/Terminal:
```
git init
git remote add origin <URL>
\\repeat the below code lines whenever making changes
git add .
git commit -m "Initial commit"
git push origin master
```
- Go to setting of the repo on GitHub:
    - GitHub Pages/Source/Change None into master branch 
    - Save, scroll down and see the link of newly created website. (Wait for 10 mins then come back)
