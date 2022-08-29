function countBs(str) {
    let totalStr = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element == 'B') { totalStr++ }
    }
    return totalStr;
}

function countChar(str, char) {
    let totalStr = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if (element == char) { totalStr++ }
    }
    return totalStr;
}


console.log(countBs('BBC'));
// 2
console.log(countChar('kakkerlak', 'k'));
// 4