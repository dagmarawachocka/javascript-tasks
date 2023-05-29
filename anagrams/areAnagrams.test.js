const areAnagrams = require('./areAnagrams');

describe('areAnagrams', () => {
    it('should return true for anagrams', () => {
        expect(areAnagrams('listen', 'silent')).toBe(true);
    });

    it('should return false for non-anagrams', () => {
        expect(areAnagrams('hello', 'world')).toBe(false);
    });

    it('should handle case sensitivity', () => {
        expect(areAnagrams('Listen', 'Silent')).toBe(true);
    });

    it('should handle whitespace', () => {
        expect(areAnagrams('anagram', 'nag a ram')).toBe(true);
    });
});