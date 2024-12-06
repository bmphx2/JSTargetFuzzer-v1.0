function f0() {
    const o14 = {
        "d": 4294967297,
        __proto__: 0.339479133266568,
        [0.339479133266568](a5) {
            try {
                super.sort(this);
            } catch(e13) {
            }
            return 7;
        },
        ...62579,
        [4294967297]: 0.339479133266568,
        64: 0.339479133266568,
        "a": 62579,
    };
    return o14;
}
const v15 = f0();
const v16 = f0();
const v17 = f0();
function F18(a20) {
    if (!new.target) { throw 'must be called with new'; }
    if (a20) {
        f0();
    } else {
        v17.d |= a20;
    }
    this.f = a20;
}
new f0(v16);
new F18(v15);
new F18(v15);
new Int16Array(10);
new Float32Array(5);
new Uint8Array(0);
function F34() {
    if (!new.target) { throw 'must be called with new'; }
    function f36(a37) {
        try { new a37(); } catch (e) {}
        return a37;
    }
    f36(F34);
}
const v41 = Symbol.iterator;
const o50 = {
    [v41]() {
        let v43 = 10;
        const o49 = {
            next() {
                v43--;
                v43 == 0;
                const o48 = {
                    "done": v43,
                    "value": v43,
                };
                return o48;
            },
        };
        return v15;
    },
};
new F34();
