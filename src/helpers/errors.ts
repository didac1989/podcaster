export const httpErrorHandler = (error: any) => {
  if (error === null) {
    console.log('Error is null!');
    return;
  }
  if (error.response) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else {
    console.log('Error', error.message);
  }
};
