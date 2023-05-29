function areAnagrams(str1, str2) {

    function anagram (str) {
        return str
            .toLowerCase()
            .split('')
            .filter((item) => item !== ' ')
            .sort()
            .join('');
    }
     return anagram(str1) === anagram(str2);
}

module.exports = areAnagrams;
