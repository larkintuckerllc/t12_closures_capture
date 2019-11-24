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
