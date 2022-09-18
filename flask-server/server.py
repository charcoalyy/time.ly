from flask import Flask
import json

with open('./test.json', 'r') as f:
  data = json.load(f)

app = Flask(__name__)
@app.route("/buses")
def buses():
    return data

if __name__ == "__main__":
    port = 5000
    app.run(debug=True, port = port)