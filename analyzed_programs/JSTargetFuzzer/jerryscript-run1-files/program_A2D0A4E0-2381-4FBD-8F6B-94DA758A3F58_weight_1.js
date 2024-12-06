const v0 = [2.0,-903960.0765053526,0.0,-119.36578996640651,-1000000.0,1000000000.0,0.395941557656071,-1.0390526691519625e+308,5.175268900319088e+307];
const v1 = [0.08663283854922543,2.0,-1.7976931348623157e+308,-Infinity,1000000000.0,Infinity,1000000000000.0];
const v2 = [-1.722555021316868,1e-15,-4.918010916919093,1.0];
function f3(a4, a5) {
    const o16 = {
        "a": v2,
        "e": a5,
        get h() {
            a4 / this;
            function F8(a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = F8;
                this.a = a5;
                this.c = a10;
            }
            new F8(v0, v1, v2);
            new F8(v0, v1, a4);
            const v15 = new F8(v2, v1, v0);
            return v15;
        },
    };
    return o16;
}
const v17 = f3(v2, v2);
const v18 = f3(v0, v1);
f3(v2, v0);
function f20(a21, a22) {
    const o27 = {
        ...a21,
        "h": a22,
        51: v18,
        "g": a21,
        "c": f20,
        [v2]: a22,
        "c": v18,
        128: v17,
        ...a22,
        "h": v0,
        set f(a24) {
            v2["copyWithin"](a24, a24, a24);
        },
        "b": a21,
        174: a21,
        ...a22,
    };
    return o27;
}
f20(v1, v0);
f20(v2, v1);
f20(v0, v0);
class C31 {
    o(a33, a34, a35, a36) {
        -4294967295n % 7n;
        const o42 = {
            "maxByteLength": 1402,
        };
        function F44() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v46 = new F44();
        const v49 = new Uint8ClampedArray();
        const v50 = v49.__proto__;
        let v51;
        try { v51 = v46.o(); } catch (e) {}
        try { RegExp.call(v51, v46, v50); } catch (e) {}
        const v53 = new ArrayBuffer(1402, o42);
        const v55 = new Float64Array(v53);
        return v55;
    }
}
new C31();
new C31();
new C31();
Math.max(-7, (-12n).toString());
