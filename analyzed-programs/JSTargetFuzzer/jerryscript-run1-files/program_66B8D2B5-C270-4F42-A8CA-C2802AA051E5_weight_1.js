[];
const v12 = new Int32Array(3003);
const v15 = new Uint8ClampedArray(107);
const v18 = new Uint32Array(0);
function f19() {
}
function f20() {
    const o26 = {
        get g() {
            new f19();
            return f19;
        },
        "h": f19,
        ...f19,
        "g": f19,
        "a": f19,
        ...f19,
    };
    return o26;
}
f20();
const v28 = f20();
f20(f19);
let v32 = ReferenceError;
let v33 = new v32(438);
new Uint32Array(129);
let v39 = new Int16Array(512);
[,v32,v39,v33] = v39;
v28.g += 438;
const v41 = Symbol.iterator;
new BigUint64Array(2077);
new Float32Array(512);
new Float64Array(59);
const o72 = {
    [v41]() {
        let v52 = -45850;
        const o71 = {
            next() {
                let v53 = this;
                let v54;
                try { v54 = v18.toLocaleString(v33); } catch (e) {}
                let v55;
                try { v55 = new v54(v54, Uint32Array, v41, v53); } catch (e) {}
                v55 >>= Uint32Array;
                v53 -= v53;
                v15[-2];
                v52--;
                -v54;
                this.__proto__ = v12;
                v52 = 512;
                f19();
                const v64 = v52 == 0;
                function f65() {
                    try {
                    } finally {
                        function F66() {
                            if (!new.target) { throw 'must be called with new'; }
                        }
                        const v68 = new F66();
                        return v68;
                    }
                    return f65;
                }
                f65();
                const o70 = {
                    "done": v64,
                    "value": v52,
                };
                return o70;
            },
        };
        return o71;
    },
};
