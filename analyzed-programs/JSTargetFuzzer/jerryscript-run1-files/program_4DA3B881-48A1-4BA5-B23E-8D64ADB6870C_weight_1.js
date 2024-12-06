function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 1073741823;
    this.d = 1073741823;
    this.b = 1073741823;
}
new F0();
new F0();
new F0();
new Uint8Array(3);
new Uint8Array(209);
new Float64Array(1716);
let v17 = -1992735215;
function f18(a19, a20) {
    const o28 = {
        "d": a19,
        set b(a22) {
            let v23;
            try { v23 = a22(a22, this); } catch (e) {}
            v17 = a20;
            v23.E = a22;
        },
        get c() {
            const v25 = [this];
            const v26 = [-31164,a19,v25,this,v25];
            [v26,a19,v26];
            return a20;
        },
    };
    return o28;
}
const v30 = new Uint8Array();
v30.__proto__;
for (let v32 = 0; v32 < 5; v32++) {
    v32 + "p";
}
f18(638957980, v17);
f18(v17, -31164);
const v40 = new ArrayBuffer(10);
new Int8Array(v40, 9);
f18(v17, v17);
const v46 = new Uint8Array();
try { v46.filter(v46, v46); } catch (e) {}
const v50 = new Int8Array(129);
try { v50.findIndex(Uint32Array); } catch (e) {}
new Int32Array(249);
new Int32Array(2380);
const v60 = new Float32Array(3269);
v60[v60] = v60;
class C62 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C62();
new C62();
new C62();
