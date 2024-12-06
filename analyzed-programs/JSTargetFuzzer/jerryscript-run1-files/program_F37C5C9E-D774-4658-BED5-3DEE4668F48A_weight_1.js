function f0() {
    const o11 = {
        "d": 1606693253,
        "f": -2147483648,
        "c": f0,
        5: 65537,
        get a() {
            return 26901;
        },
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
function f15(a16) {
    const o17 = {
        "e": f0,
        "d": v12,
        __proto__: v12,
        "f": a16,
        [a16]: v14,
        "c": v13,
        [v14]: v12,
        "a": a16,
        "b": f0,
        2814: v12,
        "h": v14,
        "g": v13,
        5: f0,
        [v13]: a16,
        8: v14,
        256: f0,
    };
    return o17;
}
const v18 = f15(v12);
f15(v13);
const v20 = f15(v12);
const v26 = new Int16Array(255);
const v29 = new Uint8Array(5);
const v32 = new Uint8ClampedArray(257, Uint8ClampedArray);
function f33(a34, a35) {
    const o52 = {
        174: a34,
        "d": a34,
        "h": a35,
        "b": v26,
        8: a34,
        [v26]: a35,
        "c": v29,
        65536: a34,
        "f": v29,
        set f(a37) {
            try { a37(Int16Array, a37, a37, this); } catch (e) {}
            const v41 = new Uint8ClampedArray(2);
            const v45 = [257,a34];
            v18.g = Reflect.apply(v32.subarray, v41, v45);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o52;
}
f33(5, 255);
const v54 = f33(255, 257);
f33(257, 255);
const v56 = new Uint8Array(257, 257, 255, v20, f33);
let v57;
try { v57 = v56.includes(v56); } catch (e) {}
Object.defineProperty(v54, 257, { enumerable: true, get: f33 });
for (let v58 = 0; v58 < 32; v58++) {
    v29["p" / v58] = v58;
}
v29[3];
try { v57["p"](Int16Array); } catch (e) {}
