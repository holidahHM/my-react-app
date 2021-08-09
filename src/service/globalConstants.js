export default class globalConstants{
    static getRequestParams(searchTitle, selLimit) {
      let params = {};

      if (searchTitle) {
        params["q"] = searchTitle;
      }

      if (selLimit) {
        params["limit"] = selLimit;
      }

      return params;
    }
}