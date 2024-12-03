const callApi = async (urlApi) => {
    try {
        const response = await fetch(urlApi);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export default callApi;
