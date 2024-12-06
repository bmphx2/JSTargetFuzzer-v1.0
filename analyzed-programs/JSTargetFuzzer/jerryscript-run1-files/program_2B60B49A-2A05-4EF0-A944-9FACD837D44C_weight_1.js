const v4 = new WeakMap();
function f5(a6) {
    const o18 = {
        1: f5,
        "e": a6,
        "f": "isExtensible",
        5: f5,
        3428: v4,
        ["isExtensible"]: v4,
        m(a8, a9, a10, a11) {
            let v12;
            try { v12 = a6(a10, a8, a9, a9, "isExtensible"); } catch (e) {}
            delete v4[v12];
            let v14 = 0;
            while (v14 < 5) {
                let [] = a6;
                super.d = v4;
                v14++;
            }
            return a10;
        },
    };
    return o18;
}
f5("257");
const v20 = f5("isExtensible");
f5("257");
const v24 = new Uint16Array(1922);
const v27 = new Int8Array(5);
for (const v28 of v27) {
    try { v28.valueOf(v27, v20); } catch (e) {}
}
("257")[-2];
try { v24.indexOf(5); } catch (e) {}
new Float64Array(4);
class C35 {
}
const v36 = new C35();
const v38 = v36[-583.1760893759623];
const v40 = [992.8042074437715,-53.22282882889647,-6.46888722357242,1000000.0,-9.792725739616209e+307,-2.0,0.6799536982439116,-605166.430039607];
try {
    new v38(4087n, 1071, ...v40);
} catch(e43) {
} finally {
}
