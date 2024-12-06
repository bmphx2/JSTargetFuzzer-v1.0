const v0 = [0.9241990039507214,-1000000000.0,-1000000000.0,-0.0,1.2390784076236725e+308,0.49331482783146685];
const v1 = [-415333.2577483457,-2.9381451694130245,349.3549193077333,-125173.64104194858,-Infinity,-1000.0,940648.3296208968];
const v2 = [2.220446049250313e-16,78075.27600539802,-5.0,-2.220446049250313e-16,0.28413280097661087];
function f6() {
    return -4883;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -4883;
    this.g = v1;
    this.h = a9;
}
const v12 = new F7(v2, v0, -1036614135);
new F7(v0, v1, -1036614135);
new F7(v2, v1, 15);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    function F19(a21, a22) {
        if (!new.target) { throw 'must be called with new'; }
        this.a = -589293468;
        this.d = -589293468;
    }
    new F19(this, this);
    new F19(this, v2);
    new F19(v12, v1);
    this.a = -589293468;
}
const v26 = new F15();
const v27 = new F15();
const v28 = new F15();
let v30 = -937546.0274885385;
const v35 = [-1e-15,1000000.0,v30,v28];
const v36 = [1000000.0,-1e-15,v27,v35,-1e-15];
const v37 = [v28,v30,v28];
function f38(a39, a40) {
    const o54 = {
        "b": -1e-15,
        ...a40,
        [v37]: v27,
        __proto__: v27,
        "d": v28,
        "f": a40,
        [a39]: v35,
        set a(a42) {
            this.__proto__ = v36;
            v37[0.22410269410035233] = a39;
            const v44 = Symbol.iterator;
            const o53 = {
                [v44]() {
                    let v46 = 10;
                    const o52 = {
                        next() {
                            v46--;
                            const v50 = v46 == 0;
                            const o51 = {
                                "done": v50,
                                "value": v46,
                            };
                            return o51;
                        },
                    };
                    return o52;
                },
            };
        },
    };
    return o54;
}
f38(v37, v26);
f38(v37, v27);
const v57 = f38(v36, v37);
with (v28) {
    let v58 = a;
    let v60 = `rizPp${0.22410269410035233}number${v57}sticky${426.7417148362349}-29565${v58 || v58}atan2`;
    ({"length":v58,} = v60);
    v30 |= 426.7417148362349;
    let v63 = -9;
    Math.round(v63);
    const v66 = v60++;
    v63++;
    Math.fround(v66);
    Math.sign(v63);
    v63 || v60;
}
