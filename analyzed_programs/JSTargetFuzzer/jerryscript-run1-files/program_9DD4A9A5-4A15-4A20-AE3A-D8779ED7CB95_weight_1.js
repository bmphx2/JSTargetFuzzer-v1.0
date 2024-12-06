new Int32Array(255);
typeof 255 === "number";
new BigUint64Array(512);
Function();
new Uint16Array(64, 256, Uint16Array, 255);
const v21 = Symbol.toPrimitive;
const o29 = {
    [v21]() {
        const v23 = super.d;
        new Int32Array(..."number", v23, this, v23);
    },
};
