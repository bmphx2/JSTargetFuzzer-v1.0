function f0() {
}
[-27973,-53297,1073741823,30261,10701,-59568,-2,4096,53821564];
[65452,-9007199254740991,5,51658,288154136,128,1,60027,-1962536253];
[-24849];
new Float32Array(257);
new Float64Array(10);
new Uint8ClampedArray(256);
new Int32Array(6);
let v23 = Int16Array;
new v23(184);
let v26 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v27 = [6,17590];
[-658853788,-256];
let v33 = BigUint64Array;
const v34 = new v33(12);
const v37 = new Uint32Array(v27);
new Uint8Array(16);
let v42;
try { v42 = v26(-4294967295); } catch (e) {}
({"buffer":v26,"d":v33,"g":v42,...v42} = v34);
const o43 = {
};
new Proxy(v37, o43);
const v49 = Symbol.toPrimitive;
const o53 = {
    [v49]() {
        try {
            super.getUint16();
        } catch(e52) {
        }
        return this;
    },
};
function F60(a62, a63, a64, a65) {
    if (!new.target) { throw 'must be called with new'; }
    a64.d = a65;
    this.f = a62;
}
const v66 = new F60(-4294967296, 5n, "-16", "-16");
new F60(-1, -7n, "-16", "global");
const v68 = new F60(-4294967296, 5n, "global", "global");
"-16" == v68;
if (-1) {
} else {
    function F73(a75, a76, a77) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a77;
    }
    const v78 = new F73(F73, v66, "function");
    const t50 = -1;
    new t50(v78, "global", "function");
    new F73(v78, "global", "function");
}
const v82 = new Float64Array(65);
[v23] = v82;
const v90 = Symbol.iterator;
const o99 = {
    [v90]() {
        let v92 = 10;
        const o98 = {
            next() {
                v92--;
                const v96 = v92 == 0;
                const o97 = {
                    "done": v96,
                    "value": v92,
                };
                return o97;
            },
        };
        return o98;
    },
};
