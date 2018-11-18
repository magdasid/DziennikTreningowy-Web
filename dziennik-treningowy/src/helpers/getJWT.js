const getJWT = () => {
    return localStorage.getItem('cool-jwt');
}

export default getJWT;