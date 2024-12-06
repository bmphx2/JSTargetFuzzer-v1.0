function f0() {
    const o11 = {
        8: "unscopables",
        "c": 1000000.0,
        ["unscopables"]: "unscopables",
        valueOf(a5, a6) {
            a6 /= a5 !== a6;
            return this;
        },
    };
    return o11;
}
const v12 = f0();
const v13 = f0();
const v14 = f0();
const v16 = v12 || f0;
v14[v12] = v13;
v16[v12] **= 65535;
function f22(a23, a24) {
    const o34 = {
        __proto__: v12,
        toString(a26, a27) {
            return this;
        },
    };
    return o34;
}
const v35 = f22(13, 65535);
const v36 = f22(65535, 65535);
f22(13, 65535);
function f38() {
}
function f39() {
    const o61 = {
        get g() {
            new f38();
            ("42655").trimRight();
            ([2.360868945411882,491.5638408183961,-0.0]).lastIndexOf(536870887, -1024);
            return f38;
        },
        "h": f38,
        m(a52, a53, a54, a55) {
            return typeof a55 === "object";
        },
        ...f38,
        "g": f38,
        p() {
            65535 == 65535;
            return 65535;
        },
        __proto__: v35,
        "a": f38,
        ...f38,
    };
    return o61;
}
f39();
const v63 = f39();
f39();
let v67 = Int32Array;
let v68 = new v67(4096);
const v71 = new Uint32Array(129);
let v74 = new Int16Array(512);
[,v67,v74,v68] = v74;
try { v35.toString(f38, v67, 65535, 4096); } catch (e) {}
try { v71.keys(); } catch (e) {}
f38();
v74.e = v36;
129 instanceof Uint32Array;
v63.g += 4096;
const v80 = Symbol.iterator;
const o89 = {
    [v80]() {
        let v82 = 10;
        const o88 = {
            next() {
                v82--;
                const v86 = v82 == 0;
                const o87 = {
                    "done": v86,
                    "value": v82,
                };
                return o87;
            },
        };
        return o88;
    },
};
