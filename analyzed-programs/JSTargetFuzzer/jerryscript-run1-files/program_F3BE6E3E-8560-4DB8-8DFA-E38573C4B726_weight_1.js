function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 4;
    this.a = 4;
    this.c = 4;
}
new F0();
new F0();
const v5 = new F0();
[1e-15,-1e-15,1.0,-2.2285477259456954,-4.0,0.08226325800677203,-436.8139058831031,8.84282219568883e+307];
[3.0,0.5934895954141893,1e-15];
[1000000000000.0,2.1327215788173604,-2.2250738585072014e-308,-713.5227098313153,-1000000000000.0,6.377797231126465,0.30417804749945654,-1.7976931348623157e+308,0.0];
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
new F13();
const v17 = new F13();
let v18 = new F13();
let v20 = -937546.0274885385;
const v25 = [-1e-15,1000000.0,v20,v18];
const v26 = [1000000.0,-1e-15,v17,v25,-1e-15];
const v27 = [v18,v20,v18];
function f28(a29, a30) {
    const o44 = {
        "b": -1e-15,
        ...a30,
        [v27]: v17,
        __proto__: v17,
        "d": v18,
        "f": f28,
        [a29]: v25,
        set a(a32) {
            this.__proto__ = v26;
            v27[0.22410269410035233] = a29;
            const v34 = Symbol.iterator;
            const o43 = {
                [v34]() {
                    const o42 = {
                        next() {
                            v18--;
                            const v40 = 10 == 0;
                            const o41 = {
                                "done": v40,
                                "value": 10,
                            };
                            return o41;
                        },
                    };
                    return o42;
                },
            };
        },
    };
    return o44;
}
f28(v27, v5);
f28(v27, v17);
const v47 = f28(v26, v27);
with (v18) {
    let v48 = a;
    const v49 = v48 || v48;
    let v50 = `rizPp${0.22410269410035233}number${v47}sticky${426.7417148362349}-29565${v49}atan2`;
    ({"length":v48,} = v49);
    v20 |= 426.7417148362349;
    let v53 = -9;
    Math.round(v53);
    const v56 = v50++;
    v53++;
    Math.fround(v56);
    Math.sign(v53);
    v53 || v50;
}
