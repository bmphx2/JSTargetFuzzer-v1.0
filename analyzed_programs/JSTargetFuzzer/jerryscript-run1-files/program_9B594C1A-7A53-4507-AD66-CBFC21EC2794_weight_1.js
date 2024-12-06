function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 127;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [551408.1590898205,-51973.81186979101];
const v7 = [3.827019180637814,1000.0,-1.4584325810592289e+308,0.6348563235945655];
const v8 = [-1.0];
const v11 = new Array(16);
function f12(a13, a14, a15) {
    const o38 = {
        set g(a17) {
            const v18 = this.d;
            const v19 = a13.__proto__;
            function f20() {
                return f20;
            }
            class C23 extends (5).constructor {
            }
            try { v19(v18, a17); } catch (e) {}
        },
        [Array]: v6,
        [a14](a26, a27, a28, a29) {
            let v30;
            try { v30 = new a15(a26, v4, a14, a26, a15); } catch (e) {}
            let v31;
            try { v31 = v30(this); } catch (e) {}
            ("function").replaceAll("o");
            const v36 = new WeakSet();
            v36.has();
            ({"b":v31,"d":a14,} = a29);
            v30.g = v5;
            return a27;
        },
    };
    return o38;
}
f12(v7, v11, v5);
f12(v8, v6, v11);
const v42 = [992.8042074437715,-53.22282882889647,-6.46888722357242,1000000.0,-9.792725739616209e+307,-2.0,0.6799536982439116,-605166.430039607];
try {
    new Uint32Array(4087n, 1071, ...v42);
} catch(e46) {
} finally {
}
f12(v6, v7, 16);
const o52 = {
    m(a49, a50, a51) {
        return a51;
    },
};
const v55 = 2147483649 && -2147483649n;
v55 & v55;
