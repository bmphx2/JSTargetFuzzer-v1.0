function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = -2147483647;
    this.c = -2147483647;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f9(a10, a11, a12, a13) {
    const o18 = {
        "d": 2147483648,
        __proto__: v4,
        "e": v4,
        "b": a11,
        "g": a11,
        [a11](a15, a16) {
            let v14 = this;
            v3[a13] = a15;
            a16 |= a10;
            v14++;
            return a11;
        },
        "a": a12,
    };
    return o18;
}
function f19(a20) {
    return 2147483648;
}
class C21 extends f19 {
    static [f9] = -2128732293;
    static b;
}
const v22 = f9(v3, 512, v3, -2128732293);
const v23 = f9(v4, 2147483648, v4, 2147483648);
const v24 = f9(v5, 2147483648, 2147483648, -2128732293);
const v34 = [363200799,-9007199254740991,-56326,9007199254740990,268435441,-65536,1073741825];
let v35 = [11,-2,-4096,268435440,5,-4294967296];
let v36 = [2147483648,-923715900];
let v37 = -748299649;
let v38 = 13636;
({"c":v38,"length":v35,...v36} = v35);
function f40() {
}
const v43 = new C21(255);
try { new BigUint64Array(...v43, BigUint64Array, ...v38); } catch (e) {}
function f45(a46, a47, a48, a49) {
    const o50 = {
        [C21]: f40,
    };
    return o50;
}
f45(v3, v24, 1, f45(f45(v4, v23, v35, v22), v22, 1916383691, v22));
v37 = v34[v34];
function f56(a57, a58) {
    a58(1300);
    return f56;
}
function f60(a61) {
    return a61;
}
class C62 extends f60 {
    static [-9223372036854775807];
    c;
}
