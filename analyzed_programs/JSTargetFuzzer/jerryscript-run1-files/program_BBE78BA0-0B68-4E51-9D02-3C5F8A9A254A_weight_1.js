new Int16Array(512);
new Int16Array(127);
new Int16Array(14);
try {
    new ArrayBuffer(-13n);
} catch(e16) {
} finally {
}
let v19 = -1992735215;
function f20(a21, a22) {
    const o29 = {
        "d": 638957980,
        set b(a24) {
            let v25;
            try { v25 = a24(); } catch (e) {}
            v19 = a22;
            v25.valueOf = a24;
        },
        get c() {
            const v27 = [this];
            [545904634,a21,v27,this,v27];
            return 638957980;
        },
    };
    return o29;
}
f20(638957980, v19);
f20(v19, 545904634);
f20(v19, v19);
new Int32Array(249);
new Int32Array(2380);
const v40 = new Float32Array(3269);
v40[v40] = v40;
class C41 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C41();
