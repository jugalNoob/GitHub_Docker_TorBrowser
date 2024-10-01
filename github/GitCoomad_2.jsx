
:::::::: Base of Git Hub :::::::::::::::::::: ......................<><>?<><><><><>
  
git config --global user.name ""

git config --global user.email

git config --list -->check all user information

git init -->create folder add all information

git status -->check file status

git log  -->check status and check commint

1::Git init -- 

2::git status  --> check  status

3::git add . --> all file addda

4::git add py.py --> single file data

5::Git log --> check comments
Author: jugalNoob <sjugal126@gmail.com>
Date:   Sat Apr 27 21:12:05 2024 -0700

git add README.md

git commit -m "first commit"

git branch -M main

git remote add origin https://github.com/jugalNoob/PythonOne.git

git push -u origin main

1::git remote  -->check link your Hub

2::git remote -v -->
  
3::git pull -->You create a new File in github and then use command -->git pull

4::ls -->check File name information


  
  ::::::::::::::::::::git branch --> check branch      ---------------<><><>

...git branch: Lists all branches or checks which branch you're currently on.

1::git diff:

git diff: Shows the changes in the working directory compared to the last commit. Useful for checking which parts
  of your file have been modified.
You repeated it twice, but both usages are essentially the same.
    
2:::git show 14bc23426dc392c6682a5160fb22653041f10e75:py.py:

Displays the content of the py.py file at the specific commit 14bc23426dc392c6682a5160fb22653041f10e75.
This is useful when you want to check what a file looked like in a specific commit.
    
3:::git checkout 14bc23426dc392c6682a5160fb22653041f10e75 -- py.py:

Checks out (restores) the py.py file from the commit 14bc23426dc392c6682a5160fb22653041f10e75 into your working directory.
    
4:::git checkout 14bc23426dc392c6682a5160fb22653041f10e75 -- *:

Restores all files (*) from the commit 14bc23426dc392c6682a5160fb22653041f10e75 into your working directory. 
    Useful when you want to bring back all the files from a specific commit.
    
5::git checkout master -- *:

Checks out all files from the master branch to your current working directory, overwriting any local changes.
    
6::git checkout master -- index.py:

Checks out the index.py file from the master branch. If you want to see more changes or additions, you can run git diff master.


::::::::::::  check all Command Your GitHub ......................

    Git Log Commands
1:::git log:

Shows the commit history, listing each commit's hash, author, date, and message. This is the most basic form of logging in Git.
    
2:::git log -p -2:

Displays the last two commits along with the patch (diff) for each commit. This shows you the exact code
    changes made in each of the last two commits.
    
3:::git log --stat:

Provides a summary of changes in each commit. It shows which files were changed and how many lines were added
or deleted. This is useful when you want a high-level overview of the modifications.
    
4:::git log --pretty=oneline:

Displays the commit history in a compact, one-line format, showing the commit hash and message in 
  a single line per commit. This is great for quickly scanning the history without too much detail.

    
5:::git log -S 'h1':

Searches for commits where the string 'h1' was added or removed in the project. This is useful for tracking down 
    where a specific string or code snippet was introduced or removed.
    
    
6:::git log --pretty=format:'%h - %an, %ar : %s':

  
Customizes the output of the log to show:
%h: The abbreviated commit hash.
%an: The author's name.
%ar: The relative date (e.g., 2 days ago).
%s: The commit message.

7::: Possible Extensions for git log --pretty=format:
%ad: To display the full commit date instead of the relative time.
%ae: To show the author’s email.
%cn: To show the committer’s name.
%cd: To show the committer’s full date.
%d: To show any ref names (e.g., branches or tags) that point to that commit.
%B: To include the full commit message.

  

  

||||||||||||Renaming and Moving  Files in Git||||||||||||

git mv py.py jugal.py --chnages Your file file_name

git rm jugal.py --> remove files

git push origin <branch_name> -->Update 

git rm --cached jugal.py -->remove file 

touch newfile.txt --> linux command

echo.>newfile.txt

git push origin <branch_name>
  
  

  
  
