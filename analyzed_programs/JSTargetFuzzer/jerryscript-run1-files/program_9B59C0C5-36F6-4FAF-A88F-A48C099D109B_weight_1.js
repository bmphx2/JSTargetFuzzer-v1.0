function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
}
new F3(536870887);
new F3(-256);
new F3(536870887);
function f12() {
    return -65535;
}
let v15 = -1992735215;
function f16(a17, a18) {
    const o25 = {
        "d": a17,
        set b(a20) {
            let v21;
            try { v21 = a20(); } catch (e) {}
            v15 = a18;
            v21.valueOf = a20;
        },
        get c() {
            const v23 = [this];
            [545904634,a17,v23,this,v23];
            return 638957980;
        },
    };
    return o25;
}
f16(638957980, v15);
f16(v15, 545904634);
f16(v15, v15);
new Int32Array(249);
new Int32Array(2380);
const v36 = new Float32Array(3269);
v36[v36] = v36;
class C37 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C37();
new Array(5);
new Uint32Array(0);
new Uint8Array(256);
new Float32Array(1805);
function f54() {
    return 10000;
}
const v61 = -5534n >= -5534n;
const t48 = 10000;
t48[16] = 10000;
const v62 = 12n && v61;
try { v62.n(); } catch (e) {}
const v67 = -4294967295;
f54();
1 == 1 ? 1 : 1;
