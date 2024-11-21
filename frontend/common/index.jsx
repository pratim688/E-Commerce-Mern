const baseUrl='http://localhost:5000/api'
const SumerryApi={
    signup:{
        url:`${baseUrl}/signup`,
        method:'POST'
    },
    signin:{
        url:`${baseUrl}/signin`,
        method:'POST'
    },
    userDetails:{
        url:`${baseUrl}/user-details`,
        method:'GET'
    }
}

export default SumerryApi