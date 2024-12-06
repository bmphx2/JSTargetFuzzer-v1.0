function f0() {
}
function f1() {
    const o16 = {
        "g": f0,
        set d(a3) {
            const v4 = super.f;
            super.c = v4;
            try { v4(f0, ...v4, f0, a3, v4, v4); } catch (e) {}
        },
        valueOf() {
            let v6 = this;
            delete v6[v6];
            let v8;
            try { v8 = v6.valueOf(); } catch (e) {}
            v8.__proto__ = v6;
            v6 || v6;
            v6++;
            -v6;
            1073741825 / 1073741825;
            return ~1073741825;
        },
    };
    return o16;
}
const v17 = f1();
const v18 = f1();
const v19 = f1();
function f20() {
    return v19;
}
const v23 = new Float64Array(1442);
Object.defineProperty(v17, v18, { enumerable: true, set: f1 });
v23.d = 602;
const v25 = v17.d;
try { v18.valueOf(602); } catch (e) {}
[6,1,6,11148,-9223372036854775808,9,512];
const v28 = [7,-1024,4096];
[2,-65536,7,-50104,2147483647,-11,268435440];
v28[7] = v25;
!f20;
new Float32Array(602);
new BigInt64Array(64);
let v39 = [-29049,-2147483647,2147483648,-261208865,0,-9,11];
const v40 = [6,17590];
[-658853788,-256];
let v46 = BigUint64Array;
const v47 = new v46(12);
const v50 = new Uint32Array(v40);
new Uint8Array(v50);
let v55;
try { v55 = v39(-4294967295); } catch (e) {}
({"buffer":v39,"d":v46,"g":v55,...v55} = v47);
const o56 = {
};
const v58 = new Proxy(v50, o56);
const v62 = Symbol.toPrimitive;
const o66 = {
    [v62]() {
        try {
            super.getUint16();
        } catch(e65) {
        }
        return this;
    },
};
Math.tanh(!(-3.0 | -1407));
function F79(a81, a82, a83, a84) {
    if (!new.target) { throw 'must be called with new'; }
    a83.d = "function";
    const v85 = v55 != v58;
    if (v85) {
        Symbol[Symbol.match] = v85;
    } else {
        v46 >>= "boolean";
        try { v40.join(a83); } catch (e) {}
    }
    this.f = a81;
}
const v89 = new F79(-4294967296, 5n, "-16", "-16");
new F79(-1, -7n, "-16", "global");
const v91 = new F79(-4294967296, 5n, "global", "global");
"-16" == v91;
if (-1) {
} else {
    function F96(a98, a99, a100) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a100;
    }
    const v101 = new F96(F96, v89, "function");
    const t90 = -1;
    new t90(v101, "global", "function");
    new F96(v101, "global", "function");
}
