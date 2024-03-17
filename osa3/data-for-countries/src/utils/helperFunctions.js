function similarityPercentage(target, object) {
    const string1 = object.name.common;
    const string2 = object.name.official;

    const minLength = Math.min(target.length, Math.max(string1.length, string2.length));

    const matchingChars1 = Array.from(string1).filter((char, index) => char === target[index]).length;
    const percentage1 = (matchingChars1 / minLength) * 100;

    const matchingChars2 = Array.from(string2).filter((char, index) => char === target[index]).length;
    const percentage2 = (matchingChars2 / minLength) * 100;

    return (percentage1 + percentage2) / 2; 
}

export function customSort(arr, target) {
    return arr.slice().sort((a, b) => {
        const percentageA = similarityPercentage(target, a);
        const percentageB = similarityPercentage(target, b);
        return percentageB - percentageA;
    });
}
