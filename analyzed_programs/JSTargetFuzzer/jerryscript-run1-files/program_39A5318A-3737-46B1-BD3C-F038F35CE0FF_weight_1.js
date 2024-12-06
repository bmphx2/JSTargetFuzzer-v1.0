class C3 {
    static p(a5) {
        const v6 = super.d;
        [v6,v6,this];
        return 38272;
    }
    static h;
    static e;
    p(a9) {
        const o12 = {
            "maxByteLength": 171,
        };
        const v14 = new ArrayBuffer(171, o12);
        new BigUint64Array(v14);
        return 1.6393974434979634e+308;
    }
}
new C3();
new C3();
new C3();
new Int8Array(127);
new BigUint64Array(2454);
new BigInt64Array(1024);
let v29 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v30 = [6,17590];
[-658853788,-256];
let v36 = BigUint64Array;
const v37 = new v36(12);
const v40 = new Uint32Array(v30);
new Uint8Array(16);
let v45;
try { v45 = v29(-4294967295); } catch (e) {}
({"buffer":v29,"d":v36,"g":v45,...v45} = v37);
const o46 = {
};
new Proxy(v40, o46);
const v52 = Symbol.toPrimitive;
const o56 = {
    [v52]() {
        try {
            super.getUint16();
        } catch(e55) {
        }
        return this;
    },
};
function F63(a65, a66, a67, a68) {
    if (!new.target) { throw 'must be called with new'; }
    a67.d = a68;
    this.f = a65;
}
const v69 = new F63(-4294967296, 5n, "-16", "-16");
new F63(-1, -7n, "-16", "global");
const v71 = new F63(-4294967296, 5n, "global", "global");
"-16" == v71;
if (-1) {
} else {
    function F76(a78, a79, a80) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a80;
    }
    const v81 = new F76(F76, v69, "function");
    const t62 = -1;
    new t62(v81, "global", "function");
    new F76(v81, "global", "function");
}
