function f3(a4) {
    const o11 = {
        ...a4,
        "h": 21597,
        "d": 9007199254740992,
        "a": 9007199254740992,
        "e": 9007199254740992,
        [a4](a6, a7) {
            const o8 = {
            };
            new Proxy(this, o8);
            return a4;
        },
    };
    return o11;
}
f3(9007199254740992);
const v13 = f3(129);
f3(9007199254740992);
class C15 extends f3 {
    toString(a17, a18, a19, a20) {
        const o23 = {
            "maxByteLength": 5,
        };
        const v25 = new SharedArrayBuffer(5, o23);
        new Float32Array(v25);
        return 5;
    }
}
new C15();
new C15();
new C15();
const v32 = [NaN,1000000000000.0,-1.7976931348623157e+308,4.0,-1.198308267484956,1.7064028347017238e+308,0.044668747173624346,92.3045873679855,1000000000000.0];
const v33 = [-8.067302531743689e+307,-4.716397555333698,-2.2250738585072014e-308,0.2045822296467411,1000.0,-646987.8616903792,469169.3226549153,-1000.0,337.9072237486639,-1.1279610285651766e+308];
function f34() {
    return v32;
}
class C35 extends f34 {
    [v33];
}
const v36 = new C35();
v36.push();
new BigUint64Array(21597);
const v42 = new Int8Array(627);
const v45 = new BigUint64Array(v13);
let v51 = 2.2250738585072014e-308;
h = v51;
let v57 = 434742601;
v42.length = -13;
[v57,...v51] = v45;
try { v51(v57, -505.82829815177945, BigUint64Array, v42); } catch (e) {}
