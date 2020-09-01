from flask import Flask, render_template, request

import requests

app = Flask(__name__)
token = "FZMSf2h8ju9KZWE9kRvRWO29FvumEHBE"
SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzad99WOtliX6IDsyBuAuw0a6ENmPaEZZFIyhhAnoLp_Ybt3h8/exec"


@app.route('/post_form', methods=['POST'])
def post_form():
    req_data = request.get_json()

    print(req_data)
    r = requests.get(SCRIPT_URL, data=req_data)
    return "Success"


@app.route('/')
def hello_world():
    return render_template("index.html", title="HardBoiled")


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
