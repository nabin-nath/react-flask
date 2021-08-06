# Github oauth using Flask
This project authenticates user using github's oauth.

## Requirement
- git
- python3.6
- node

## Setup
- Open your Github
- Go to `Settings` -> `Developer settings` -> `OAuth Apps`
- Create `New OAuth App`
- Fill all the details 
- For Homepage URL put `http://localhost:3000`
- For callback URL put `http://localhost:3000/api/auth/github`
- Register the Application
- You'll get a `Client ID`
- Now generate a `Client secret`
- Clone this repo `https://github.com/nabin-nath/react-flask.git`
- cd to project `cd react-flask`
- Install the dependencies `npm i`
- Paste your `Client ID` in `.env-example` and rename it to `.env`
- cd to api `cd api`
- create a virtualenv for python3.6
- activate virtualenv
- Paste your `Client ID` and `Client secret` in `.env-example` and rename it to `.env`
- run `pip install -r requirements.txt`

## Running the code
- Make sure your virtualenv is activated, then run flask run(in the api directory)
- open new terminal and cd to react-flask `cd react-flask`
- run `npm start`
