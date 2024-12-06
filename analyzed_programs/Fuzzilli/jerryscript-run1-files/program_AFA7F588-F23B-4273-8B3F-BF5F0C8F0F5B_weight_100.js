class C6 {
    valueOf(a8, a9, a10, a11) {
        a11[3] = -256;
        let v12;
        try {
        const t0 = -843892068;
        v12 = t0(783278897, -256, 35308);
        } catch (e) {}
        try { v12.localeCompare(); } catch (e) {}
        return a10;
    }
    static 8 = -843892068;
    #valueOf(a15, a16, a17, a18) {
        const v19 = a17 % a15;
        this.d;
        return v19;
    }
}
const v21 = new C6();
const v22 = new C6();
const v23 = new C6();
function f24(a25, a26, a27) {
    const o40 = {
        p(a29, a30, a31) {
            function F32(a34, a35, a36) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = a31;
            }
            const v37 = new F32(v21, v21, a31);
            new F32(a26, v37, -256);
            new F32(a26, a29, -19144406);
            return a27;
        },
        ...v23,
        "d": v23,
        "a": a27,
    };
    return o40;
}
f24(v23, 35308, 783278897);
const v42 = f24(v23, v21, 783278897);
const v43 = f24(v22, C6, 9);
for (const v44 of v43) {
    --C6;
    v44?.c;
}
v43[783278897] = -19144406;
v42[35308];
const v52 = Symbol.iterator;
const o61 = {
    [v52]() {
        let v54 = 10;
        const o60 = {
            next() {
                v54--;
                const v58 = v54 == 0;
                const o59 = {
                    "done": v58,
                    "value": v54,
                };
                return o59;
            },
        };
        return o60;
    },
};
