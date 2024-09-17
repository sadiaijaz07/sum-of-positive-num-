function anagram(string_array) {
    const obj = {};
    for (const i of string_array) {
        const sortedWord = i.split('').sort().join('');
        if (!obj[sortedWord]) {
            obj[sortedWord] = [];
        }

        obj[sortedWord].push(i);
    }
    return Object.values(obj);
}
const word_array = ['bat', 'tab', 'tap', 'pat', 'cat', 'act'];
const ans =anagram(word_array);
console.log(ans);

