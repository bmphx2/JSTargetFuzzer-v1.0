function f0() {
    const o18 = {
        ...f0,
        ..."setPrototypeOf",
        [0.1886655693247793]: 0.1886655693247793,
        ..."setPrototypeOf",
        [536870887]: 0.1886655693247793,
        set d(a5) {
            try {
                super.valueOf(536870887, a5, a5, a5);
            } catch(e7) {
            }
            super.g;
            function F9(a11, a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a11;
            }
            const v15 = new F9(this, this, F9, "setPrototypeOf");
            const v16 = new f0(F9, this, this, this);
            new F9(v16, "setPrototypeOf", v15, v16);
        },
    };
    return o18;
}
f0();
f0();
const v21 = f0();
new Int8Array(256);
new Uint32Array(256);
new Uint16Array(7);
const v34 = [];
const v35 = [v34,v34];
const v36 = [v21,v35];
[v35,v36,v35,v36,v35];
function* f47(a48, a49) {
    function f50(a51, a52, a53, a54) {
        Object.defineProperty(v35, 1, { enumerable: true, value: -2.2250738585072014e-308 });
        a54[8] |= 4.0;
        return v36;
    }
    v36();
    yield f50;
    return 39366;
}
f47(v36, 39366);
