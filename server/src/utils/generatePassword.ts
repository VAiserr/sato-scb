import crypto from "crypto"

const generatePassword = (
    length: number = 20,
    wishList: string = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
) => {
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
        .map((x) => wishList[x % wishList.length])
        .join('');
}

export default generatePassword;