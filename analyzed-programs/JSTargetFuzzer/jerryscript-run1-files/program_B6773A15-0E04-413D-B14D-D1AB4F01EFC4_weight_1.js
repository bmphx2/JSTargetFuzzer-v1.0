class C3 {
    h = 268435439;
    n(a5, a6) {
        function F7(a9, a10, a11) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = a6;
        }
        const v12 = new F7(a6, a6, a5);
        const v13 = new F7(this, 2.574854823600594e+307, v12);
        new F7(v13, v13, this);
        return NaN;
    }
    static b;
}
new C3();
const v16 = new C3();
new C3();
function f18() {
    return v16;
}
new Int16Array(255);
const v27 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f31(a32, a33) {
    const o46 = {
        174: a32,
        "c": v27,
        65536: a32,
        "e": v27,
        set f(a35) {
            try { a35(Int16Array, a35, a35, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(a33);
            new Int16Array(16);
        },
    };
    return o46;
}
f31(5, 255);
const v48 = f31(255, 257);
f31(257, 255);
const v50 = new Uint8Array(257, 257, 255);
let v51;
try { v51 = v50.includes(v50); } catch (e) {}
Object.defineProperty(v48, 257, { enumerable: true, get: f31 });
for (let v52 = 0; v52 < 32; v52++) {
    v27["p" + v52] = v52;
}
v27[3];
try { v51["p"](Int16Array); } catch (e) {}
