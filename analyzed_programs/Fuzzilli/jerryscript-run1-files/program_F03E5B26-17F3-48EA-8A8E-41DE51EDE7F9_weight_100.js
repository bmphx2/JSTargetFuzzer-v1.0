const v0 = [];
const v11 = new Int32Array(730);
function f12(a13, a14) {
    let v15;
    try { v15 = a13(f12, v11); } catch (e) {}
    v11[a14] |= v15;
    return a13;
}
function f17(a18, a19) {
    const o28 = {
        __proto__: "prototype",
        [12](a21, a22) {
            v0.__proto__;
            const v24 = ("HjX")[8];
            a21["charCodeAt"](-256);
            let v27;
            try { v27 = new a22("prototype", "charCodeAt", a19, a18, v24); } catch (e) {}
            return v27;
        },
        "h": 12,
        "c": "f",
        ..."HjX",
        ["f"]: a19,
        "e": 21001,
    };
    return o28;
}
f17(21001, -4294967297);
f17(-256, -4294967297);
const v31 = `
    function F32(a34, a35) {
        if (!new.target) { throw 'must be called with new'; }
    }
`;
const v39 = [[1073741824,1073741824,1073741824],1073741824,true];
-v39;
f17(21001, 12);
const v42 = [];
let v43 = -1277864847;
function f45(a46) {
    const o62 = {
        "d": a46,
        [256]: v43,
        [a46]: a46,
        1528580923: a46,
        get f() {
            new Set();
            return f45;
        },
        "e": a46,
        "f": f12,
        "b": v11,
        __proto__: a46,
        [v39]: a46,
        "a": a46,
        "c": v43,
        /*
        __proto__: -43425,
        */
        set f(a51) {
            const t60 = -43425;
            t60[9] = this;
            v43 = -43425;
            const v55 = f45 >> -787419760;
            v55 && -787419760;
            v55 | v43;
        },
        ...v43,
        "b": a46,
        ...a46,
        4: a46,
        get f() {
            return 2147483648;
        },
    };
    return o62;
}
const v63 = f45(-43425);
function F64(a66, a67, a68, a69) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f45;
}
new F64(256, v63, v63, v63);
([v42])["includes"]([v42,v42], -600401249);
