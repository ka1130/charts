let data = [];

for (let i = 0; i <= 50; i++) {
  const el = {};
  el["group"] = `Group ${i}`;
  el["rate"] = 100 - i;
  data.push(el);
}

export default data;
