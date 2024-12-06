const v0 = [-4294967297,-4096,-30549,-9007199254740991,10000];
const v1 = [-817443807,65535,4096,11];
const v2 = [-5384,-2018595599,256];
function f3(a4) {
    const o14 = {
        "f": v1,
        p(a6, a7) {
            let v5 = this;
            v5 ^= a6;
            try { a4["slice"](-8.743496641047535); } catch (e) {}
            a4 ** v5;
            return a7;
        },
        "h": a4,
        "a": a4,
        [a4]: v0,
    };
    return o14;
}
const v15 = f3(v1);
f3(v1);
f3(v0);
new Uint8Array(2123);
new Uint32Array(0);
const v27 = new Uint16Array(56);
v2["reduceRight"](..."reduceRight", v15, ..."reduceRight", 56, false);
for (let v33 of v27) {
    let v34;
    try { v34 = v1.some(f3, v33); } catch (e) {}
    v33 *= Uint32Array;
    v33 = v34;
    v33 = Uint16Array;
}
