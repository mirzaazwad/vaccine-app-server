# Server Side for Vaccine App

In this app, we tried to integrate a dev ops based approach, with a CI/CD pipeline that consists of github actions being configured thorugh the yml workflows. We also integrated google cloud build 
and cloud run to deploy the system. The deployment was automated using the existing features provided by GCP. Now the underlying technologies used to develop this simple
system was:
![ReactJS](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![TailwindCSS](	https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)![ExpressJS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

as the employed development stack, that being MERN.

Additionally we also used:



![Google Cloud](https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)![Datadog](https://img.shields.io/badge/datadog-%23632CA6.svg?style=for-the-badge&logo=datadog&logoColor=white)![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)![Jest](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)

to implement a very basic level of dev ops

This project is divided into 2 segmrents in 2 seperate repositories:

- client: [Client Side](https://github.com/NafisaMaliyat-iut/vaccine-app-client)
- server: [Server Side](https://github.com/mirzaazwad/vaccine-app-server)

  Finally this project is deployed so I encourage checking out the deployed project [Project URL](https://vacine-app.netlify.app)


  Those who contributed heavily to this project includes:
  - [Nafisa Maliyat](https://github.com/NafisaMaliyat-iut)

  - [Nawsheen Mehereen](https://www.linkedin.com/in/nawsheenmehereen/)

  - [Mirza Mohammad Azwad](https://www.linkedin.com/in/mirza-mohammad-azwad-b5239b1a4/)
 

The client side wes deployed in netlify which has its default CI/CD. And for the backend or the server we are using the google cloud build with its default continuous delivery system as well as container registry system offered by google. The cloud build instances can be deployed via cloud run managed service which is essentially a serverless deployment. Furthermore, we used github actions to push docker images and to automate testing. We ensure that the deployment does not take place if the tests are not successful. For data logging we are making use of datadog's trial version. We configured the topic, subscribers, pub/sub and integrated the sink so as to feed the data to the logger, although this implementation is buggy. All controllers were tested before deployment and deployment would only take place if the tests passed successfully. We used jest and supertest to configure the unit testing. Although since we did not follow a microservice architecture, the use of integration testing was not applied thoroughly. As mentioned earlier the tests were automated to be carried out in every pull to main or push to main. Also deployment would only take place on successful, tests being carried out.

So this project in reality creates 2 images, and pushes that image to dockerhub which can be pulled and run. We attempted to work with ECS via AWS but failed unfortunately. 

The app was created using MERN stack as mentioned earlier. So we have a client side which is a react vite app and a server side which is an express app. With mongodb as our database, we tried to configure security via the use of jsonwebtokens. In addition, the features that this app provides are:

- login/signup/logout
- user information viewing
- Display vaccine information consisting of vaccines to give, and vaccines given. 
- vaccine registration
- downloading vaccine certificate
