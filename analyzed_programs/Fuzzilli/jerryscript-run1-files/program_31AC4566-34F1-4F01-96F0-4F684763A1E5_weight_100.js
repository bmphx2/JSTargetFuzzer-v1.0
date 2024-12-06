function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
}
new F0();
new F0();
new F0();
new WeakMap();
const v16 = new Int8Array(1000.0);
new Int16Array(8);
const v22 = new Uint32Array(255);
[2147483647];
let v28 = [-9223372036854775807];
[...v28] = v16;
function F29(a31) {
    if (!new.target) { throw 'must be called with new'; }
    function f32() {
        return f32;
    }
    v28 == this;
    5 - this;
    this.d = a31;
}
function F35(a37, a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a39;
    this.d = v22;
    this.f = 8;
}
new F35(255, 257, 257);
new F35(257, 8, 255);
new F35(8, 8, 8);
let v44 = 56621;
let v45 = -1000000000000.0;
let v46 = 0.0;
let v48 = [[v44]];
const v50 = Symbol.isConcatSpreadable;
({"b":v45,"h":v46,"length":v48,} = v48);
v48 * -8;
({"description":v44,...v45} = v50);
