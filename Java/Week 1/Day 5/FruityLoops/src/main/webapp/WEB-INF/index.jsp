<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<meta charset="ISO-8859-1">
<title>Fruityy </title>
</head>
<body>
<h1>Fruit Store </h1>
<table>
<thead>
<tr>
<th> Name</th>
<th> price </th>
</tr>

</thead>
<tbody>
<c:forEach var="oneFruit" items="${fruits}">
        <tr> <td> <c:out value="${oneFruit.getName()}"></c:out> </td>
        <td> <c:out value="${oneFruit.getPrice()}"></c:out> </td></tr>
    </c:forEach>
</tbody>

</table>


</body>
</html>