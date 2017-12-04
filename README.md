# Angular 2 / Search Engine

# Contents
* [overview](#overview)
* [intallation](#intallation)
* [results](#results)


# overview

-This project is an Enterprise directory with autocomplete fields for name and phone number
where we can find and see the details about your co-workers.
The directory has a registration and authentification sytem (provided by Meteor), to add new co-worker to the directory.

# intallation
## for client side :
```
cd <your-path/client> 
npm i
```
if you have angular installed in global :
```
ng build && ng serve

```
else, just launch the app by :
```
npm run build && npm run serve
```
## for server side :
```
git clone https://github.com/BlackStef/meteor_search_engine.git
npm i
meteor run 
```
# results
![alt text](src/assets/register.png "Registering")


                  Display all users
                  ------------------
                  
![alt text](src/assets/all_User.png "Display all users")


                  Filtering by name
                  ------------------
                  
![alt text](src/assets/searchFullText.png "filtering by name")


                  Filtering by job
                  ------------------
                  
![alt text](src/assets/searchByJob.png "filtering by job")


                  Filtering by number 
                  ------------------
                  
![alt text](src/assets/searchByNumber.png "filtering by number")


                  Profile co-worker
                  ------------------
                  
![alt text](src/assets/profileData.png "Profile co-worker")
