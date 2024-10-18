function convert(priceInUSD, toWhat){
    let exchangeRate;

    switch (toWhat){
        case "US": exchangeRate = 1.0;
        case "RU": exchangeRate = 97.16;
        case "KZ": exchangeRate = 487.49;
    }

    return priceInUSD * exchangeRate;
}