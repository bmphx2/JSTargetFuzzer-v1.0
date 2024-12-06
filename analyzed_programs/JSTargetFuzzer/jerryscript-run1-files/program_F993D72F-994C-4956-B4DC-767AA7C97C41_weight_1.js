const v0 = [];
function f1() {
    const o7 = {
        ...v0,
        "h": v0,
        [v0]: v0,
        set b(a3) {
            const v4 = [a3,v0,v0];
            [a3];
            [v0,v0,v0,v4,this];
        },
        "e": v0,
        "g": v0,
        "a": v0,
        "d": v0,
        "b": v0,
    };
    return o7;
}
const v8 = f1();
f1();
f1();
function f17() {
    return v8;
}
const v23 = new Array(10);
let v25 = 4096;
function f27(a28, a29, a30, a31) {
    const o41 = {
        "g": v25,
        ...a31,
        "e": a29,
        set b(a33) {
            function F34(a36, a37) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a36;
            }
            new F34(a31, 129);
            new F34(a30, a30);
            new F34(F34, 481111932);
        },
    };
    return o41;
}
let v42 = f27(v25, 10, 129, v23);
f27(10, 129, 10, f27);
const v44 = [-2.24874475395427];
([-314.51570379042937,2.65527411782465,-1e-15,-5.0,1000000000000.0,5.856735713146336e+307,0.4701091285172452]).copyWithin(v44, 987924842);
f27(v42, v25, 481111932, v25);
v42.g;
try {
    let v50;
    try { v50 = v42.isSealed(); } catch (e) {}
    v42 = v50;
    v25 = v50;
} catch(e51) {
    e51[0] = e51;
    try { e51(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
