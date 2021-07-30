import json
from flask import Flask, redirect, request, session,make_response
from flask_session import Session
import requests
import re
from dotenv import load_dotenv
load_dotenv()
import os

app = Flask(__name__)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/api",methods=["GET"])
def index():
    return {
        'username': request.cookies.get('name')
    }


@app.route("/api/auth/github",methods=['GET'])
def data():
    code = request.args.get('code')

    url = 'https://github.com/login/oauth/access_token?client_id='+os.getenv("GITHUB_CLIENT_ID")+'&client_secret='+os.getenv("GITHUB_CLIENT_SECRET")+'&code='+code
    req = requests.post(url)
    s = req.text

    token = re.search('access_token=(.*)&scope', s).group(1)
    print(token)

    url = 'https://api.github.com/user'
    headers = {'Authorization': 'Bearer '+token+''}
    req = requests.get(url, headers=headers)
    userdata = req.text

    resp = make_response(f"The Cookie has been set")    
    resp = redirect("http://localhost:3000/#/home")
    resp.delete_cookie('name')
    resp.set_cookie('name',json.loads(userdata)['login'])

    return resp


@app.route("/logout",methods=["GET"])
def logout():
    resp = make_response(f"The Cookie has been deleted")    

    resp = redirect("http://localhost:3000/#/")
    resp.delete_cookie('name')

    return resp

