/*
4. javascript: student record manipulation

implement a function manipulateStudentRecord that:

takes 4 arguments:
- an object literal obj
- a string operation that is either "delete" or "edit"
- a string prop
- a string newValue

returns a value depending on operation:
- if operation is 'delete':
  returns a new object literal with the same properties and their values as obj has,
  except if obj has property prop, then this property must not be in the returned
  object literal. in this case, the parameter newValue is undefined

- if operation is 'edit':
  returns a new object literal with the same properties and their values as obj has,
  except if obj has property prop, then this property value must be updated to the
  newValue parameter

provided code tests the implementation using several input files that contain parameters
for the function. it calls the function and prints the properties names of the returned
object, alphabetically ascending.

sample case 0:
input:
3
name John
lastName Bliss
city Florida
edit city Seattle

output:
city Seattle
lastName Bliss
name John

explanation:
obj has 3 properties: name, lastName, and city
property to edit is city, so returned object literal contains 'Seattle' for city
while other two properties are same as in obj
*/

function manipulateStudentRecord(obj, operation, prop, newValue) {
    // create a new object to avoid modifying the original
    let result = { ...obj }
    
    // check if the property exists in the object
    if (prop in obj) {
        if (operation === 'delete') {
            // remove the property for delete operation
            delete result[prop]
        } else if (operation === 'edit') {
            // update the property value for edit operation
            result[prop] = newValue
        }
    }
    
    return result
}

/*  
- i did not think to declare a result object to store the object properties. 
- i forgot about the 'in' keyword.
- i forgot how to delete a property from an object.
*/
