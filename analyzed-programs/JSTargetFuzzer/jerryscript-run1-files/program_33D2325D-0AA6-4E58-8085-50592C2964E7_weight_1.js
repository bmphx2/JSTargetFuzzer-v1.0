function f0() {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v3 = new F1();
    const v6 = new Uint8ClampedArray();
    const v7 = v6.__proto__;
    let v8;
    try { v8 = v3.o(); } catch (e) {}
    try { RegExp.call(v8, v3, v7); } catch (e) {}
    const o20 = {
        "c": v8,
        "a": v8,
        __proto__: "3xl",
        ["3xl"]: 991323944,
        "g": f0,
        [-2]: v8,
        "h": -2.2953479188220716e+306,
        toString(a14, a15) {
            let v16 = 0;
            do {
                a15[36] = 991323944;
                v16++;
            } while (v16 < 10)
            return 991323944;
        },
    };
    return o20;
}
f0();
f0();
f0();
Reflect.preventExtensions(([Reflect,Reflect,Reflect]).findIndex);
