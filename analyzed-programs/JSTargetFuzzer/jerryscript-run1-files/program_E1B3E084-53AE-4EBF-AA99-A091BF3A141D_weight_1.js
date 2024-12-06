const v3 = [-342.5362879210396];
const v4 = [-342.5362879210396,v3,-7.571884993314404];
const v5 = [-7.571884993314404,v3,-342.5362879210396];
const v6 = [-342.5362879210396,v5,-7.571884993314404,-342.5362879210396,v3];
[v6,-7.571884993314404,v4,v6,v5];
[Infinity,-7.571884993314404,v6,Infinity];
new Int32Array(6);
let v19 = Int16Array;
new v19(184);
const v23 = new Float64Array(65);
[v19] = v23;
const v31 = v5.iterator;
const o40 = {
    [v31]() {
        let v33 = 10;
        const o39 = {
            next() {
                v33--;
                const v37 = v33 == 0;
                const o38 = {
                    "done": v37,
                    "value": v33,
                };
                return o38;
            },
        };
        return o39;
    },
};
