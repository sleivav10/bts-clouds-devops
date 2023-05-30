function type_of (element)
{
return typeof element === "string"
}

function string_element(element) {
    return element.toUpperCase() + "!"}

array=[  100,  "iSMael",  55,  45,  "sANyiA",
  66,  "JaMEs",  "eLAmIn",  23,  "IsMael",  67,  19,  "ElaMIN",];

var cleanedArray = array.filter(type_of)
var formattedArray = cleanedArray.map(string_element)

console.log(formattedArray)
//function cleanStrings(strin