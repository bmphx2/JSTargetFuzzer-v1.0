const v1 = new Date();
const v2 = [v1,v1];
const v3 = [v1,v2,v1];
const v4 = [Date,v1,Date,v1,v1];
function f8(a9, a10, a11, a12) {
    const o23 = {
        "b": a12,
        "g": 1073741825n,
        ...v2,
        ...v3,
        [a10]: a11,
        "d": 1n,
        set c(a14) {
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = this;
                this.g = -29296n;
                this.e = this;
            }
            new F15(v1, a11, this);
            new F15(v4, 1073741825n, Date);
            new F15(this, 1n, v3);
        },
    };
    return o23;
}
f8(v1, 1n, 1n, v2);
f8(1n, 1n, 1n, f8(f8, 1n, 1073741825n, v3));
new Float32Array(3701);
const v35 = new Int32Array();
const v36 = new Int32Array();
function F37(a39) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v36;
    this.e = v35;
}
new Int32Array(6);
new Float32Array(0);
[-Infinity];
const o47 = {
    set a(a46) {
    },
};
for (let v48 = 0; v48 < 5; v48++) {
    o47.a;
}
[-6.568975937209441,1.0,-Infinity];
const v51 = [0.6730197545704021,2.220446049250313e-16,5.387745681974783,-7.304740854736329,89425.84876466752,1000000000.0,-1.785661314585028e+308];
const v52 = [13,9,-12559,-8,-4294967297];
let v53 = [65535,-1139741600];
new Uint8Array(v52);
let v56 = 44633;
const v57 = v53++;
let v58 = --v56;
function f59() {
    return f59;
}
([-8.370930286710454,7.183159495332482,2.2250738585072014e-308,-1000000000000.0,-255.6362008927648,-315.07126899047114,-1.4473359933311645e+308,0.776153163138491,787700.9653515914]).flatMap(TypeError, v51, 1n, f8);
--v58 * (v57 << v56);
