function f7(a8, a9, a10, a11) {
    const o23 = {
        __proto__: 10,
        set c(a13) {
            Object.defineProperty(this, "e", { writable: true, value: a13 });
            const v14 = this == 64;
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a17;
            }
            const v20 = new F15(true, a13, 64);
            new F15(a13, 64, v14);
            new F15(v20, -29618, 10);
        },
    };
    return o23;
}
const v24 = f7(true, true, 15595, -29618);
f7(v24, v24, 15595, -43363);
f7(-29618, -43363, -43363, 10);
0.9637831412122093 > 4294967296n;
