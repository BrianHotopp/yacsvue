
import axios from 'axios';

class ApiHandler{
  constructor(apiUrl) {
    this.axios = axios;
    this.apiUrl = apiUrl || '';  // this line allow passing a custom endpoint for testing
    this.config = {
      headers: { 'Cache-Control': 'no-cache' },  // can setup to prevent all caching
      baseURL: this.apiUrl,
    };
  }

  /**
   * @param {Object} payload
   * @param {String} payload.username
   * @param {String} payload.password
   */
  
}

