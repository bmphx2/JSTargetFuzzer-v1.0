const o12 = {
    valueOf() {
        for (let v9 = 0; v9 < 32; v9++) {
            this["p" + v9] = v9;
        }
        return -1073741824;
    },
};
const v21 = new Map();
function f22() {
    return f22;
}
for (let v23 = 0; v23 < 5; v23++) {
    Object.defineProperty(v21, 536870888, { enumerable: true, set: f22 });
}
function f24(a25, a26, a27) {
    const o28 = {
        44052009: -9007199254740990,
        "g": -1897163077,
        "c": -9007199254740990,
    };
    return o28;
}
f24(-1, "-15", 1.292111315530599e+308);
f24(-1073741824, "-15", -1000000000.0);
f24(-1897163077, "-15", -1000000000.0);
