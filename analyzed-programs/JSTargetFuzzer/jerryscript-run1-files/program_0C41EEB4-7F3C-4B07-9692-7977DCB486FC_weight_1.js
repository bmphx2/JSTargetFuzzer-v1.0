function f0() {
    const o11 = {
        __proto__: 12,
        ...-170367396,
        "f": -170367396,
        [12]: 12,
        set c(a5) {
            let v6 = 0;
            do {
                try { a5(v6, a5, this, v6); } catch (e) {}
                v6++;
            } while (v6 < 2)
        },
    };
    return o11;
}
f0();
f0();
const v14 = f0();
const v16 = new WeakSet();
const v17 = [v14,f0];
const v18 = [f0];
const v19 = [v18,v18,f0];
function f20(a21, a22, a23, a24) {
    const o43 = {
        "d": a23,
        "e": v14,
        set f(a26) {
            super.a;
            a26 >>= a23;
        },
        set g(a29) {
            a29[10] = a23;
            Math.log10(6);
            Math.fround(6);
            a29++;
            let v35 = a29 ^ 6;
            -a29;
            ++v35;
        },
        ...a23,
        "h": a21,
        "f": a21,
        [v17](a39, a40, a41, a42) {
            super.a = f0;
            return a39;
        },
        ...v17,
        "g": a22,
        "b": v17,
    };
    return o43;
}
f20(v16, v19, v19, v18);
f20(v17, v19, v17, v19);
f20(v17, v19, v17, v18);
function f47() {
    return f47;
}
const o48 = {
    ...f47,
    ...f47,
};
