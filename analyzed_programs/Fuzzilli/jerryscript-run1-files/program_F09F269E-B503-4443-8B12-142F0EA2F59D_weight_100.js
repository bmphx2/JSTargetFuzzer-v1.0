function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = [536870889,3,36003,9007199254740990,-4294967297,16,3,-14];
    const v4 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
    const v5 = [-5,-42608,1,-61785];
    const v6 = [1694320064,1195474237,-22462];
    const v7 = [v4,v6];
    const v8 = [v7];
    function f9(a10, a11, a12, a13) {
        const o31 = {
            __proto__: v5,
            "d": v3,
            toString(a15, a16, a17) {
                v8[a16](a15, v6);
                const v21 = Symbol.iterator;
                const o30 = {
                    [v21]() {
                        let v23 = 10;
                        const o29 = {
                            next() {
                                v23--;
                                const v27 = v23 == 0;
                                const o28 = {
                                    "done": v27,
                                    "value": v23,
                                };
                                return o28;
                            },
                        };
                        return o29;
                    },
                };
                return a15;
            },
        };
        return o31;
    }
    f9(v5, v7, v3, v4);
    f9(v8, v7, v5, v3);
    this.a = 9007199254740991;
    const v34 = [-2096550278,-2147483647,12,1967976535,-709035125,901,268435440,16,4294967296];
    function F35(a37) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = v34;
        this.c = a37;
    }
    this.e = 9007199254740991;
    this.d = 9007199254740991;
}
new F0();
new F0();
const v40 = new F0();
const v47 = new F0(v40);
const v50 = new Float32Array(129);
v47[v50] = 2;
const o75 = {
    n(a59) {
        const v61 = [];
        try { new this(this, v61, this, v61, this); } catch (e) {}
        function f65(a66, a67) {
            const o68 = {
                10: 3661,
                "f": -754523.6315669246,
            };
            return o68;
        }
        for (let i70 = 0;
            (() => {
                for (let i = 0; i < 5; i++) {
                }
                return i70 === 1;
            })();
            (() => {
                super.a = 21001;
            })()) {
        }
        return this;
    },
};
