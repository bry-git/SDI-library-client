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

  async getBooks() {
    // returns a an array of objects containing aircraft type data
    if (this.use_mock_data) {
      return 'mock data'
    } else {
      try {
        const response = await fetch(`${this.apiBase}/books`);
        return await response.json();
      } catch (error) {
        console.log("Request failed", error);
      }
    }
  }


}

export default DataHandler