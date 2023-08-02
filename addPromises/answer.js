const addTwoPromises = async function (promise1, promise2) {
  const res1 = await promise1;
  const res2 = await promise2;
  return res1+res2
};
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

async function call() {
  console.log(await addTwoPromises(promise1, promise2));
}

call()
