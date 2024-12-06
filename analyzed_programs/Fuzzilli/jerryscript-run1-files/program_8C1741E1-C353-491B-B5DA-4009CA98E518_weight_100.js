const v4 = new Date();
function f5() {
    return Date;
}
function f6(a7, a8, a9, a10) {
    const o16 = {
        "e": a8,
        "d": 1537331867,
        o(a12, a13) {
            try {
                super.setFloat32(v4, 2147483647, a13, this);
            } catch(e15) {
            }
            super.g = a8;
            return this;
        },
        "h": f5,
    };
    return o16;
}
const v17 = f6(2147483647, -2147483649, -2147483649, f6);
const v18 = f6(-2147483649, -2147483649, 1537331867, v4);
const v19 = f6(2147483647, 1537331867, -2147483649, v18);
function f20(a21, a22, a23, a24) {
    const o28 = {
        ...v18,
        get g() {
            let v25 = this;
            v25 = v17;
            try {
                super.m();
            } catch(e27) {
            }
            return v4;
        },
        [v17]: v18,
        2: 2147483647,
    };
    return o28;
}
const v29 = f20(2147483647, v19, 2147483647, Date);
const v30 = f20(1537331867, v17, -2147483649, v19);
const v31 = f20(1537331867, v17, 1537331867, v29);
try { v19.o(2147483647); } catch (e) {}
const v33 = 2147483647 << v4;
Object.defineProperty(v18, 1516021223, { value: f6 });
if (v18 === -2147483649) {
    const v35 = f6 ^ v19;
    let v36;
    try { v36 = v29.toString(v35, v35); } catch (e) {}
    function F37(a39, a40) {
        if (!new.target) { throw 'must be called with new'; }
        this.h = a40;
        this.b = v35;
    }
    new F37(v30, v33);
    new F37(v31, v35);
    new F37(v36, 1537331867);
} else {
    v4[134] = f6;
    for (let v44 = 0; v44 < 32; v44++) {
        Date["p" + v44] = v44;
    }
}
