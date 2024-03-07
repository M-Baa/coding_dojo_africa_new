from flask import Flask, render_template

app = Flask(__name__)

@app.route('/play')
def index():
    return render_template('index.html')

@app.route('/play/<int:nums>')
def hello(nums):
    return render_template('index.html', num=nums)

@app.route('/play/<int:nums>/<string:color>')
def hi(nums, color):
    return render_template('index.html', num=nums, color=color)

if __name__ == "__main__":
    app.run(debug=True)

