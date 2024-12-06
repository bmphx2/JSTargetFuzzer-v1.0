function f1() {
    const o17 = {
        [false]: false,
        ...false,
        "f": false,
        "b": false,
        "a": false,
        "d": false,
        toString() {
            class C6 {
                [127];
                [-1];
                [-65535];
                [512] = 127;
            }
            let v10 = 0;
            v10++;
            function f12() {
            }
            ArrayBuffer["isView"]();
            let v16;
            try {
            const t0 = "18371";
            v16 = new t0();
            } catch (e) {}
            return v16;
        },
    };
    return o17;
}
const v18 = f1();
f1();
const v20 = f1();
Number.NaN = 23462;
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    let v31 = 0;
    while ((() => {
            const v33 = v31 < 8;
            new Uint32Array(8, 8, a29);
            return v33;
        })()) {
        v31++;
    }
}
new Set();
function F39(a41, a42) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -6102;
    this.d = a42;
}
new F39(v18, -6102);
const v44 = new F39(v20, 245482198);
new F39(v44, 245482198);
const o47 = {
    "a": "0UMeB",
};
const v48 = [34303,13,-65537,128,-9007199254740992,-9223372036854775808,-2147483647];
function f49(a50, a51, a52) {
    const o54 = {
        ...a52,
        get a() {
            return o47;
        },
    };
    return a50;
}
f49(f49, v48, o47);
v48.pop();
