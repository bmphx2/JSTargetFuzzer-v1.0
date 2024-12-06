function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 36290;
    this.h = 36290;
}
new F0();
new F0();
new F0();
[16044,2147483647,9,-1532229618,-9007199254740991,0,31057,128,-9];
[2147483648,-12491,4,4096];
[-11,257,-2147483647];
new Uint8ClampedArray(64);
new Uint16Array(3592);
new Uint16Array(6);
let v18 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v19 = [6,17590];
[-658853788,-256];
let v23 = 10n;
const v26 = new Uint8Array(82);
v26 == v23;
const v30 = -(v23--);
function F32(a34, a35, a36, a37) {
    if (!new.target) { throw 'must be called with new'; }
}
const v38 = new F32();
"function" == v38;
let v41 = BigUint64Array;
const v42 = new v41(12);
let v46 = [Date(Date)];
let v47 = --v46;
let v48 = ++v47;
--v48 == 5n;
const v53 = new Uint32Array(v19);
new Uint8Array(16);
let v58;
try {
const t0 = 193;
v58 = t0(-4294967295);
} catch (e) {}
({"buffer":v18,"d":v41,"g":v58,...v58} = v42);
const o59 = {
};
new Proxy(v53, o59);
1073741824n >> 5n;
Symbol("multiline");
const v71 = v18.toPrimitive;
const o75 = {
    [v71]() {
        try {
            super.getUint16();
        } catch(e74) {
        }
        return this;
    },
};
const v79 = new Uint32Array(9);
new Uint16Array(v79);
function F87(a89, a90, a91, a92) {
    if (!new.target) { throw 'must be called with new'; }
    a91.d = a92;
    this.f = "global";
}
const v93 = new F87(-4294967296, 5n, "-16", "-16");
new F87(-1, -7n, "-16", "global");
const v95 = new F87(-4294967296, 5n, "global", "global");
"-16" == v95;
if (-1) {
} else {
    function F100(a102, a103, a104) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a104;
    }
    const v105 = new F100(F100, v93, "function");
    const t73 = -1;
    new t73(v105, v53, "function");
    new F100(v105, "global", "function");
}
let v108 = 0;
for (let i = 0; i < 10; i++) {
    v30 > v108;
    v108++;
}
