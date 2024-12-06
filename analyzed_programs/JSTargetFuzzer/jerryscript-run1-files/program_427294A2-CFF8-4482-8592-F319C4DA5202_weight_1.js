const v9 = [-1.2483396213728248,396494.469415677,2.0,2.220446049250313e-16,-2.1763943052052737,189.56907828922317,-1000000000.0,-1.7976931348623157e+308,0.22663482427910653];
const v10 = [NaN,0.0,0.26966314648606415,974.6328872514771];
const v11 = [1.7766736608242195e+308];
function f12(a13, a14, a15) {
    const o29 = {
        n(a17, a18, a19) {
            function f20(a21, a22, a23) {
                'use strict';
                a14[0] = a23;
                return a13;
            }
            const v24 = f20(a14, a19, v9);
            f20(v24, v24, a19, a19, this, ...v11);
            return a18;
        },
        [a14]: -10,
        [2.220446049250313e-16]: a14,
    };
    return o29;
}
f12(256, v10, v10);
f12(-10, v10, v9);
f12(256, v10, v9);
const v35 = new Uint8ClampedArray(2634);
const v38 = new Uint32Array(3769);
function f39(a40, a41, a42, a43) {
    const o44 = {
        ...v38,
        ...v35,
    };
    return o44;
}
const v45 = f39(Uint32Array, 2634, 3769, v38);
f39(v45, v45, v45, Uint8ClampedArray);
f39();
