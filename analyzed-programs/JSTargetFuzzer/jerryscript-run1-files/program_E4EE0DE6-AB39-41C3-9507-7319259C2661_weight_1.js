const v1 = new WeakMap();
const v2 = [WeakMap,v1];
const v3 = [v1,WeakMap,WeakMap,WeakMap];
const v4 = [v3,v2,v3,v3,v3];
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = v1;
}
new F8(v4, -1000000000000.0, -1000000000000.0);
new F8(v3, -5.734933404569773, 1.7976931348623157e+308);
new F8(v2, 1.7976931348623157e+308, -5.734933404569773);
new Uint32Array(49);
new Int32Array(5);
new Float64Array(1488);
class C28 {
    set e(a30) {
        const o31 = {
            "d": "c",
            "a": "h",
            "c": this,
            ..."c",
        };
        try { a30.getDate(this, "h", "c", o31); } catch (e) {}
    }
    get f() {
        const o40 = {
            valueOf() {
                new ReferenceError(ReferenceError);
                return "h";
            },
        };
        return this;
    }
}
new C28();
new C28();
new C28();
new Float32Array(1);
new Int32Array(3296);
const v55 = new Float32Array(10);
function f56() {
    return v55;
}
let v57 = 10;
for (; v57--;) {
    1073741824n instanceof Float32Array;
    v55.f = "-256";
}
