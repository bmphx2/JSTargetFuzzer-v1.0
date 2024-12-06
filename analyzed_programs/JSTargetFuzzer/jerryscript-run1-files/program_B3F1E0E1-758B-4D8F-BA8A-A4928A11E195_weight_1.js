let v1 = new resourceName();
let v4 = 20826n;
class C5 extends resourceName {
    m(a7) {
        let v6 = this;
        v4 = -52477n;
        const v8 = v1.a;
        try { v8.valueOf(); } catch (e) {}
        Math.asin(v1);
        ++v1;
        Math.sin(v6);
        Math.ceil(v6);
        --v6;
        return a7;
    }
}
const v17 = new C5();
new C5();
new C5();
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v26 = new F23();
const v27 = new F23();
const v28 = new F23();
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
            v37[1000000.0] = a39;
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
const v55 = f38(v37, v26, v17);
f38(v37, v27);
const v57 = f38(v36, v37);
with (v28) {
    let v58 = a;
    let v60 = `rizPp${1000000.0}number${v57}sticky${426.7417148362349}-29565${v58 || v58}atan2`;
    ({"length":v58,} = v60);
    v30 |= 426.7417148362349;
    let v63 = -9;
    Math.round(v63);
    const v66 = v60++;
    v63++;
    Math.fround(v66);
    Math.sign(v63, v55);
    v63 || v60;
}
