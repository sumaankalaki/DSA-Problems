//Two strings are isomorphic if characters in one string can be replaced to get the other string, with a 1-to-1 mapping (no two characters map to same character).
/**
 "egg" → "add" → ✅ isomorphic
(e → a, g → d)
"foo" → "bar" → ❌ not isomorphic
(o would need to map to 2 different letters)
 */

function isIsomorphic(s, t) {
    if (s.length !== t.length) return false;

    const mapST = new Map(); // key value pair for s to t
    const mapTS = new Map(); // key value pair for t to s

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (
            (mapST.has(charS) && mapST.get(charS) !== charT) ||
            (mapTS.has(charT) && mapTS.get(charT) !== charS)
        ) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
}

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true