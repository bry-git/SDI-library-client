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

  async postCheckout(new_status_data) {
    //   {
    //     "user_id": "1",
    //     "book_id": "1",
    //     "checkout_returned": "fal",
    //     "checkout_due_date": "12/09/2021"
    // }

    // add the new_status_data to status list
    if (this.use_mock_data) {
      return 'mock data'
    } else {
      const post_status_data = Object.assign({}, new_status_data);
      try {
        const response = await fetch(`${this.apiBase}/checkout`, {
          method: "post",
          credentials: "omit", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          mode: "cors",
          body: JSON.stringify(post_status_data),
        });
        return await response.json();
      } catch (error) {
        console.log("Request failed", JSON.stringify(error));
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