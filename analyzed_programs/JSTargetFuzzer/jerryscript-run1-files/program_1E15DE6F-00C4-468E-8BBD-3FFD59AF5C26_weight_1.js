function f3(a4, a5) {
    const o8 = {
        "g": -1,
        set d(a7) {
            this.__proto__ = a7;
        },
        __proto__: a4,
        [a5]: -1,
        1073741825: a4,
        ...a4,
        [-13]: a5,
        ...a5,
        [-2]: -1,
    };
    return o8;
}
const v9 = f3(-13, -1);
const v10 = f3(-13, -1);
f3(-13, 10);
function f12(a13, a14, a15) {
    const o18 = {
        get c() {
            return super.h;
        },
        ...a14,
        3519569726: 10,
        "e": a14,
        ...v9,
        "d": a14,
        __proto__: v9,
        "g": a13,
        "b": a14,
        "c": a14,
        [v10]: f3,
        [a14]: -13,
        255: a14,
    };
    return o18;
}
const v20 = f12(v10, 10, f12(v10, -1, v10));
f12(v20, -13, v20);
new WeakSet();
const o28 = {
};
("9").replace("9");
const v32 = new Int16Array(19);
const v35 = new Uint32Array(64);
new Int8Array(1700);
const o39 = {
};
const v41 = new Proxy(v35, o39);
let v43;
try { v43 = v41["valueOf"](Uint32Array, Uint32Array, v41, v35); } catch (e) {}
const v44 = [v43,-36134n,v43,Uint32Array];
[v41,1700,v44,v32,v44];
const v46 = [-65536n];
try { v43(v46); } catch (e) {}
