import React from 'react'

const Valdionmassage = (customer_data) => {
let error = {}
if (customer_data.name === "") {
    error.name = "you shouid passing data"
}else {
    error.name =""
}
if (customer_data.phone === "") {
    error.phone = "you shouid passing data phone"
}else {
    error.phone =""
}
return error
}

export default Valdionmassage
