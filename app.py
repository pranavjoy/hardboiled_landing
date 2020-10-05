from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template("index.html", title="HardBoiled")

@app.route('/uploads/design-brief/')
def root():
    return app.send_static_file('uploads/design-brief.pdf')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
