const v1 = new WeakMap();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a4;
    this.f = a4;
}
const v5 = new F2(WeakMap);
new F2(v1);
new F2(v5);
new Int16Array(8);
const v13 = new Int16Array(2437);
new Float32Array(13);
const v17 = v13.constructor;
class C18 extends v17 {
    static #c;
    [v1];
    [v17] = v1;
}
const v19 = new C18();
typeof v19 === "object";
