let data = [];

for (let i = 0; i < 50; i++) {
  const el = {};
  el["quarter"] = i + 1;
  el["earnings"] = 10000 + (i + 1) * 200;
  data.push(el);
}

console.log(data);

export default data;
