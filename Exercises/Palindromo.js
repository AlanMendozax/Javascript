const isPalindrome = (str) => {
    str = str.replace(/\s/g, '')
    const lowered = str.toLowercase()
    const splitted = lowered.split('')
    const reversed = splitted.reverse()
    const joined = reversed.join('')
    return lowered == joined
}

const d = isPalindrome('Ana')
console.log(d)