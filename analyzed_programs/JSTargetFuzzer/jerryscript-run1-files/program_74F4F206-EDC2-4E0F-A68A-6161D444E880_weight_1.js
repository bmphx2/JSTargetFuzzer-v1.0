new Date();
function f5(a6, a7) {
    const o23 = {
        "a": Date,
        [a7](a9, a10, a11, a12) {
            return a6;
        },
        __proto__: "b",
        ...Date,
        n(a17, a18, a19) {
            const v20 = [a7 = a19];
            [a17,v20,"b"];
            [a7,v20];
            const t11 = "b";
            t11.toString = Date;
            return a19;
        },
    };
    return o23;
}
f5("b", "undefined");
f5("sB4", "undefined");
const v26 = f5("undefined", "sB4");
const v27 = [v26,"undefined"];
[[v26,v26]];
new Int16Array(255);
const v38 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f42(a43, a44) {
    const o57 = {
        174: a43,
        "h": v27,
        10: a43,
        3489459242: -1000000.0,
        __proto__: a43,
        "f": a43,
        "c": v38,
        65536: a43,
        "e": v38,
        set f(a46) {
            try { a46(Int16Array, a46, a46, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o57;
}
f42(5, 255);
const v59 = f42(255, 257);
f42(257, 255);
const v61 = new Uint8Array(257, 257, 255);
let v62;
try { v62 = v61.includes(v61); } catch (e) {}
Object.defineProperty(v59, 257, { enumerable: true, get: f42 });
for (let v63 = 0; v63 < 32; v63++) {
    v38["p" + v63] = v63;
}
v38[3];
try { v62["p"](Int16Array); } catch (e) {}
