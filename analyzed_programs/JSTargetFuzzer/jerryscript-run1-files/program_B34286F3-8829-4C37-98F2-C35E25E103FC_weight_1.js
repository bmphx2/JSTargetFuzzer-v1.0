function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v6 in a5) {
        try { new a5(F3, this, v6); } catch (e) {}
    }
    a5[1] = 268435440;
    this.e = a5;
    this.h = 268435440;
}
const v9 = new F3(268435440);
const v10 = new F3(268435440);
const v11 = new F3(-65537);
function F12(a14, a15, a16, a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -65537;
    this.f = a14;
    this.g = a14;
    const v21 = new F3(268435440);
    v21.h;
}
const v23 = new F12(10, v10, v11, v9);
new F12(268435440, v11, v10, v10);
const v25 = new F12(-65537, v9, v10, v9);
[3.0,Infinity,1000000000.0,2.83656612598479,-1.699309797054287,-1000.0,0.022958862950701597,95957.60192325199,-2.220446049250313e-16,5.0];
[0.08133523205330528];
[1.2266607629731148e+308,-0.278842983460148,1.389550775210875e+308,-1000000000.0,651541.7227589432];
const v34 = [2.95692866725288,-4.0];
[2.220446049250313e-16,1e-15];
let v36 = [0.7568855752280408,1000.0,1.7976931348623157e+308,91.96006725885854,-1000000.0];
v36 /= v36;
try { v34(v36, F12, v23, v25, v10); } catch (e) {}
let v38 = -1992735215;
function f39(a40, a41) {
    const o49 = {
        "d": a40,
        set b(a43) {
            let v44;
            try { v44 = a43(a43, this); } catch (e) {}
            v38 = a41;
            v44.valueOf = a43;
        },
        get c() {
            const v46 = [this];
            const v47 = [545904634,a40,v46,this,v46];
            [v47,a40,v47];
            return a41;
        },
    };
    return o49;
}
f39(638957980, v38);
f39(v38, 545904634);
f39(v38, v38);
new Int32Array(249);
new Int32Array(2380);
let v60 = 0;
while (v60 < 9) {
    const o63 = {
        "get": f39,
        "getPrototypeOf": f39,
        "preventExtensions": f39,
        "setPrototypeOf": f39,
    };
    new Proxy(v25, o63);
    v60++;
}
const v68 = new Float32Array(3269);
v68[v68] = v68;
class C70 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C70();
new C70();
new C70();
