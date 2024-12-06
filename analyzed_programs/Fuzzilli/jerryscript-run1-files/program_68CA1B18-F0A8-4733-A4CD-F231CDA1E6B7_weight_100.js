function f0() {
}
function f1() {
    const o5 = {
        __proto__: f0,
        [f0]: f0,
        [f0]() {
            try {
                super.valueOf();
            } catch(e4) {
            }
            return this;
        },
        "h": f0,
        "b": f0,
        "g": f0,
        1024: f0,
    };
    return o5;
}
f1();
f1();
f1();
new Int16Array(0);
new Uint32Array(8);
new Int16Array(8);
new Map();
let v22 = 1.7976931348623157e+308;
v22++;
+(v22 + -20669);
