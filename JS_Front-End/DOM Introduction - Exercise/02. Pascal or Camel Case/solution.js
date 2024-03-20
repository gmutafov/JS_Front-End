function solve() {
  const textEl = document.getElementById('text');
  const namingConventionEl = document.getElementById('naming-convention');
  const resultEl = document.querySelector('#result');

  const text = textEl.value;
  const namingConvention = namingConventionEl.value;

  const convertToPascal = (text) =>
      text
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join('');

  const convertor = {
      'Pascal Case': convertToPascal,
      'Camel Case': (text) => convertToPascal(text).charAt(0).toLowerCase() + convertToPascal(text).slice(1)
  }
  if (!convertor[namingConvention]){
      resultEl.textContent = 'Error!';
      return
  }
  resultEl.textContent = convertor[namingConvention](text);
}