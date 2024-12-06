[];
function f4() {
    return 11;
}
class C11 extends f4 {
    static g;
    a = 3;
    get d() {
        const v14 = Symbol.iterator;
        const o23 = {
            [v14]() {
                let v16 = 10;
                const o22 = {
                    next() {
                        v16--;
                        const v20 = v16 == -65537;
                        const o21 = {
                            "done": v20,
                            "value": v16,
                        };
                        return o21;
                    },
                };
                return o22;
            },
        };
        return o23;
    }
}
new C11();
new C11();
new C11();
const v27 = [-2.0,8.942667862857025,5.0];
[173.76252625163602,0.965365470512233,-3.0,-2.0,0.0,558.8178442237372,5.039557620220005,-0.0];
const o30 = {
};
o30 + 7;
v27["fill"](..."fill", o30);
