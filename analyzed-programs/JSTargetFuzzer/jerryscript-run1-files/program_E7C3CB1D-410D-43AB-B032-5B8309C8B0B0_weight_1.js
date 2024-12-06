function f0() {
}
function f1() {
    const o9 = {
        get g() {
            this[f0] *= -4294967297;
            return 4294967296;
        },
        __proto__: f0,
        "c": f0,
        ...f0,
        "b": f0,
        "e": f0,
    };
    return o9;
}
f1();
const v11 = f1();
const v12 = f1();
function F16(a18, a19, a20, a21) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v11;
    this.c = a21;
    this.f = a21;
}
const v22 = new F16(1.7976931348623157e+308, -5.0, -5.0, 1.7976931348623157e+308);
new F16(v22, 1000.0, v11, 1000.0);
const v24 = new F16(-5.0, -5.0, F16, -5.0);
[v22,v24];
[F16,[1000.0,f1,v11],1000.0,-5.0,v12];
[1073741823,-16,15,4096];
const v29 = [9007199254740992,2986,-2132228841,-2];
const v30 = [1374742841];
function f32(a33, a34, a35) {
    arguments.callee;
    return arguments;
}
f32(f32, v29, f32, f32, v30);
let v46 = -1;
const v48 = [v46,999197796,v46,999197796,999197796];
let v49 = [v46,v48,-1491302985,v48];
[v49,v49];
class C54 {
    valueOf(a56, a57) {
        let v58;
        try { v58 = new a57(a56, -1491302985, this); } catch (e) {}
        ({"b":v49,"e":a56,} = v58);
        this[512] = 512;
        return a56;
    }
    static n(a60, a61, a62, a63) {
        try {
            super.p();
        } catch(e65) {
        }
        return this;
    }
}
const v66 = new C54();
new C54();
const v68 = new C54();
v46 >>= -1491302985 >>> v46;
async function f70(a71, a72) {
    g = 999197796;
    Math.round(-1.2063160811879037);
    a71 /= C54;
    await 512;
    RangeError();
    return C54;
}
const v83 = f70(v68, 1403512483);
delete v66[250];
v83[-1491302985];
