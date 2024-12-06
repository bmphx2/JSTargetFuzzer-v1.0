const v1 = new Map();
class C2 {
    #a = Map;
    static [v1];
    constructor(a4) {
        function F5(a7) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a7;
        }
        new F5(a4);
        const v9 = new F5(a4);
        new F5(v9);
    }
    static h;
    a = Map;
}
const v11 = new C2(v1);
const v12 = new C2(C2);
const v13 = new C2(Map);
new Uint8Array(256);
new Float64Array(3997);
new Uint8ClampedArray(3180);
v12[8] = v12;
function f26(a27, a28, a29, a30) {
    return "25280";
}
const v34 = f26(v12, 9007199254740991, v11, v13);
v12[4096] = 3997;
function f35() {
    return v34;
}
