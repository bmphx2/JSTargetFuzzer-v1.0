const v0 = [5.0,-1.7976931348623157e+308,0.3477893702776831,-1.0201591385286777e+308,614762.2866792898];
const v1 = [954.2090843234669,-0.0,NaN,685732.8536507026,0.676791864318103,4.0,5.0,1.0,-965926.0298334191];
let v2 = [0.0];
class C3 {
    toString(a5) {
        let v4 = this;
        try {
            super.race();
        } catch(e7) {
        }
        [v4,v2,a5] = a5;
        return v2;
    }
    n(a9, a10) {
        for (let v14 = 0; v14 < 32; v14++) {
            a9["p" + v14] = v14;
        }
        return a10;
    }
}
const v17 = new C3();
const v18 = new C3();
new C3();
function f20(a21, a22, a23) {
    const o37 = {
        "f": a23,
        ...v1,
        __proto__: v0,
        "d": C3,
        set e(a25) {
            const v27 = Symbol.iterator;
            const o36 = {
                [v27]() {
                    let v29 = 10;
                    const o35 = {
                        next() {
                            v29--;
                            const v33 = v29 == 0;
                            const o34 = {
                                "done": v33,
                                "value": v29,
                            };
                            return o34;
                        },
                    };
                    return o35;
                },
            };
        },
    };
    return o37;
}
const v38 = f20(v17, C3, v2);
f20(f20(v18, v17, v17), v2, v18);
Math.sqrt(+v38);
const v49 = !12;
const v50 = v49 / 372472124;
+v49;
Math.exp(v50);
const o55 = {
    "maxByteLength": 127,
};
const v57 = new ArrayBuffer(6, o55);
new BigUint64Array(v57);
