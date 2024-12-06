function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = "isFinite";
    this.d = a5;
}
const v7 = new F3("isFinite", "boolean");
const v8 = new F3("multiline", "boolean");
new F3("multiline", "boolean");
let v10 = 0.01940745976026159;
class C13 {
    [0.0];
    static 255;
    constructor(a15, a16, a17, a18) {
        v10 = delete a16?.length;
        -1.7976931348623157e+308 < a16 ? -1.7976931348623157e+308 : a16;
    }
    14;
    #d = "multiline";
    a = F3;
    static c;
}
const v22 = new C13("boolean", "boolean", v7, v10);
let v23 = new C13(v22, "boolean", v8, "isFinite");
const v24 = new C13(F3, "isFinite", v8, "multiline");
async function* f25(a26, a27, a28) {
    function f29(a30, a31) {
        v23 ^= v23;
        return a28;
    }
    f29(v23, "multiline");
    yield await f29;
    return a27;
}
f25(v10, v24, v8);
