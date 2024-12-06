new Uint8ClampedArray(4);
const v8 = new Uint8ClampedArray(4);
let v9 = 35;
const v11 = new Int8Array(v9);
v9 = 4;
const o19 = {
    valueOf() {
        [[4,v9,this],[Uint8ClampedArray,10,-2147483648n],4,v11];
        return v9;
    },
};
const v21 = [4294967297n,o19];
Reflect.apply(v8.includes, v11, v21);
