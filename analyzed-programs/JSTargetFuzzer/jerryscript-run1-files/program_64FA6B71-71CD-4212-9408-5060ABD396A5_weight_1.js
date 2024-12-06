function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 0;
    this.c = 0;
    this.f = 0;
    const o3 = {
        [0]: this,
    };
    function F4(a6) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a6;
        this.e = a6;
        this.f = this;
    }
    const v7 = new F4(0);
    new F4(v7);
    new F4(F0);
}
let v10 = new F0();
const v11 = new F0();
const v12 = new F0();
function f13() {
    const v14 = (a15) => {
        a15.length = 0;
        a15.h = 0;
        return f13;
    };
    return F0;
}
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a20;
    let v22 = [2.220446049250313e-16];
    class C24 {
        [v22];
        n(a26, a27, a28, a29) {
            ({"b":v22,"e":a26,} = this);
            a27 >>>= Set;
        }
    }
    new C24();
    [-9007199254740991n,[([-9007199254740991n,-9007199254740991n,-9007199254740991n]).length],[]];
}
typeof v10 === "symbol";
let v39 = [-9007199254740990,-9131,9747,-2147483648,-4294967297];
[-48952,1000,6,-39972,-61586,268435456,-2,-4096,10];
const v41 = [6,4,-6,257,1073741825,-12,10000];
const v42 = new F17(v10, F0);
const v43 = new F17(v42, F17);
new F17(f13, v43);
new Int16Array(255);
const v53 = new Uint8Array(5);
const v56 = new Uint8ClampedArray(257);
function f57(a58, a59) {
    const o81 = {
        174: a58,
        "c": v53,
        65536: a58,
        "e": v53,
        set f(a61) {
            let v62;
            try { v62 = a61(Int16Array, a61, a61, this); } catch (e) {}
            v10.__proto__ = this;
            v10 = v11;
            delete this[v12];
            v41.length = v62;
            v39 = a59;
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            let v71 = Int16Array;
            v56.byteLength = 16;
            Math.atan(v71);
            Math.atan(0.8894141648022945);
            v71++;
            Math.random();
            +0.8894141648022945;
            new v71(16);
        },
        "g": v12,
        [a59]: v43,
        "b": a59,
        [a58]: a58,
        "a": a59,
    };
    return o81;
}
f57(5, 255);
f57(255, 257);
const v84 = f57(257, 255);
const v85 = new Uint8Array(257, 257, 255);
let v86;
try { v86 = v85.includes(v85); } catch (e) {}
Object.defineProperty(v84, 257, { enumerable: true, get: f57 });
for (let v87 = 0; v87 < 32; v87++) {
    v53["p" + v87] = v87;
}
v53[3];
try { v86["p"](Int16Array); } catch (e) {}
