class DataHandler {
  constructor() {
    this.use_mock_data = true;
    if (process.env.REACT_APP_MOCKAPIMODE === "production") {
      this.use_mock_data = false;
    }
    this.apiBase = process.env.REACT_APP_APIURL;
  }

  //utility function
  promiseInput(input) {
    //the input parameter is in scope to the below promise now
    return new Promise(function (resolve, reject) {
      resolve(input);
    });
  }

  async getUsers() {
  if (this.use_mock_data) {
    return 'mock data'
  } else {
    try {
      const response= await fetch(`${this.apiBase}/user`)
      return await response.json();
    }
    catch(error) {
      console.log("Request failed", error)
      }
    }
  }

  async getCheckoutByBook(id) {
    if (this.use_mock_data) {
      return 'mock data'
    } else {
      try {
        const response = await fetch(`${this.apiBase}/checkout?checkout.book_id=${id}`);
        return await response.json();
      } catch (error) {
        console.log("Request failed", error);
      }
    }
  }




  async getBooks() {
    // returns a an array of objects containing book type data
    if (this.use_mock_data) {
      return 'mock data'
    } else {
      try {
        const response = await fetch(`${this.apiBase}/book`);
        return await response.json();
      } catch (error) {
        console.log("Request failed", error);
      }
    }
  }

  async getCheckouts() {
    // returns a an array of objects containing book type data
    if (this.use_mock_data) {
      return 'mock data'
    } else {
      try {
        const response = await fetch(`${this.apiBase}/checkout`);
        return await response.json();
      } catch (error) {
        console.log("Request failed", error);
      }
    }
  }


}

export default DataHandler