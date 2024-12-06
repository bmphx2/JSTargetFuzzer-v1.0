function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 54891;
    this.c = 54891;
    this.g = 54891;
}
const v3 = new F0();
const v4 = new F0();
let v5 = new F0();
let v9 = 254;
let v11 = new Float32Array(v9);
const v14 = new Float32Array(4);
let v17 = new Int16Array(0);
v11[4] = Int16Array;
v11 |= v14;
({"b":v9,"c":v11,"g":v17,} = v5);
v5 = v11;
v14 in v3;
Object.defineProperty(v4, 53, { writable: true, enumerable: true, value: v11 });
new Uint16Array(3455);
new Int16Array(128);
new Uint16Array(256);
