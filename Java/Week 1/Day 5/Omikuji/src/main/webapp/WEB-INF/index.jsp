<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Form </title>
</head>
<body>
<h1> Send an Omikuji</h1>

<form action="/omikuji" method="POST">
<div class="form-group">
<label>Enter your name of any city :</label>
<input  type="text"   class="form-control" name="city"></input>
</div>
<div  class="form-group">
<label>  Enter the name of any person </label>
 <input type="text" class="form-control" name='person'>
 </div>
 <div class="form-group">
<label>Enter professional endeavor or hobby:</label>
 <input type='text' class="form-control" name='hobby'>
 </div>
 <div class="form-group">
 <label>Enter any type of living thing</label>
 <input type="text"  class="form-control" name="thing" ></input> 
 </div>
 <div class="form-group">
  <label>Say something nice to someone:</label>
 <input type="text"  class="form-control" name="something" ></input> 
 </div>
 <p> Send and show a friend</p>

 <input type='submit' value='Send'>
 

</form>


</body>
</html>