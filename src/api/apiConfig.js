const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "2bf00369262cbfe41e1743bad1e9a14a",
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;