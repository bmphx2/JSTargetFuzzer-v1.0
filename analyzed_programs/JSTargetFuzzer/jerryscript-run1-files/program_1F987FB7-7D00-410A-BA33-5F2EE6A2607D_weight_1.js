const v2 = new Int32Array(16);
const v5 = new Uint16Array(0);
new BigUint64Array(BigUint64Array);
new BigInt64Array(3080);
new Uint32Array(222);
const o17 = {
    get g() {
        return this;
    },
    set g(a16) {
    },
};
function f18(a19, a20) {
    const o45 = {
        get d() {
            super.b = this;
            const v23 = Array();
            const v25 = [Array];
            new Function(190);
            new BigUint64Array(BigUint64Array);
            const v31 = v23.forEach;
            for (let v32 = 0; v32 < 5; v32++) {
                const v33 = `
                    function F34(a36, a37) {
                        if (!new.target) { throw 'must be called with new'; }
                    }
                `;
                eval(v33);
            }
            Reflect.apply(v31, Array, v25);
            return v2;
        },
        "c": 0,
        __proto__: v5,
        m(a42, a43, a44) {
            return a44;
        },
        ...a19,
        ...Int32Array,
        "a": 0,
        "b": 222,
        "d": Uint32Array,
        2147483649: a19,
        ...a19,
    };
    return o45;
}
f18(Int32Array, 0);
f18(f18, 16);
f18(222, 222);
let v49 = 1000;
const v51 = ++v49;
Math.round(!v49 * v51);
