module.exports = function check(str, bracketsConfig) {
    // function check(str = '|()|', bracketsConfig = [['(', ')'], ['|', '|']]) {
    // your solution

    const strLength = str.length;
    const bracketsConfigLength = bracketsConfig.length;
    const openBrackets = [];
    const closeBrackets = [];
    let check = 0;
    let temp = [];

    for (let i = 0; i < bracketsConfig.length; i++) {
        openBrackets[i] = bracketsConfig[i][0];
        closeBrackets[i] = bracketsConfig[i][1];
    }

    for (let i = 0; i < strLength; i++) {
        for (let j = 0; j < openBrackets.length; j++) {
            if (openBrackets[j] === closeBrackets[j] && str[i] === closeBrackets[j]) {
                if (str[i] === closeBrackets[temp[temp.length - 1]]) {
                    temp.pop();
                    check--;
                } else {
                    temp.push(j);
                    check++;
                }
            } else if (str[i] === openBrackets[j]) {
                temp.push(j);
                check++;
            } else if (str[i] === closeBrackets[j]) {
                if (j === temp.pop()) {
                    check--;
                } else {
                    return false;
                }
            }
        }
        if (check < 0) {
            return false;
        }
    }
    if (check === 0) {
        return true;
    } else {
        return false;
    }
}
