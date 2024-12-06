function f3(a4) {
    const o18 = {
        4: -16n,
        "a": 8n,
        "d": a4,
        set f(a6) {
            a6[2] = a4;
            const v7 = a4 / this;
            let v8;
            try { v8 = a6(a4, v7, this, v7); } catch (e) {}
            v8.b = v8;
        },
        get g() {
            function f10() {
                return this;
            }
            const o13 = {
                "maxByteLength": 255,
            };
            const v15 = new SharedArrayBuffer(255, o13);
            new BigUint64Array(v15);
            return this;
        },
    };
    return o18;
}
f3(2n);
f3(-16n);
f3(2n);
const o52 = {
    valueOf() {
        const o34 = {
            "maxByteLength": 129,
        };
        const v36 = new SharedArrayBuffer(9, o34);
        new Uint16Array(v36);
        delete this[this];
        Math.trunc(5.0);
        Math.acos(-11);
        const v46 = !255;
        Math.cos(255);
        Math.atanh(5.0);
        Math.ceil(5.0);
        -11 - v46;
        let v51;
        try { v51 = this.valueOf(); } catch (e) {}
        v51.__proto__ = this;
        return v51;
    },
};
try { o52.valueOf(o52, o52, o52, o52, o52); } catch (e) {}
