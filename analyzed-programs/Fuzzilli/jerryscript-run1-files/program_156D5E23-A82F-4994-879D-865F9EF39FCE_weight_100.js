new Array(0);
for (const v16 in Array) {
    for (let v17 = 0; v17 < 32; v17++) {
        Array["p" + v17] = v17;
    }
}
Object.defineProperty(Array, 14, { configurable: true, enumerable: true, get: Array, set: Array });
