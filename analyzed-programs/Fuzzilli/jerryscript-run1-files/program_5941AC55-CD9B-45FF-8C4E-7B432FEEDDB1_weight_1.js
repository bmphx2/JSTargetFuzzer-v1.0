function f0() {
    const o9 = {
        "f": "1",
        "b": 12,
        __proto__: "838224280",
        "d": "838224280",
        get c() {
            let v4 = this;
            v4 -= v4;
            class C5 {
                #g;
                static e = v4;
            }
            new C5();
            new C5();
            new C5();
            return v4;
        },
    };
    return o9;
}
const v10 = f0();
f0();
f0();
const v18 = new Int8Array(200);
new Float32Array(5);
new Uint32Array(16);
const v25 = [268435440];
[-9223372036854775808];
[7,-1073741824];
v10.b = v18;
const v28 = (a29, a30) => {
    Object.defineProperty(v25, 10, { configurable: true, get: f0 });
    return a29;
};
new Int8Array(953);
new Int16Array(4096);
new Uint8ClampedArray(7);
