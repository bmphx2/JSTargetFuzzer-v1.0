function f0() {
    const o14 = {
        10: "f",
        "g": "valueOf",
        get b() {
            new Uint32Array(3);
            new Uint16Array(255);
            new BigUint64Array(6);
            return "f";
        },
    };
    const o15 = {
    };
    Reflect.setPrototypeOf(o15, o15);
    return o14;
}
f0();
f0();
f0();
new Int16Array(5);
new Int8Array(256);
new Uint8ClampedArray(77);
function f30(a31, a32) {
    for (let v33 = 0; v33 < 5; v33++) {
        const v34 = `
            function F35(a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
                typeof (3 > 1);
                let [,...v46] = ("lx").charAt(128);
            }
        `;
        eval(v34);
    }
    return a31;
}
f30(f30, f30);
