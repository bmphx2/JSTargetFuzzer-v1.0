[];
const v4 = (a5, a6, a7, a8) => {
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a7;
    }
    return v4;
};
[64,4294967296,5655,7,1860,536870912,52970];
[128,-23178,-536870912,-7,-53557,-24963,-24542,-604191956,961644050,801849823];
[-9007199254740991,-14030,-41019];
class C21 {
    static set b(a23) {
        const v25 = Symbol.iterator;
        const o36 = {
            [v25]() {
                let v27 = 10;
                const o35 = {
                    next() {
                        v27--;
                        const v31 = v27 == 0;
                        const o34 = {
                            "done": v31,
                            "construct": C21,
                            "f": 0,
                            p(a33) {
                                switch (v27) {
                                }
                                return a23;
                            },
                            "value": v27,
                        };
                        return o34;
                    },
                };
                return o35;
            },
        };
    }
}
new C21();
new C21();
new C21();
function f40() {
}
const v44 = [-1000000.0,f40,-807.6596022618603,-1000000.0];
const v45 = [v44,-1000000.0,0.014069366437978514,v44];
const v46 = [v45,f40,-807.6596022618603];
function* f50(a51, a52, a53, a54) {
    try { a53.padStart(a51, "object"); } catch (e) {}
    const o56 = {
        "construct": f40,
        "ownKeys": f40,
        "preventExtensions": f40,
    };
    new Proxy(v46, o56);
    yield* "object";
    return a51;
}
f50(-807.6596022618603, "U7O", "U7O", v45);
