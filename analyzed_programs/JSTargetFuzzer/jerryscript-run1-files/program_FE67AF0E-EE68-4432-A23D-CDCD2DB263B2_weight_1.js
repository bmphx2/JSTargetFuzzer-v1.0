function f0() {
    const o25 = {
        __proto__: 5,
        "h": 6,
        "a": 127,
        3632200902: 127,
        set f(a5) {
        },
        ...6,
        ...6,
        "g": 127,
        "b": 5,
        ...5,
        [127](a10, a11) {
            Object.defineProperty(this, "b", { configurable: true, enumerable: true, value: this });
            for (let i15 = 0, i16 = 10; i15 < i16; i15++, i16--) {
                i15 >> i16;
            }
            return 5;
        },
    };
    return o25;
}
const v26 = f0();
const v27 = f0();
const v28 = f0();
Object.defineProperty(v28, 10, { configurable: true, enumerable: true, get: f0 });
const v32 = !v27;
+1;
Math.asin(v32);
f0 >>> v28;
new Uint16Array(3230);
new Int8Array(7);
new Float64Array(2810);
function F44(a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = v28;
    this.h = 2810;
}
const v48 = new F44(v26, 3230);
new F44(v26, 2810);
new F44(v26, 7);
let v51 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v52 = [6,17590];
[-658853788,-256];
let v58 = BigUint64Array;
const v59 = new v58(12);
const o60 = {
};
new Proxy(v52, o60);
new Float64Array(170);
new Int16Array(3840);
new Uint8Array(3);
const v74 = new Uint32Array(v52);
new Uint8Array(16);
let v79;
try { v79 = v51(-4294967295); } catch (e) {}
({"buffer":v51,"d":v58,"g":v79,...v79} = v59);
const o80 = {
};
new Proxy(v74, o80);
for (let i88 = 0, i89 = 10; i88 < i89; i88++, i89--) {
    i88 %= i88;
    v79 <<= v48;
}
const v97 = Symbol.toPrimitive;
const o101 = {
    [v97]() {
        try {
            super.getUint16();
        } catch(e100) {
        }
        return this;
    },
};
function F108(a110, a111, a112, a113) {
    if (!new.target) { throw 'must be called with new'; }
    a112.d = a113;
    this.f = a110;
}
const v114 = new F108(-4294967296, 5n, "-16", "-16");
new F108(-1, -7n, "-16", "global");
const v116 = new F108(-4294967296, 5n, "global", "global");
"-16" == v116;
if (-1) {
} else {
    function F121(a123, a124, a125) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a125;
    }
    const v126 = new F121(F121, v114, "function");
    const t91 = -1;
    new t91(v126, "global", "function");
    new F121(v126, "global", "function");
}
