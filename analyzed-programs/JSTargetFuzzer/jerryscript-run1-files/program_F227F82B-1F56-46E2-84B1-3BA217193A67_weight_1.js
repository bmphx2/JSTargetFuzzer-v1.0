const v0 = [];
function f4(a5) {
    const o23 = {
        get a() {
            let {"length":v7,...v8} = v0;
            return v7;
        },
        ...v0,
        [268435456]: 2147483648,
        "h": a5,
        4: 2147483648,
        set f(a10) {
            let [v11,v12] = this;
            v11[a10.iterator] = 268435456;
        },
        "d": v0,
        ...v0,
        m(a19, a20) {
            const v21 = this[a5];
            let v22;
            try { v22 = new a20(a5, v21, a5); } catch (e) {}
            return v22;
        },
    };
    return o23;
}
f4(v0);
const v25 = f4(2147483648);
f4(268435456);
function f27() {
    return v25;
}
const v33 = new Int8Array(5);
new Uint8ClampedArray(3682);
new Int8Array(3554);
class C40 {
    valueOf(a42, a43, a44, a45) {
        try {
            super.atan(this, v33);
        } catch(e47) {
        }
        return a45;
    }
    set e(a49) {
        {
        }
    }
}
