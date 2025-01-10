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
    },
    logout:{
        url:`${baseUrl}/logout`,
        method:'GET'
    },
    allUsers:{
        url:`${baseUrl}/all-users`,
        method:'GET'
    }   ,
    updateUser:{
        url:`${baseUrl}/update-user`,
        method:'POST'
    },
        
}

export default SumerryApi