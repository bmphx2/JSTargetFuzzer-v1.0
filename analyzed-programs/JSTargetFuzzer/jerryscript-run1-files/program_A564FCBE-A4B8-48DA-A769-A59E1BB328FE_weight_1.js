const v0 = [-38.9236448818333,110.51011326756088,591.1019950223422,5.0,4.0,1000000000000.0,-980495.4451098961,-1000000.0,0.0];
const v1 = [766.8546149078013,273563.2609089669];
const v2 = [1.2503205803842433e+308,-1000000000000.0,2.2250738585072014e-308,-2.220446049250313e-16,-1.7976931348623157e+308,NaN,1.7976931348623157e+308,-433.6249436444366];
[-30334,-2124737670,-1669886347,1024,-3,1073741824];
const v4 = [-9,-2147483649,-256,-128,10000,-1,-9223372036854775808,-4096,-1844877306,-7];
const v5 = [10,3898,744985004,4294967295];
function f6(a7, a8, a9) {
    const o21 = {
        4294967295: a7,
        n(a11, a12, a13, a14) {
            a14 - v4;
            (a12 ** a14) + v4;
            !-64460;
            return a14;
        },
        "h": v2,
        "e": v2,
        "f": v1,
        [-2]: a9,
        "b": v4,
    };
    return o21;
}
const v22 = f6(v5, v0, v1);
const v23 = f6(v0, v1, v2);
const v24 = f6(v4, v0, v1);
function f28(a29, a30, a31) {
    const o51 = {
        n(a33, a34, a35, a36) {
            v2[v22] = a36;
            let [] = a29;
            return 10;
        },
        set a(a41) {
            function f42(a43, a44, a45) {
                'use strict';
                try { a41.m(a45, a43); } catch (e) {}
                return a41;
            }
            f42(a41, a29, a31);
        },
    };
    return o51;
}
f28(f28(v23, v24, v24), v24, v24);
f28(v0, v22, v22);
function F55() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v58 = new F55();
const v59 = new F55();
const v60 = new F55();
let v62 = -937546.0274885385;
const v68 = [1000000.0,-1e-15,v59,[-1e-15,1000000.0,v62,v60],-1e-15];
const v69 = [v60,v62,v60];
function f70(a71, a72) {
    const o86 = {
        "b": -1e-15,
        ...a72,
        [v69]: v59,
        __proto__: v59,
        "d": v60,
        "f": a72,
        [a71]: v60,
        set a(a74) {
            this.__proto__ = v68;
            v69[0.22410269410035233] = a71;
            const v76 = Symbol.g;
            const o85 = {
                [v76]() {
                    let v78 = 10;
                    const o84 = {
                        next() {
                            v78--;
                            const v82 = v78 == 0;
                            const o83 = {
                                "done": v82,
                                "value": v78,
                            };
                            return o83;
                        },
                    };
                    return o84;
                },
            };
        },
    };
    return o86;
}
f70(v69, v58);
f70(v69, v59);
const v89 = f70(v68, v69);
with (v60) {
    let v90 = a;
    let v92 = `rizPp${0.22410269410035233}number${v89}sticky${426.7417148362349}-29565${v90 || v90}atan2`;
    ({"length":v90,} = v92);
    v62 |= 426.7417148362349;
    let v95 = -9;
    Math.round(v95);
    const v98 = v92++;
    v95++;
    Math.fround(v98);
    Math.sign(v95);
    v95 || v92;
}
