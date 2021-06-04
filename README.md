# Notes-Back-End-NodejsApplication

This is an In Memory Storage Back-End Notes App that manage you to create , update , delete and retrieve  Notes using In Memmory Storage.
using Nodejs and Express framework.

kinldy note that this app dependes on an in memory storage so you have to add data after running the server , this data will be deleted after stopping the server


to run this App kinldy flow the below steps

1- install nodejs on you machine  from here ( https://nodejs.org/en/ ) 
2- install visual studio code if don't already have it ( https://code.visualstudio.com/)
3- install postman to test it ( https://www.postman.com/) 
3- open this project on visual 
4- run the below  commands on the terminal of this project path
      - npm install --save
      - node start
5- open postman to test by typing one of the below Requests 
    - http://localhost:3000/api/notes/save  and send the data in the body as a JSON Object like this
               {
                "title":"Note 2  ",
                "content": "second note content ",
                "craetedBy":"Me"
                }
                
    - http://localhost:3000/api/notes/edit  and send the data in the body as a JSON Object like this
          {
            "title":"Note 2 updated ",
            "content": "second note content updated",
            "craetedBy":"Me"
          }
     
    - - http://localhost:3000/api/notes/delete/002  002 is the id of the note that will be deleted 
