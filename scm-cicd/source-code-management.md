# SCM(Source Code Management)
Source-code management is all about managing the source code written on the local computer for better control and security. 

## Benefits of Source Code Management 
1. Better Control : by using a source-code-management tool, we can control our code in such a way that:
- who can access our code
- what are all the rules and permissions
- why they are making the changes
- and having an option to revert the code whenever something is not working out for us
2. Better security : by using a source-code-management tool, we can safely and securely share our code with only the necessary team members. 
3. Fast Delivery : immediately, we can share all the changes to each and every team member 
4. Better availability : as we are maintaining the source code by using the source-code-management tools, all are in Claude repositories, so the code is available in the cloud and accessible everywhere. 

## Different types of SCM tools 
- GitHub
- Bitbucket
- Azure Git Repository

## Git vs GitHub
Git is a tool that is going to help us to push our local changes to the Claude repository. 
Example : GitBash, Github Desktop, Tortoise Git

GitHub is a Claude repository used to maintain all our code. 

## Code Life Cycle in Git 
Different stages involved in pushing the code from local computer to Claude repository 

1. Creating local working directory 
2. Initialize the local working directory. 
3. Move working files into staging area. 
4. Commit all the latest changes. 
5. Push the changes from the local computer to specific branch in the cloud repository. 


## 1. Creating local working directory 
Creating the local project folder to maintain on a day-to-day basis. What are all the changes that we are adding within the automation project

#command to switch to local working directory 
cd <path-of-directory>

## 2. Initialize the local working directory. 
Installing Git libraries within the project folder to monitor the changes made by the user 

#command 
git init  => to initialize
git status  => to check the changes made by the user (red-color = unstaged, green - staged)

## 3. Move working files into staging area.
Separating the files which are in working condition from the total files modified by the user, and we are going to move these working files into a temporary space within the local computer. 

#command
git add <file-name>  => to add into staging area
git status  => to check the changes made by the user (red-color = unstaged, green - staged)
git rm -r --cached <file-name> => to remove changes from the staging area 


## 4. Commit all the latest changes. 
Make all the changes as a single package and add comments about what all the changes are in the latest code. 

#command
git commit -m "comments-about-latest-change"

## 5. Push the changes from the local computer to specific branch in the cloud repository. 
Upload the code from the local computer to a specific branch in the cloud repository, like GitHub, Bitbucket, etc. 

#command:
git remote add origin <git-repo-url>
git push origin <branch-name>  => deafult 'master' for the first time

git checkout -b <branch-name>
git push origin <branch-name>

# Branching strategy
Branching strategy is all about maintaining multiple copies of the code for each and every feature or for each and every user to avoid conflicts and also to avoid invalid code. 
