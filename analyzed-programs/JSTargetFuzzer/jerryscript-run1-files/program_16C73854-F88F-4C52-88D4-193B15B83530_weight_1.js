function f3(a4, a5) {
    const o18 = {
        toString(a7, a8) {
            const o9 = {
            };
            const v11 = new Proxy(a4, o9);
            return v11;
        },
        __proto__: a4,
        [a4](a13) {
            class C14 {
                static [this] = this;
            }
            new C14();
            new C14();
            new C14();
            return a4;
        },
    };
    return a5;
}
const v19 = f3(257, 257);
f3(1000, 1000);
f3(v19, 257);
new Array(64);
const v30 = new Uint32Array(181);
let v32 = BigUint64Array;
let v33 = new v32(1);
let v34 = 253;
[v34,,v32,v33] = v30;
try { v32["abs"](181, v34, v32); } catch (e) {}
new Uint16Array(v34);
for (let i47 = 0; i47 < 2; i47++) {
    const v53 = new Function("x");
    v53.name;
}
Function();
