new Uint8ClampedArray(12);
new BigInt64Array(6, Uint8ClampedArray, Uint8ClampedArray);
new BigInt64Array(1024);
[-2147483649,127,-2,10,64523,9007199254740990,-3,-3];
[129,-4294967295,0,9007199254740990,-15499,-1349995560,-37863,-15];
[1073741823,536870889,-4294967297,5];
function f16() {
    return BigInt64Array;
}
const o17 = {
    "e": 1073741825,
};
Object.defineProperty(o17, "e", { configurable: true, set: f16 });
