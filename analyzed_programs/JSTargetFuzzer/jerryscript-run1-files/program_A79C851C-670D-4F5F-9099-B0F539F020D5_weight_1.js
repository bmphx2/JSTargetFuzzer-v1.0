function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 16;
    const v5 = -this;
    this >> v5;
    const v7 = +this;
    v5 / v5;
    Math.ceil(v5);
    v7 << this;
}
const v11 = new F0();
const v12 = new F0();
const v13 = new F0();
const v14 = [v13,v11,v13,v13];
const v15 = [v12,v14,v11,F0,F0];
const v16 = [v13,v11,v13,v12];
function f17(a18, a19, a20, a21) {
    const o38 = {
        "a": a21,
        [v12]: v14,
        ...a20,
        __proto__: a19,
        n(a23, a24, a25, a26) {
            let v27;
            try { v27 = a23(a26, a20, a26); } catch (e) {}
            let v28;
            try { v28 = v27(v12, a25); } catch (e) {}
            a20[10] = v16;
            function F29(a31, a32, a33, a34) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = this;
                this.a = a31;
            }
            const v35 = new F29(a20, v15, a18, a23);
            const v36 = new F29(v14, a20, v35, a25);
            new F29(a25, v12, v36, v16);
            return v28;
        },
    };
    return a21;
}
f17(v16, v16, v14, v16);
f17(v14, v16, v14, v14);
const v41 = f17(v14, v16, v14, v16);
const v42 = [-16,4];
v41[105] = [-1124966260,9223372036854775807,9,-1022811835,14,-9223372036854775807,-954173599,592825194,-1892405619,4294967296];
const v44 = v42[2147483649];
const v45 = [2.0,-5.0,2.2250738585072014e-308,320342.6694939593,630.701147053501];
[786.5903730565019,-Infinity,774185.9905969736,0.02852472054540578];
[-1.7976931348623157e+308,-2.2250738585072014e-308,597472.9369675322,1.1610034257023322e+308,0.34445431181900066,3.5771649814729287e+307,2.0,3.0,4.0];
v45.g = v44;
v42.pop();
