function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 7;
    this.d = 7;
}
const v3 = new F0();
const v4 = new F0();
const v7 = new Object(3);
for (let v8 = 0; v8 < 5; v8++) {
    const v9 = `
        function f11(a12, a13, a14) {
            const o15 = {
                ...v4,
                __proto__: v7,
            };
            return o15;
        }
        f11(f11, 3, 3);
        const v17 = f11(v4, v8, 3);
        f11(v17, -65537, v17);
        let v19 = +-65537;
        v19++;
    `;
    eval(v9);
}
new F0();
function F24(a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = v3;
    this.h = v3;
}
new F24(v3);
new F24(v4);
new F24(v3);
new Int16Array(476);
const o35 = {
    0: v7,
};
const v39 = Object && Object;
let v40 = Object - Object;
Math.sqrt(v39);
Math.atan(v40);
++v40;
Object >>> Object;
new Uint8Array(2);
new BigUint64Array(3);
function F49() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -7;
    this.a = -7;
    this.f = -7;
}
const v52 = new F49();
("42655").trimRight();
try { v4.add(); } catch (e) {}
const v56 = [];
function f57(a58) {
    return v56;
}
const v59 = new F49();
const v60 = new F49();
function f61() {
    return v52;
}
function f62(a63) {
    const o83 = {
        [a63]: v59,
        m(a65, a66, a67, a68) {
            if (a66) {
                const v72 = -a66;
                v72 & 4001;
                4001 ^ v72;
            } else {
                for (let v75 = 0; v75 < 32; v75++) {
                    const v77 = "p" + v75;
                    class C78 {
                        valueOf(a80, a81) {
                            a81(a81);
                        }
                    }
                    a67[v77] = v75;
                }
            }
            return a65;
        },
    };
    return o83;
}
const v84 = f62(v60);
f62(v60);
f62(v84);
const v87 = [-1000000.0,1000.0,-5.540100498195459,-5.0,2.220446049250313e-16,1000000000000.0];
[0.5933077301169822,4.53564238653173,0.09718127795638731,2.220446049250313e-16,1000000000.0,0.12946129135091933];
const v89 = [-7.92607580612048e+306,-Infinity,9.046904697781734,1000000.0,NaN,59496.24991420959,-0.3385919249534126,1.0];
for (let v93 = 0; v93 < 32; v93++) {
    v87["p" + v93] = v93;
}
v87[9223372036854775807];
let {"a":v98,"length":v99,} = v89;
[f61,v60,v99,v98];
[v87];
[v87,v87];
