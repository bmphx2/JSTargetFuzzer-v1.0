function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -4294967296;
    this.d = -4294967296;
    this.h = -4294967296;
}
new F0();
new F0();
new F0();
new Int16Array(1024);
new Float32Array(2);
new Uint16Array(1024);
class C21 {
    set e(a23) {
        const o24 = {
            "d": "c",
            "a": "h",
            "c": this,
            ..."c",
        };
        try { a23.getDate(this, "h", "c", o24); } catch (e) {}
    }
    get f() {
        const o31 = {
            valueOf() {
                return "h";
            },
        };
        return this;
    }
}
new C21(2, Float32Array);
new C21();
new C21();
new Float32Array(1);
new Int32Array(3296);
const v46 = new Float32Array(10);
function f47() {
    return v46;
}
let v48 = 10;
for (; v48--;) {
    1073741824n instanceof Float32Array;
    v46.f = "-256";
}
