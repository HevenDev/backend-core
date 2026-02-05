Backend mastery begins

04/01/2026 - video 7
effies in js ??, Keep db always with promise or try catch asycn await. because db may change it's location, it could take time

mongoose connectionInstance provides a lot of knowledge, node process is also interesting to read.

# video 8
asyncHandler, sort of wrapper of req, res, next, err. It eases not to write a lot of same code. just wrap.

# video 9 notes
userSchema.pre("save", ) yaha jo callback aata hai, usme arrow function use nhi krna chahiye, kioki usse this ka reference nhi pta hota hai aur yaha par userSchema ka reference jaruri ban jata hai


Extra notes,
this keyword jo refer krta hia vo refer krta hia current context ko, jaha bhi vo use hua hai, current object k context ko

# video 10 notes,
multer se kaise cloudinary par upload krna hota hai vo sikha, documentation padhi.

# video 11
setup register and all other APIs seetup. Debug issue of high order function as asycnHandler wasn't returning the value as we expected to return a function. That is fixed here

# Headers, HTTP crash course
* HTTP Status Code
** 1xx Informational
** 2xx Success
** 3xx Redirection
** 4xx Client error
** 5xx Server error

# video 12
User controller setup and middleware guide

# video 13
Logic building register controller, big problem cut down to short and implemented

# video 14
Used postman to create collections and test register API

# video 15 & 16
Access token & refresh token concepts crystal cleared!!

# video 17
Added more features into user controller, such as editing fields & files