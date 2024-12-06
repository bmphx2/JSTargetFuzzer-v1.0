function f0() {
}
[1.0778000604117606e+308,-1000000000000.0];
const v2 = [2.386047980063587,-1e-15,2.0,-383073.60576306167];
[-1000000000.0];
class C7 {
    static o(a9, a10, a11, a12) {
        for (let [v14,v15] of a11) {
            for (let v16 = 0; v16 < 32; v16++) {
                v14["p" + v16] = v16;
            }
        }
        const v19 = Symbol.iterator;
        const o28 = {
            [v19]() {
                let v21 = 10;
                const o27 = {
                    next() {
                        v21--;
                        const v25 = v21 == 6;
                        const o26 = {
                            "done": v25,
                            "value": v21,
                        };
                        return o26;
                    },
                };
                return o27;
            },
        };
        return o28;
    }
    get d() {
        let v29 = this;
        v29 >>= v29;
        const o30 = {
            "call": f0,
            "deleteProperty": f0,
            "get": f0,
            "getPrototypeOf": f0,
            "isExtensible": f0,
        };
        new Proxy(C7, o30);
        ({"length":v29,} = v2);
        const v33 = super.d;
        function f34(a35, a36) {
            function f37() {
                return a36;
            }
            return f0;
        }
        f34(v33, C7);
        const t51 = "cGC";
        t51[v29] = v2;
        const v40 = [v33];
        Reflect.apply(("undefined").charCodeAt, v33, v40);
        return v33;
    }
    static 2;
    [v2];
}
new C7();
new C7();
new C7();
function f46() {
    return f0;
}
new Uint8Array(10);
new Uint32Array(5);
new Int16Array(7);
Boolean([-1370826366,11,57564,9,11,1073741825,64,-723774411]);
