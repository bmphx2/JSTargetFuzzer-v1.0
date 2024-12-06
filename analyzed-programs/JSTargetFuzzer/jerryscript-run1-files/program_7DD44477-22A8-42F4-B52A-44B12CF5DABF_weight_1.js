let v0 = 9007199254740990;
const v5 = new Array(9);
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v5;
}
const v10 = new F6(34716, 127);
new F6(9, 127);
new F6(127, 34716);
v0 = 1;
Object.defineProperty(v10, 10, { value: 34716 });
new Uint32Array(10);
new BigUint64Array(1);
new Uint8Array(1563);
new Uint8Array(127);
new BigInt64Array(4);
new Uint16Array(1000);
const v34 = [8];
let v36 = "toString";
const v37 = (a38, a39) => {
    a38.length;
    v36 = "number";
    return a38;
};
v34["forEach"](v37);
