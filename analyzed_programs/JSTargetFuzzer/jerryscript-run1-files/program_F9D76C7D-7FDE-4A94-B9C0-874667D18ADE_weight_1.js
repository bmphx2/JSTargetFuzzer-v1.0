function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.search = -9007199254740992;
    this.g = -9007199254740992;
    this.b = -9007199254740992;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o22 = {
        "h": F0,
        __proto__: v3,
        "g": v4,
        ...v3,
        "e": a8,
        [v4](a10, a11, a12) {
            Math.cos(a11);
            +this;
            const v17 = -a12;
            this * -4294967295;
            Math.ceil(this);
            ++a11;
            !a11;
            return v17;
        },
    };
    return o22;
}
const v23 = f6(v4, v4);
const v24 = f6(v4, v5);
const v25 = f6(v4, v4);
const v26 = [v4,v24,v24,v25,v3,v5,v24,v25];
const v27 = [v3,F0];
const v28 = [v3,v3,F0];
function f29(a30, a31, a32, a33) {
    const o47 = {
        "f": a32,
        "b": v27,
        3: v25,
        [a31]: a30,
        get d() {
            try {
                super.o(this, v23);
            } catch(e36) {
            }
            return v4;
        },
        get c() {
            const v39 = new f6(F0, super.g);
            -916991238 & v39;
            Math.tan(-916991238);
            1073741823 && v39;
            v25.e;
            return a31;
        },
        [f6]: F0,
        [v24]: a30,
        "e": a32,
        "g": v23,
    };
    return o47;
}
f29(v28, v27, v23, f29(v27, v28, v23, v5, v5, v3), v28, v3, v25);
f29(v26, v28, v24, v4);
for (let i = 0; i < 5; i++) {
}
for (let i = 0; i < 5; i++) {
}
