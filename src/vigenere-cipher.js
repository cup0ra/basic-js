class VigenereCipheringMachine {
    constructor(isDirect) {
        this.isDirect = !(!isDirect && isDirect != undefined)
    }
    encrypt(message, key) {
        if (!message || !key){
            throw new Error;
        }
        let result = '';
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0,j = 0 ; i < message.length; i++){
            let m = message.charCodeAt(i);
            let k = key.charCodeAt(j % key.length );
            if (65 <= m && m <= 90){
                result += String.fromCharCode(( (m-65) + (k-65)) % 26 + 65);
                j++;
            }else{
                result += message[i];
            }
        }
        return this.isDirect ? result : result.split('').reverse().join('');
    }

    decrypt(message, key) {
        if (!message || !key){
            throw new Error;
        }
        let result = '';
        key = key.toUpperCase();
        for (let i = 0, j = 0; i < message.length; i++){
            let m = message.charCodeAt(i);
            let k = key.charCodeAt(j % key.length );
            if (65 <= m && m <= 90){
                if (m < k){
                    m += 26;
                }
                result += String.fromCharCode(( m - k) % 26 + 65);
                j++;
            }else{
                result += message[i];
            }
        }
        return this.isDirect ? result : result.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;