function f0() {
}
function f1() {
    const o4 = {
        "g": f0,
        __proto__: f0,
        "f": f0,
        [f0]() {
            function f3() {
                return f3;
            }
            this[115] = f3;
            return this;
        },
    };
    return o4;
}
f1();
f1();
f0();
new Float32Array(3);
new Float64Array(Float64Array);
new Int32Array(16);
const v21 = new Date();
v21.setSeconds();
