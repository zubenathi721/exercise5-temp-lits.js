const multilineString = `This is the first line.
This is the second line.`;
console.log(multilineString);


function htmlGeneration (title, description) {
  return `
    <div class="card">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
}

const htmlOutput = htmlGeneration("Hello", "It works.");
console.log(htmlOutput);


const addArrow = (a, b) => a + b;
console.log(addArrow(8, 2))


const numb = [7, 3]
const addNum = numb.map(n => n + 2)
console.log(addNum) 