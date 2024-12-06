let v2 = 7;
function f3(a4, a5) {
    const o14 = {
        5: f3,
        "NaN": a4,
        "EPSILON": 1073741825,
        2027236136: 1073741825,
        get species() {
            let v7 = 0;
            while (v7 < 1073741824) {
                v2 = 1073741824;
                v7++;
            }
            return 1073741825;
        },
    };
    return o14;
}
f3(1073741825, 1073741824);
f3(1073741824, 1073741825);
f3(1073741825, v2);
const v26 = new RangeError(63913);
const v27 = v26[1];
v26[3] | v27;
