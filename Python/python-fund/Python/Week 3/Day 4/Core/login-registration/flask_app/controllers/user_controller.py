from flask_app import app
from flask import redirect,render_template,request,flash,session
from flask-Bcrypt  import Bcrypt

from flask_app.models.users import User

@app.route('/')
def login():
    return render_template("login.html")


# REGISTER

@app.route("/register",methods=["POST"])
def process_register():

    #validate your form here
    if not User.validate_user(request.form):
        return redirect("/")
    #create a hash
    print("----->",request.form["password"])
    pw_hash =Bcrypt.generate_password_hash(request.form["password"])
    print("===>",pw_hash)

    data = {**request.form,"password":pw_hash}
    
    #store the user id inside the session
    user_id =User.create(data)
    session["user_id"]=user_id
    return redirect("/dashboard")


# LOGIN 
@app.route("/login",methods= ["POST"])
def process_login():

    if not User.validate_login_user(request.form):
        return redirect("/")
    
    #see if the username provided exists in the DB
    data={"email":request.form["email"]}
    user_in_db =User.get_by_email(data)


    if not user_in_db:
        flash("invalid email/password","login")
        return redirect("/")
    
    if not Bcrypt.check_password_hash(user_in_db.password,request.form,["password"]):
        flash("invalid email/password","login")
        return ("/")
    
    #get the user by his email
    session["user_id"] = user_in_db.id
    return redirect("/dashboard")

    
# VIEW ROUTE
@app.route("/dashboard")
def dash():
    # ROUTE GUARD 
    if "user_id" not in session:
        return redirect("/")
#grab the user id from session and put in a dict
    data ={"id":session["user_id"]}
#grab the user  by id from database
    current_user = User.get_by_id(data)
    print("===> current_user:",current_user)
    return render_template("dashboard.html",username=current_user.first_name)




#LOGOUT 
@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")



