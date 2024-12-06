function f0() {
}
class C3 extends f0 {
    constructor(a5, a6, a7) {
        super();
        this.__proto__ = f0;
    }
}
function f9(a10, a11) {
    const o17 = {
        "h": a11,
        "f": a10,
        "a": a10,
        set g(a13) {
        },
        ...f9,
        "g": a10,
    };
    return o17;
}
f9(1, 769745652);
f9(1, 1);
f9(769745652, 1);
function f21() {
    return f9;
}
const v30 = new Uint8Array(1000);
const v33 = new Int16Array(1000);
new Function(16);
new Float32Array(1);
const v42 = new Uint8Array(1);
new Uint8Array(2);
for (let v46 = 0; v46 < 32; v46++) {
    v33["p" + v46] = v46;
}
f = v42;
const t36 = "valueOf";
t36[-65537] = v30;
