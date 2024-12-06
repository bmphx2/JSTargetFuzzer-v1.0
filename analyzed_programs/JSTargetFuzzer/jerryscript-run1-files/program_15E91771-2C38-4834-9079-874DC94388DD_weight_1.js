function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4;
    function f3(a4) {
        return a4;
    }
    class C5 extends f3 {
    }
    const v7 = new Uint8Array(C5, Uint8Array);
    gc(v7);
    this.h = 4;
    this.g = 4;
}
new F0();
const v11 = new F0();
const v12 = new F0();
const v13 = [v12,v12,v11,F0,v11];
[v12,[v11]];
const v20 = [1.7976931348623157e+308,7.02634060333004e+307,1000000000000.0,1000000000000.0];
[0.0,38.96825788578781,-1.0,747891.951280386,1.0,5.0,-891891.5699286731,8.690234477758337e+307,-1000000.0,1.7565737905343692e+308];
[895371.6647131089,-2.2250738585072014e-308,-1000000000.0,-1.5924237147774814e+308,-1000000000.0,1e-15,0.7281904674550952,-7.366046068589284];
new BigUint64Array(108);
const v28 = new Int8Array(627);
const v31 = new BigUint64Array(64);
BigInt(1361);
let v40 = 2.2250738585072014e-308;
function F41() {
    if (!new.target) { throw 'must be called with new'; }
}
const v43 = new F41();
new F41(v20, 108);
const v45 = new F41();
const v48 = new Array(3565);
const v50 = new WeakSet();
function f54(a55, a56, a57, a58) {
    const o65 = {
        "g": v48,
        ["e"]: a55,
        __proto__: a55,
        valueOf(a60, a61) {
            const v62 = this != a60;
            try { a58(v62); } catch (e) {}
            a61.length += 6.387594296892118;
            return a55;
        },
        "c": a57,
    };
    return o65;
}
const v66 = f54("1176243804", v45, v45);
const v68 = f54("1176243804", v50, f54("d", v45, v45, v48, f54, v13), v66);
function f69(a70, a71) {
    const v72 = new f54(..."1176243804", ...a70, v43, ..."1176243804");
    typeof v72 === "function";
    v50[256];
    return a71;
}
f69("1176243804");
for (let v78 = 0; v78 < 5; v78++) {
    v68["p" | v78] = v78;
}
h = v40;
let v86 = 434742601;
v28.length = -13;
[v86,...v40] = v31;
try { v40(v86, -505.82829815177945, BigUint64Array, v28); } catch (e) {}
