export function setupAxios(axios, store) {
    axios.interceptors.request.use(
        (config) => {
            console.log('store', store);
            console.log('getState', store.getState());
            const {
                auth: { authToken },
            } = store.getState();

            // if (authToken) {
            //     config.headers.Authorization = `Bearer ${authToken}`;
            // }

            return config;
        },
        (err) => Promise.reject(err)
    );
}
