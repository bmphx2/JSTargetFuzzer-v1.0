const v2 = new Int32Array(8);
const v5 = new Float64Array(1000);
const v8 = new Int32Array(12);
const v14 = [];
const v16 = Reflect.apply(v8.toString, v2, v14);
let v17;
try { v17 = v16.p(12, -14, Reflect, Float64Array, v8); } catch (e) {}
v5.length = 0;
let v19;
try { v19 = v8.filter(v17, v2); } catch (e) {}
try { v2.lastIndexOf(v19, -1073741824); } catch (e) {}
