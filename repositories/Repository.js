import axios from 'axios';
// const baseDomain = 'https://beta.apinouthemes.com'; // API for products
const baseDomain = 'https://find-a-plant--server.herokuapp.com'; // API for products
export const basePostUrl = 'https://beta.apinouthemes.com'; // API for post
// export const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)
export const baseStoreURL = 'https://find-a-plant--server.herokuapp.com'; // API for products

export const customHeaders = () => {
    // let local = localStorage.getItem('persist:Find-a-Plant');
    // let parseData = JSON.parse(local);

    // console.log(parseData);

    return {
        Accept: 'application/json',
    };
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders(),
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
