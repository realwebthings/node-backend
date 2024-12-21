import assert from 'assert/strict';


const throwSyntaxError = async() => {
  try {
      await assert.doesNotReject(
          async () => {
            throw new TypeError('Wrong value');
          },
          SyntaxError,
        );
  } catch (error) {
      console.log("==== checking ====", error);
  }
}

const throwTypeError = () => {

  assert.doesNotThrow(
      () => {
        throw new TypeError('Wrong value');
      },
      TypeError,
    );
}

export { throwSyntaxError, throwTypeError};