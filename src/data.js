let data = [];

for (let i = 0; i < 70; i++) {
  const el = {};
  el["group"] = `Group ${i}`;
  el["rate"] = 100 - i;
  data.push(el);
}

console.log(data);

export default data;
