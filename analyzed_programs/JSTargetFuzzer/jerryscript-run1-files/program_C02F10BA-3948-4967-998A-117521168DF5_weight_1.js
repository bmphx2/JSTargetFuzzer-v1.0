function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 9007199254740990;
    this.b = 9007199254740990;
}
const v3 = new F0();
new F0();
let v5 = 0;
while (v5 < 8) {
    +F0;
    v5++;
}
const v10 = new F0();
function* f15(a16, a17) {
    function f18() {
        return "string";
    }
    yield a16;
    return f18;
}
f15("4", v5);
let v22 = 64;
const v26 = ["object",Symbol.match];
function F27(a29) {
    if (!new.target) { throw 'must be called with new'; }
}
const v30 = new F27();
async function f31(a32, a33) {
    a32[v26] = a32;
    return a33;
}
f31(v30);
function f35(a36, a37, a38) {
    const o44 = {
        "d": F0,
        "f": F0,
        __proto__: "4",
        "g": "4",
        "e": 9223372036854775807,
        "b": f15,
        [v22]: a37,
        ..."object",
        "c": v26,
        [-1]: f15,
        "c": 536870888,
        "a": v3,
        [a38]: 536870888,
        [9223372036854775807](a40, a41, a42) {
            new F0(..."4", a37, ..."object", this, v22 = a42);
            return "string";
        },
        1073741824: v10,
        969: "4",
        "c": v10,
        "a": v10,
    };
    return o44;
}
f35("object", v10, "4");
f35("object", v10, "4");
f35("object", v3, "string");
this << Float32Array;
async function f51(a52, a53) {
    return 2131433545 instanceof 2131433545;
}
