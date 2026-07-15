
from flask import Flask
import argparse
# from flask_cors import CORS


app = Flask(__name__)
# CORS(app)


@app.route("/")
def index():
    return "<h1>Welcome motherfuckers</h1>"


@app.route("/add/<int:n1>/<int:n2>")
def add(n1, n2):
    return str(n1 + n2)


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", type=int, default=5555)
    args = parser.parse_args()

    app.run(host="0.0.0.0", debug=True, port=args.port)
