function longestSubstring(s) {
    // Implementation of longestSubstring function
}

module.exports = { longestSubstring };



function longestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {};

    for (let i = 0; i < s.length; i++) {
        if (charIndexMap.hasOwnProperty(s[i]) && charIndexMap[s[i]] >= start) {
            start = charIndexMap[s[i]] + 1;
        }
        charIndexMap[s[i]] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

module.exports = { longestSubstring };

