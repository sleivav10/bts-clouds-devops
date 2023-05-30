function check(User,TypeUser)
{
if (TypeUser==='Admin' || TypeUser==='manager')   {
    return "Username valid"    
} 
else if (User.charAt(0) === User.charAt(0).toUpperCase()&&
 (User.length >4 && User.length<11))
{
return "Username valid"
}
else {return "Username invalid"}
}

User ='Susana'
TypeUser='New'
result=check(User,TypeUser)
console.log(result)

User2 ='susana'
TypeUser2='New'
result2=check(User2,TypeUser2)
console.log(result2)