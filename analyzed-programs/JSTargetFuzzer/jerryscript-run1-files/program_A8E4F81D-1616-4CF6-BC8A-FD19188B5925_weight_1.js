function f0() {
}
function f1() {
    const o6 = {
        248: f0,
        [f0]() {
            f0();
            this.valueOf = f0;
            try {
                super.asUintN(f0);
            } catch(e5) {
            }
            return f0;
        },
        ...f0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
f1();
function F10(a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v7;
    this.g = v8;
    this.c = f0;
}
new F10(F10);
new F10(v7);
new F10(F10);
[881291345,37704748];
[1024,-2,14,0,42035,-4294967295];
[-9007199254740991,-1988852969,2,753782432,1279548969];
let v19 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v20 = [6,17590];
[-658853788,-256];
let v26 = BigUint64Array;
const v27 = new v26(12);
const v30 = new Uint32Array(v20);
new Uint8Array(16);
let v35;
try { v35 = v19(-4294967295); } catch (e) {}
({"buffer":v19,"d":v26,"g":v35,...v35} = v27);
const o36 = {
};
const v38 = new Proxy(v30, o36);
const v42 = Symbol.toPrimitive;
const o50 = {
    [v42]() {
        try {
            super.getUint16();
        } catch(e45) {
            if (e45) {
                v38[4294967296];
            } else {
            }
        }
        return this;
    },
};
function F57(a59, a60, a61, a62) {
    if (!new.target) { throw 'must be called with new'; }
    a61.d = a62;
    this.f = a59;
}
const v63 = new F57(-4294967296, 5n, "-16", "-16");
new F57(-1, -7n, "-16", "global");
const v65 = new F57(-4294967296, 5n, "global", "global");
"-16" == v65;
if (-1) {
} else {
    function F70(a72, a73, a74) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a74;
    }
    const v75 = new F70(F70, v63, "function");
    const t76 = -1;
    new t76(v75, "global", "function");
    new F70(v75, "global", "function");
}
