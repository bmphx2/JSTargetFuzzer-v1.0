class C3 {
    constructor(a5, a6) {
        try { this.lastIndexOf(); } catch (e) {}
        this.f;
    }
    static toString(a10) {
        super.c;
        const v13 = Symbol.iterator;
        const o22 = {
            [v13]() {
                let v15 = 10;
                const o21 = {
                    next() {
                        v15--;
                        const v19 = v15 == 0;
                        const o20 = {
                            "done": v19,
                            "f": v15,
                        };
                        return o20;
                    },
                };
                return o21;
            },
        };
        return 4294967297;
    }
}
new C3(-1024, 4294967297);
new C3(28826, 28826);
new C3(-1024, 28826);
function f29() {
    return "min";
}
function F30(a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a33;
    this.callee = "min";
}
new F30(-1024, F30, 4294967297);
new F30(4294967297, "1", F30);
new F30(-1024, "name", "1");
("qk").toUpperCase();
