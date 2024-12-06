function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 9;
    this.a = 9;
}
new F0();
new F0();
const v5 = new F0();
function f6() {
    return v5;
}
new Uint32Array(204);
new Int32Array(14);
new Uint8Array(16);
new Map();
const v24 = [1254864022,-59400];
class C26 {
}
const v27 = new C26();
class C28 extends C26 {
    constructor(a30, a31, a32) {
        super();
        const v34 = [a32];
        const v35 = a30.copyWithin;
        function f39() {
            return 9007199254740991;
        }
        Reflect.apply(v35, a32, v34);
    }
}
new C28(v24, v27, Infinity);
