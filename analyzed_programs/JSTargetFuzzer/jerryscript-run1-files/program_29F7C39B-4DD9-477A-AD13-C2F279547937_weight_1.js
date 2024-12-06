const v0 = [2,7];
let v1 = [8,2147483647,4096,536870912,268435440,-14413,4294967297];
const v2 = [9,6,-4294967296,257,1,244455543,1,-1546153434];
function f3(a4, a5) {
    const o12 = {
        get g() {
            try { this.valueOf(this, this, a4, v0, this); } catch (e) {}
            v1 = v2;
            return a4;
        },
        set g(a9) {
            try {
                super.add(a9, this, this);
            } catch(e11) {
            }
        },
    };
    return o12;
}
const v13 = f3(v1, v0);
let v14 = f3(v0, v13);
const v15 = f3(v0, f3);
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a20;
    v14 = v15;
    const v23 = Symbol.iterator;
    const o32 = {
        [v23]() {
            let v25 = 10;
            const o31 = {
                next() {
                    v25--;
                    const v29 = v25 == 0;
                    const o30 = {
                        "done": v29,
                        "value": v25,
                    };
                    return o30;
                },
            };
            return o31;
        },
    };
    this.g = a21;
}
const v33 = new F16(v14, v0, v2, v1);
new F16(v33, v2, v0, v1);
const v35 = new F16(v33, v1, v0, v2);
let v37 = -1;
const v39 = [v37,999197796,v37,999197796,999197796];
let v40 = [v37,v39,-1491302985,v39];
[v40,v40];
class C45 {
    valueOf(a47, a48) {
        let v49;
        try { v49 = new a48(a47, -1491302985, this); } catch (e) {}
        ({"b":v40,"e":a47,} = v49);
        this[512] = 512;
        return a47;
    }
    static n(a51, a52, a53, a54) {
        try {
            super.p();
        } catch(e56) {
        }
        return this;
    }
}
const v57 = new C45();
new C45();
const v59 = new C45();
const v60 = v14 / v13;
try { v40(); } catch (e) {}
let v64 = 2.0;
Math.exp(v64);
let v66 = v64 << v60;
Math.random();
Math.pow(v66, -2147483647);
Math.cos(v60);
v64 >>> v66;
--v64;
const v72 = -1491302985 >>> v37;
-1491302985 == f3;
v66 = v64;
v37 >>= v72;
async function f77(a78, a79) {
    this | a78;
    const o86 = {
        get h() {
            let v84 = this;
            ++v84;
            return C45;
        },
        [F16]: f77,
        "maxByteLength": 10000,
    };
    const v88 = new ArrayBuffer(8, o86);
    new DataView(v88);
    await 512;
    return v35;
}
const v92 = f77(v59, 1403512483);
delete v57[250];
v92[-1491302985];
