/* eslint-disable no-console */
{
  const x = 4;
  function equalToXF(z: number): boolean {
    return z === x;
  }
  const equalToX = (z: number): boolean => z === x;
  const y = 4;
  console.log(equalToXF(y)); // true
  console.log(equalToX(y)); // true
}

{
  const v1 = [1, 2, 3];
  // 1 2 3
  v1.forEach(val => {
    console.log(`Got: ${val}`);
  });
  // 1 2 3
  v1.forEach(val => {
    console.log(`Got: ${val}`);
  });
}

{
  const v1 = [1, 2, 3];
  const v2 = v1.map(x => x + 1); // FUNC EXECUTED
  // 2 3 4
  v2.forEach(val => {
    console.log(`Got: ${val}`);
  });
}

interface Shoe {
  size: number;
  style: string;
}

const shoesInMySize = (shoes: Shoe[], shoeSize: number): Shoe[] =>
  shoes.filter(shoe => shoe.size === shoeSize);

{
  const shoes: Shoe[] = [
    {
      size: 10,
      style: 'sneaker',
    },
    {
      size: 13,
      style: 'sandal',
    },
    {
      size: 10,
      style: 'boot',
    },
  ];
  const inMySize = shoesInMySize(shoes, 10);
  inMySize.forEach(shoe => {
    // sneaker boot
    console.log(`Got: ${shoe.style}`);
  });
}
