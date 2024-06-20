var romanToInt = function (s) {
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var result = 0;
    for (let i = 0; i < s.length; i++) {
        const firstsymbol = symbol[s[i]]
        const secondsymbol = symbol[s[i+1]]
        if (firstsymbol < secondsymbol) {
            result += secondsymbol - firstsymbol;
            i++;
        }
        else {
            result += firstsymbol;
        }
    }
    return result;

};
