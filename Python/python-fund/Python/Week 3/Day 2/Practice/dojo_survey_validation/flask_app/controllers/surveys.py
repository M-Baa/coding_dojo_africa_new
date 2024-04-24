from flask_app import app
from flask_app.models.survey import survey
from flask import render_template,redirect,request


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/create/survey',methods=['POST'])
def create_survey():
    if survey.is_valid(request.form):
        survey.save(request.form)
        return redirect('/results')
    return redirect('/')


@app.route('/results')
def results():
    return render_template('results.html',survey = survey.get_last_survey())
