function f0() {
    const v4 = [1254864022,-59400];
    class C6 {
    }
    const v7 = new C6();
    class C8 extends C6 {
        constructor(a10, a11, a12) {
            super();
            const v14 = [a12];
            Reflect.apply(a10.copyWithin, a12, v14);
        }
    }
    new C8(v4, v7, Infinity);
    const o25 = {
        "h": "asUintN",
        ..."asUintN",
        "g": 536870887,
        __proto__: "asUintN",
        get b() {
            for (let v19 = 0; v19 < 32; v19++) {
                const t20 = "asUintN";
                t20["p" + v19] = v19;
            }
            return 1.7976931348623157e+308;
        },
    };
    return o25;
}
const v26 = f0();
const v27 = f0();
const v28 = f0();
function f35(a36, a37) {
    const o53 = {
        set e(a39) {
            let {"b":v40,"c":v41,"g":v42,} = v26;
        },
        __proto__: v28,
        "d": -5,
        toString(a44, a45) {
            Object.defineProperty(a37, a45, { writable: true, set: f0 });
            f0();
            return a37;
        },
        valueOf(a48, a49, a50) {
            const v51 = a49.g;
            Object.defineProperty(a37, a49, { writable: true, get: f0, set: f0 });
            [] = v51;
            var h = a37;
            return a48[3468];
        },
    };
    return o53;
}
f35(-2147483649, v27);
f35(2, v26);
f35(7, v28);
new Array(127);
const v63 = new ArrayBuffer(10);
new Int8Array(v63, 9);
