new Array(8);
function f12() {
    return "number";
}
function F16() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F16;
}
new F16();
new F16();
new F16();
new WeakMap();
const v32 = new Int8Array(1000.0);
new Int16Array(8);
const v38 = new Uint32Array(255);
const v43 = [2147483647];
let v44 = [-9223372036854775807];
[...v44] = v32;
function F45(a47) {
    if (!new.target) { throw 'must be called with new'; }
    function f48() {
        return f48;
    }
    v44 == this;
    5 - this;
    this.d = a47;
}
function F51(a53, a54, a55) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a55;
    this.d = v38;
    this.f = 8;
}
new F51(255, 257, 257);
new F51(257, 8, 255);
new F51(8, 8, 8);
let v60 = 56621;
let v61 = -1000000000000.0;
let v62 = 0.0;
let v64 = [[v60,v43,v62]];
const v66 = Symbol.isConcatSpreadable;
({"b":v61,"h":v62,"length":v64,} = v64);
v64 * -8;
({"description":v60,...v61} = v66);
