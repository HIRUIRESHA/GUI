class RatingModel {
    constructor(rating) {
      this.user_id = rating.user_id;
      this.movie_id = rating.movie_id;
      this.rating = rating.rating;
      this.review = rating.review;
    }
  }
  
  export default RatingModel;
  