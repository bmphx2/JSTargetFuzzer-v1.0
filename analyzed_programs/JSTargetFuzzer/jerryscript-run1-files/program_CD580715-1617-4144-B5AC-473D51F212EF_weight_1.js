new Uint32Array(1000);
const v5 = new Uint8ClampedArray(128);
new Float32Array(10);
function f9(a10, a11, a12) {
    const o18 = {
        set e(a14) {
            let v15 = "-9007199254740992";
            v15 ^= a14;
            var g = "function";
        },
        [a12]: a12,
        0: Uint32Array,
        "e": Float32Array,
        3: a12,
        "c": 128,
        __proto__: v5,
    };
    return o18;
}
f9(10, 10, 1000);
f9(128, 128, 1000);
f9(10, 10, 1000);
function f22() {
    const o28 = {
        __proto__: "-536870912",
        ..."-536870912",
        get f() {
            let [v26,v27] = this.n();
            return v26;
        },
    };
    return o28;
}
const v29 = f22();
const v30 = f22();
class C32 extends f22 {
    constructor(a34, a35, a36, a37) {
        const v39 = Symbol.iterator;
        const o48 = {
            [v39]() {
                let v41 = 10;
                const o47 = {
                    next() {
                        v41--;
                        const v45 = v41 == 0;
                        const o46 = {
                            "done": v45,
                            "value": v41,
                        };
                        return o46;
                    },
                };
                return o47;
            },
        };
        super();
        const o49 = {
            "construct": f22,
        };
        new Proxy(this, o49);
    }
}
const v52 = new C32();
if (!(v30 <= v52)) {
    let {"b":v54,"d":v55,} = C32;
}
9007199254740990 <= v29;
