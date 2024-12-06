function f0() {
}
const v3 = new Array(256);
function f4() {
    return v3;
}
function f5(a6, a7) {
    const o19 = {
        __proto__: a6,
        set c(a9) {
            Array(a6);
            for (let v11 = 0; v11 < 32; v11++) {
                continue;
                let v12;
                try { v12 = this.toString(v11); } catch (e) {}
                const v14 = [v12,f0,this];
                Reflect.apply(Array.from, Array, v14);
                Array["p" + v11] = v11;
            }
        },
        65535: 256,
        2139841936: f5,
        "e": Array,
        "g": a7,
        "h": f4,
        "a": f4,
        [f4]: a6,
    };
    return o19;
}
f5(v3, f4);
f5(f5, v3);
f5(f0, f4);
const v28 = new Uint16Array(925);
const v32 = new Int8Array(256);
v32[v32] >>>= 223;
v28.set(v32);
const o34 = {
    ...v32,
};
