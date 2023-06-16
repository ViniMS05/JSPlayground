const livros = [
  { titulo: "A Guerra dos Tronos", autor: "George R. R. Martin" },
  { titulo: "O Festim dos Corvos", autor: "George R. R. Martin" },
  { titulo: "O Senhor dos Anéis", autor: "J. R. R. Tolkien" },
  { titulo: "As Duas Torres", autor: "J. R. R. Tolkien" },
  { titulo: "O Retorno do Rei", autor: "J. R. R. Tolkien" },
];

const contagemPorAutor = livros.reduce((acumulador, livro) => {
  if (!acumulador[livro.autor]) {
    acumulador[livro.autor] = 0;
  }

  acumulador[livro.autor]++;

  return acumulador;
}, {});

const booksData = livros.reduce(
  (acc, current) => {
    acc.books.push(current.titulo);

    const hasAuthor = acc.authors.includes(current.autor);
    if (!hasAuthor) {
      acc.authors.push(current.autor);
    }

    return acc;
  },
  { books: [], authors: [] }
);

// console.log(contagemPorAutor); Output: { 'George R. R. Martin': 2, 'J. R. R. Tolkien': 3 }
// console.log(booksData);

let data = [2, 2, 4, 10, 5, 7, 734, 735];

class toObject {
  constructor(array) {
    this.array = array;
  }

  convert() {
    const obj = this.array.reduce((acc, current) => {
      if (!acc[current]) {
        acc[current] = 0;
      }

      acc[current]++;

      return acc;
    }, {});

    return obj;
  }

  sumAndMultiply() {
    const value = this.array.reduce(
      (acc, current) => {
        acc["sum"] += current;
        acc["multiply"] *= current;

        return acc;
      },
      { sum: 0, multiply: 1 }
    );

    return value;
  }

  oddsAndEven() {
    const value = this.array.reduce(
      (acc, current) => {
        if (current % 2 === 0) {
          acc.even.push(current);
        } else {
          acc.odds.push(current);
        }

        return acc;
      },
      {
        odds: [],
        even: [],
      }
    );

    return value;
  }
}

const obj = new toObject(data);

// console.log(obj.convert());
// console.log(obj.sumAndMultiply());
// console.log(obj.oddsAndEven());
